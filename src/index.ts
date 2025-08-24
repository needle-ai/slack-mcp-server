import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { WebClient } from '@slack/web-api';
import {
  ListChannelsRequestSchema,
  PostMessageRequestSchema,
  ReplyToThreadRequestSchema,
  AddReactionRequestSchema,
  GetChannelHistoryRequestSchema,
  GetThreadRepliesRequestSchema,
  GetUsersRequestSchema,
  GetUserProfilesRequestSchema,
  ListChannelsResponseSchema,
  GetUsersResponseSchema,
  GetUserProfilesResponseSchema,
  UserProfileResponseSchema,
  SearchMessagesRequestSchema,
  SearchMessagesResponseSchema,
  SearchChannelsRequestSchema,
  SearchUsersRequestSchema,
  ConversationsHistoryResponseSchema,
  ConversationsRepliesResponseSchema,
} from './schemas.js';

export function createServer(accessToken: string): Server {
  const server = new Server(
    {
      name: 'slack-mcp-server',
      version: '0.0.1',
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  const slackClient = new WebClient(accessToken);

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: 'slack_list_channels',
          description: 'List public channels in the workspace with pagination',
          inputSchema: zodToJsonSchema(ListChannelsRequestSchema),
        },
        {
          name: 'slack_post_message',
          description: 'Post a new message to a Slack channel',
          inputSchema: zodToJsonSchema(PostMessageRequestSchema),
        },
        {
          name: 'slack_reply_to_thread',
          description: 'Reply to a specific message thread in Slack',
          inputSchema: zodToJsonSchema(ReplyToThreadRequestSchema),
        },
        {
          name: 'slack_add_reaction',
          description: 'Add a reaction emoji to a message',
          inputSchema: zodToJsonSchema(AddReactionRequestSchema),
        },
        {
          name: 'slack_get_channel_history',
          description:
            'Get messages from a channel in chronological order. Use this when: 1) You need the latest conversation flow without specific filters, 2) You want ALL messages including bot/automation messages, 3) You need to browse messages sequentially with pagination. Do NOT use if you have specific search criteria (user, keywords, dates) - use slack_search_messages instead.',
          inputSchema: zodToJsonSchema(GetChannelHistoryRequestSchema),
        },
        {
          name: 'slack_get_thread_replies',
          description: 'Get all replies in a message thread',
          inputSchema: zodToJsonSchema(GetThreadRepliesRequestSchema),
        },
        {
          name: 'slack_get_users',
          description:
            'Retrieve basic profile information of all users in the workspace',
          inputSchema: zodToJsonSchema(GetUsersRequestSchema),
        },
        {
          name: 'slack_get_user_profiles',
          description: 'Get multiple users profile information in bulk',
          inputSchema: zodToJsonSchema(GetUserProfilesRequestSchema),
        },
        {
          name: 'slack_search_messages',
          description:
            'Search for messages with specific criteria/filters. Use this when: 1) You need to find messages from a specific user, 2) You need messages from a specific date range, 3) You need to search by keywords, 4) You want to filter by channel. This tool is optimized for targeted searches. For general channel browsing without filters, use slack_get_channel_history instead.',
          inputSchema: zodToJsonSchema(SearchMessagesRequestSchema),
        },
        {
          name: 'slack_search_channels',
          description:
            'Search for channels by partial name match. Use this when you need to find channels containing specific keywords in their names. Returns up to the specified limit of matching channels.',
          inputSchema: zodToJsonSchema(SearchChannelsRequestSchema),
        },
        {
          name: 'slack_search_users',
          description:
            'Search for users by partial name match across username, display name, and real name. Use this when you need to find users containing specific keywords in their names. Returns up to the specified limit of matching users.',
          inputSchema: zodToJsonSchema(SearchUsersRequestSchema),
        },
      ],
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    try {
      if (!request.params) {
        throw new Error('Params are required');
      }
      switch (request.params.name) {
        case 'slack_list_channels': {
          const args = ListChannelsRequestSchema.parse(
            request.params.arguments
          );
          const response = await slackClient.conversations.list({
            limit: args.limit,
            cursor: args.cursor,
            types: 'public_channel', // Only public channels
          });
          if (!response.ok) {
            throw new Error(`Failed to list channels: ${response.error}`);
          }
          const parsed = ListChannelsResponseSchema.parse(response);

          return {
            content: [{ type: 'text', text: JSON.stringify(parsed) }],
          };
        }

        case 'slack_post_message': {
          const args = PostMessageRequestSchema.parse(request.params.arguments);
          const response = await slackClient.chat.postMessage({
            channel: args.channel_id,
            text: args.text,
          });
          if (!response.ok) {
            throw new Error(`Failed to post message: ${response.error}`);
          }
          return {
            content: [{ type: 'text', text: 'Message posted successfully' }],
          };
        }

        case 'slack_reply_to_thread': {
          const args = ReplyToThreadRequestSchema.parse(
            request.params.arguments
          );
          const response = await slackClient.chat.postMessage({
            channel: args.channel_id,
            thread_ts: args.thread_ts,
            text: args.text,
          });
          if (!response.ok) {
            throw new Error(`Failed to reply to thread: ${response.error}`);
          }
          return {
            content: [
              { type: 'text', text: 'Reply sent to thread successfully' },
            ],
          };
        }
        case 'slack_add_reaction': {
          const args = AddReactionRequestSchema.parse(request.params.arguments);
          const response = await slackClient.reactions.add({
            channel: args.channel_id,
            timestamp: args.timestamp,
            name: args.reaction,
          });
          if (!response.ok) {
            throw new Error(`Failed to add reaction: ${response.error}`);
          }
          return {
            content: [{ type: 'text', text: 'Reaction added successfully' }],
          };
        }

        case 'slack_get_channel_history': {
          const args = GetChannelHistoryRequestSchema.parse(
            request.params.arguments
          );
          const response = await slackClient.conversations.history({
            channel: args.channel_id,
            limit: args.limit,
            cursor: args.cursor,
          });
          if (!response.ok) {
            throw new Error(`Failed to get channel history: ${response.error}`);
          }
          const parsedResponse =
            ConversationsHistoryResponseSchema.parse(response);
          return {
            content: [{ type: 'text', text: JSON.stringify(parsedResponse) }],
          };
        }

        case 'slack_get_thread_replies': {
          const args = GetThreadRepliesRequestSchema.parse(
            request.params.arguments
          );
          const response = await slackClient.conversations.replies({
            channel: args.channel_id,
            ts: args.thread_ts,
            limit: args.limit,
            cursor: args.cursor,
          });
          if (!response.ok) {
            throw new Error(`Failed to get thread replies: ${response.error}`);
          }
          const parsedResponse =
            ConversationsRepliesResponseSchema.parse(response);
          return {
            content: [{ type: 'text', text: JSON.stringify(parsedResponse) }],
          };
        }

        case 'slack_get_users': {
          const args = GetUsersRequestSchema.parse(request.params.arguments);
          const response = await slackClient.users.list({
            limit: args.limit,
            cursor: args.cursor,
          });
          if (!response.ok) {
            throw new Error(`Failed to get users: ${response.error}`);
          }
          const parsed = GetUsersResponseSchema.parse(response);

          return {
            content: [{ type: 'text', text: JSON.stringify(parsed) }],
          };
        }

        case 'slack_get_user_profiles': {
          const args = GetUserProfilesRequestSchema.parse(
            request.params.arguments
          );

          // Use Promise.all for concurrent API calls
          const profilePromises = args.user_ids.map(async (userId) => {
            try {
              const response = await slackClient.users.profile.get({
                user: userId,
              });
              if (!response.ok) {
                return {
                  user_id: userId,
                  error: response.error || 'Unknown error',
                };
              }
              const parsed = UserProfileResponseSchema.parse(response);
              return {
                user_id: userId,
                profile: parsed.profile,
              };
            } catch (error) {
              return {
                user_id: userId,
                error: error instanceof Error ? error.message : 'Unknown error',
              };
            }
          });

          const results = await Promise.all(profilePromises);
          const responseData = GetUserProfilesResponseSchema.parse({
            profiles: results,
          });

          return {
            content: [{ type: 'text', text: JSON.stringify(responseData) }],
          };
        }

        case 'slack_search_messages': {
          const parsedParams = SearchMessagesRequestSchema.parse(
            request.params.arguments
          );

          let query = parsedParams.query || '';

          if (parsedParams.in_channel) {
            // Resolve channel name from ID
            const channelInfo = await slackClient.conversations.info({
              channel: parsedParams.in_channel,
            });
            if (!channelInfo.ok || !channelInfo.channel?.name) {
              throw new Error(
                `Failed to get channel info: ${channelInfo.error}`
              );
            }
            query += ` in:${channelInfo.channel.name}`;
          }

          // Handle from_user - always use user ID format
          if (parsedParams.from_user) {
            query += ` from:<@${parsedParams.from_user}>`;
          }

          // Date modifiers
          if (parsedParams.before) {
            query += ` before:${parsedParams.before}`;
          }
          if (parsedParams.after) {
            query += ` after:${parsedParams.after}`;
          }
          if (parsedParams.on) {
            query += ` on:${parsedParams.on}`;
          }
          if (parsedParams.during) {
            query += ` during:${parsedParams.during}`;
          }

          // Trim and log the final query for debugging
          query = query.trim();
          console.log('Search query:', query);

          const response = await slackClient.search.messages({
            query: query,
            highlight: parsedParams.highlight,
            sort: parsedParams.sort,
            sort_dir: parsedParams.sort_dir,
            count: parsedParams.count,
            page: parsedParams.page,
          });

          if (!response.ok) {
            throw new Error(`Failed to search messages: ${response.error}`);
          }

          const parsed = SearchMessagesResponseSchema.parse(response);
          return {
            content: [{ type: 'text', text: JSON.stringify(parsed) }],
          };
        }

        case 'slack_search_channels': {
          const args = SearchChannelsRequestSchema.parse(
            request.params.arguments
          );

          // Fetch all channels with a reasonable limit
          const allChannels: Array<{
            id?: string;
            name?: string;
            is_archived?: boolean;
            [key: string]: unknown;
          }> = [];
          let cursor: string | undefined;
          const maxPages = 5; // Limit to prevent infinite loops
          let pageCount = 0;

          // Fetch multiple pages if needed
          while (pageCount < maxPages) {
            const response = await slackClient.conversations.list({
              types: 'public_channel',
              exclude_archived: !args.include_archived,
              limit: 1000, // Max allowed by Slack API
              cursor,
            });

            if (!response.ok) {
              throw new Error(`Failed to search channels: ${response.error}`);
            }

            if (response.channels) {
              allChannels.push(...(response.channels as typeof allChannels));
            }

            cursor = response.response_metadata?.next_cursor;
            pageCount++;

            // Stop if no more pages
            if (!cursor) break;
          }

          // Filter channels by name (case-insensitive partial match)
          const searchTerm = args.query.toLowerCase();
          const filteredChannels = allChannels.filter((channel) =>
            channel.name?.toLowerCase().includes(searchTerm)
          );

          // Limit results
          const limitedChannels = filteredChannels.slice(0, args.limit);

          const response = {
            ok: true,
            channels: limitedChannels,
          };

          const parsed = ListChannelsResponseSchema.parse(response);
          return {
            content: [{ type: 'text', text: JSON.stringify(parsed) }],
          };
        }

        case 'slack_search_users': {
          const args = SearchUsersRequestSchema.parse(request.params.arguments);

          // Fetch all users with a reasonable limit
          const allUsers: Array<{
            id?: string;
            name?: string;
            real_name?: string;
            is_bot?: boolean;
            profile?: {
              display_name?: string;
              display_name_normalized?: string;
              [key: string]: unknown;
            };
            [key: string]: unknown;
          }> = [];
          let cursor: string | undefined;
          const maxPages = 5; // Limit to prevent infinite loops
          let pageCount = 0;

          // Fetch multiple pages if needed
          while (pageCount < maxPages) {
            const response = await slackClient.users.list({
              limit: 1000, // Max allowed by Slack API
              cursor,
            });

            if (!response.ok) {
              throw new Error(`Failed to search users: ${response.error}`);
            }

            if (response.members) {
              allUsers.push(...(response.members as typeof allUsers));
            }

            cursor = response.response_metadata?.next_cursor;
            pageCount++;

            // Stop if no more pages
            if (!cursor) break;
          }

          // Filter users (case-insensitive partial match across multiple fields)
          const searchTerm = args.query.toLowerCase();
          const filteredUsers = allUsers.filter((user) => {
            // Skip bots if requested
            if (!args.include_bots && user.is_bot) {
              return false;
            }

            // Search across multiple name fields
            const name = user.name?.toLowerCase() || '';
            const realName = user.real_name?.toLowerCase() || '';
            const displayName = user.profile?.display_name?.toLowerCase() || '';
            const displayNameNormalized =
              user.profile?.display_name_normalized?.toLowerCase() || '';

            return (
              name.includes(searchTerm) ||
              realName.includes(searchTerm) ||
              displayName.includes(searchTerm) ||
              displayNameNormalized.includes(searchTerm)
            );
          });

          // Limit results
          const limitedUsers = filteredUsers.slice(0, args.limit);

          const response = {
            ok: true,
            members: limitedUsers,
          };

          const parsed = GetUsersResponseSchema.parse(response);
          return {
            content: [{ type: 'text', text: JSON.stringify(parsed) }],
          };
        }

        default:
          throw new Error(`Unknown tool: ${request.params.name}`);
      }
    } catch (error) {
      console.error('Error handling request:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      throw new Error(errorMessage);
    }
  });

  return server;
}
