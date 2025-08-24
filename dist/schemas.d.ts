import { z } from 'zod';
export declare const ChannelSchema: z.ZodObject<{
    conversation_host_id: z.ZodOptional<z.ZodString>;
    created: z.ZodOptional<z.ZodNumber>;
    id: z.ZodOptional<z.ZodString>;
    is_archived: z.ZodOptional<z.ZodBoolean>;
    name: z.ZodOptional<z.ZodString>;
    name_normalized: z.ZodOptional<z.ZodString>;
    num_members: z.ZodOptional<z.ZodNumber>;
    purpose: z.ZodOptional<z.ZodObject<{
        creator: z.ZodOptional<z.ZodString>;
        last_set: z.ZodOptional<z.ZodNumber>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        creator?: string | undefined;
        last_set?: number | undefined;
        value?: string | undefined;
    }, {
        creator?: string | undefined;
        last_set?: number | undefined;
        value?: string | undefined;
    }>>;
    shared_team_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    topic: z.ZodOptional<z.ZodObject<{
        creator: z.ZodOptional<z.ZodString>;
        last_set: z.ZodOptional<z.ZodNumber>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        creator?: string | undefined;
        last_set?: number | undefined;
        value?: string | undefined;
    }, {
        creator?: string | undefined;
        last_set?: number | undefined;
        value?: string | undefined;
    }>>;
    updated: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    conversation_host_id?: string | undefined;
    created?: number | undefined;
    id?: string | undefined;
    is_archived?: boolean | undefined;
    name?: string | undefined;
    name_normalized?: string | undefined;
    num_members?: number | undefined;
    purpose?: {
        creator?: string | undefined;
        last_set?: number | undefined;
        value?: string | undefined;
    } | undefined;
    shared_team_ids?: string[] | undefined;
    topic?: {
        creator?: string | undefined;
        last_set?: number | undefined;
        value?: string | undefined;
    } | undefined;
    updated?: number | undefined;
}, {
    conversation_host_id?: string | undefined;
    created?: number | undefined;
    id?: string | undefined;
    is_archived?: boolean | undefined;
    name?: string | undefined;
    name_normalized?: string | undefined;
    num_members?: number | undefined;
    purpose?: {
        creator?: string | undefined;
        last_set?: number | undefined;
        value?: string | undefined;
    } | undefined;
    shared_team_ids?: string[] | undefined;
    topic?: {
        creator?: string | undefined;
        last_set?: number | undefined;
        value?: string | undefined;
    } | undefined;
    updated?: number | undefined;
}>;
export declare const AddReactionRequestSchema: z.ZodObject<{
    channel_id: z.ZodString;
    reaction: z.ZodString;
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    channel_id: string;
    reaction: string;
    timestamp: string;
}, {
    channel_id: string;
    reaction: string;
    timestamp: string;
}>;
export declare const GetChannelHistoryRequestSchema: z.ZodObject<{
    channel_id: z.ZodString;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    channel_id: string;
    limit: number;
    cursor?: string | undefined;
}, {
    channel_id: string;
    cursor?: string | undefined;
    limit?: number | undefined;
}>;
export declare const GetThreadRepliesRequestSchema: z.ZodObject<{
    channel_id: z.ZodString;
    thread_ts: z.ZodString;
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    thread_ts: string;
    channel_id: string;
    limit: number;
    cursor?: string | undefined;
}, {
    thread_ts: string;
    channel_id: string;
    cursor?: string | undefined;
    limit?: number | undefined;
}>;
export declare const GetUsersRequestSchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    cursor?: string | undefined;
}, {
    cursor?: string | undefined;
    limit?: number | undefined;
}>;
export declare const GetUserProfilesRequestSchema: z.ZodObject<{
    user_ids: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    user_ids: string[];
}, {
    user_ids: string[];
}>;
export declare const ListChannelsRequestSchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    cursor?: string | undefined;
}, {
    cursor?: string | undefined;
    limit?: number | undefined;
}>;
export declare const PostMessageRequestSchema: z.ZodObject<{
    channel_id: z.ZodString;
    text: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    channel_id: string;
}, {
    text: string;
    channel_id: string;
}>;
export declare const ReplyToThreadRequestSchema: z.ZodObject<{
    channel_id: z.ZodString;
    text: z.ZodString;
    thread_ts: z.ZodString;
}, "strip", z.ZodTypeAny, {
    text: string;
    thread_ts: string;
    channel_id: string;
}, {
    text: string;
    thread_ts: string;
    channel_id: string;
}>;
export declare const SearchChannelsRequestSchema: z.ZodObject<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    include_archived: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    query: string;
    include_archived: boolean;
}, {
    query: string;
    limit?: number | undefined;
    include_archived?: boolean | undefined;
}>;
export declare const SearchUsersRequestSchema: z.ZodObject<{
    query: z.ZodString;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    include_bots: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    query: string;
    include_bots: boolean;
}, {
    query: string;
    limit?: number | undefined;
    include_bots?: boolean | undefined;
}>;
export declare const SearchMessagesRequestSchema: z.ZodObject<{
    query: z.ZodEffects<z.ZodDefault<z.ZodOptional<z.ZodString>>, string, string | undefined>;
    in_channel: z.ZodOptional<z.ZodString>;
    from_user: z.ZodOptional<z.ZodString>;
    before: z.ZodOptional<z.ZodString>;
    after: z.ZodOptional<z.ZodString>;
    on: z.ZodOptional<z.ZodString>;
    during: z.ZodOptional<z.ZodString>;
    highlight: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    sort: z.ZodDefault<z.ZodOptional<z.ZodEnum<["score", "timestamp"]>>>;
    sort_dir: z.ZodDefault<z.ZodOptional<z.ZodEnum<["asc", "desc"]>>>;
    count: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    page: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    sort: "timestamp" | "score";
    count: number;
    query: string;
    highlight: boolean;
    sort_dir: "asc" | "desc";
    page: number;
    in_channel?: string | undefined;
    from_user?: string | undefined;
    before?: string | undefined;
    after?: string | undefined;
    on?: string | undefined;
    during?: string | undefined;
}, {
    sort?: "timestamp" | "score" | undefined;
    count?: number | undefined;
    query?: string | undefined;
    in_channel?: string | undefined;
    from_user?: string | undefined;
    before?: string | undefined;
    after?: string | undefined;
    on?: string | undefined;
    during?: string | undefined;
    highlight?: boolean | undefined;
    sort_dir?: "asc" | "desc" | undefined;
    page?: number | undefined;
}>;
export declare const ConversationsHistoryResponseSchema: z.ZodObject<z.objectUtil.extendShape<{
    error: z.ZodOptional<z.ZodString>;
    ok: z.ZodOptional<z.ZodBoolean>;
    response_metadata: z.ZodOptional<z.ZodObject<{
        next_cursor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        next_cursor?: string | undefined;
    }, {
        next_cursor?: string | undefined;
    }>>;
}, {
    messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
        reactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            users: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }, {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }>, "many">>;
        reply_count: z.ZodOptional<z.ZodNumber>;
        reply_users: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        reply_users_count: z.ZodOptional<z.ZodNumber>;
        subtype: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodString>;
        thread_ts: z.ZodOptional<z.ZodString>;
        ts: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        user: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: string | undefined;
        reactions?: {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }[] | undefined;
        reply_count?: number | undefined;
        reply_users?: string[] | undefined;
        reply_users_count?: number | undefined;
        subtype?: string | undefined;
        text?: string | undefined;
        thread_ts?: string | undefined;
        ts?: string | undefined;
        user?: string | undefined;
    }, {
        type?: string | undefined;
        reactions?: {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }[] | undefined;
        reply_count?: number | undefined;
        reply_users?: string[] | undefined;
        reply_users_count?: number | undefined;
        subtype?: string | undefined;
        text?: string | undefined;
        thread_ts?: string | undefined;
        ts?: string | undefined;
        user?: string | undefined;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    messages?: {
        type?: string | undefined;
        reactions?: {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }[] | undefined;
        reply_count?: number | undefined;
        reply_users?: string[] | undefined;
        reply_users_count?: number | undefined;
        subtype?: string | undefined;
        text?: string | undefined;
        thread_ts?: string | undefined;
        ts?: string | undefined;
        user?: string | undefined;
    }[] | undefined;
}, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    messages?: {
        type?: string | undefined;
        reactions?: {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }[] | undefined;
        reply_count?: number | undefined;
        reply_users?: string[] | undefined;
        reply_users_count?: number | undefined;
        subtype?: string | undefined;
        text?: string | undefined;
        thread_ts?: string | undefined;
        ts?: string | undefined;
        user?: string | undefined;
    }[] | undefined;
}>;
export declare const ConversationsRepliesResponseSchema: z.ZodObject<z.objectUtil.extendShape<{
    error: z.ZodOptional<z.ZodString>;
    ok: z.ZodOptional<z.ZodBoolean>;
    response_metadata: z.ZodOptional<z.ZodObject<{
        next_cursor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        next_cursor?: string | undefined;
    }, {
        next_cursor?: string | undefined;
    }>>;
}, {
    messages: z.ZodOptional<z.ZodArray<z.ZodObject<{
        reactions: z.ZodOptional<z.ZodArray<z.ZodObject<{
            count: z.ZodOptional<z.ZodNumber>;
            name: z.ZodOptional<z.ZodString>;
            url: z.ZodOptional<z.ZodString>;
            users: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }, {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }>, "many">>;
        reply_count: z.ZodOptional<z.ZodNumber>;
        reply_users: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        reply_users_count: z.ZodOptional<z.ZodNumber>;
        subtype: z.ZodOptional<z.ZodString>;
        text: z.ZodOptional<z.ZodString>;
        thread_ts: z.ZodOptional<z.ZodString>;
        ts: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodString>;
        user: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: string | undefined;
        reactions?: {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }[] | undefined;
        reply_count?: number | undefined;
        reply_users?: string[] | undefined;
        reply_users_count?: number | undefined;
        subtype?: string | undefined;
        text?: string | undefined;
        thread_ts?: string | undefined;
        ts?: string | undefined;
        user?: string | undefined;
    }, {
        type?: string | undefined;
        reactions?: {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }[] | undefined;
        reply_count?: number | undefined;
        reply_users?: string[] | undefined;
        reply_users_count?: number | undefined;
        subtype?: string | undefined;
        text?: string | undefined;
        thread_ts?: string | undefined;
        ts?: string | undefined;
        user?: string | undefined;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    messages?: {
        type?: string | undefined;
        reactions?: {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }[] | undefined;
        reply_count?: number | undefined;
        reply_users?: string[] | undefined;
        reply_users_count?: number | undefined;
        subtype?: string | undefined;
        text?: string | undefined;
        thread_ts?: string | undefined;
        ts?: string | undefined;
        user?: string | undefined;
    }[] | undefined;
}, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    messages?: {
        type?: string | undefined;
        reactions?: {
            name?: string | undefined;
            count?: number | undefined;
            url?: string | undefined;
            users?: string[] | undefined;
        }[] | undefined;
        reply_count?: number | undefined;
        reply_users?: string[] | undefined;
        reply_users_count?: number | undefined;
        subtype?: string | undefined;
        text?: string | undefined;
        thread_ts?: string | undefined;
        ts?: string | undefined;
        user?: string | undefined;
    }[] | undefined;
}>;
export declare const GetUsersResponseSchema: z.ZodObject<z.objectUtil.extendShape<{
    error: z.ZodOptional<z.ZodString>;
    ok: z.ZodOptional<z.ZodBoolean>;
    response_metadata: z.ZodOptional<z.ZodObject<{
        next_cursor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        next_cursor?: string | undefined;
    }, {
        next_cursor?: string | undefined;
    }>>;
}, {
    members: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodOptional<z.ZodString>;
        real_name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        name?: string | undefined;
        real_name?: string | undefined;
    }, {
        id?: string | undefined;
        name?: string | undefined;
        real_name?: string | undefined;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    members?: {
        id?: string | undefined;
        name?: string | undefined;
        real_name?: string | undefined;
    }[] | undefined;
}, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    members?: {
        id?: string | undefined;
        name?: string | undefined;
        real_name?: string | undefined;
    }[] | undefined;
}>;
export declare const UserProfileResponseSchema: z.ZodObject<z.objectUtil.extendShape<{
    error: z.ZodOptional<z.ZodString>;
    ok: z.ZodOptional<z.ZodBoolean>;
    response_metadata: z.ZodOptional<z.ZodObject<{
        next_cursor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        next_cursor?: string | undefined;
    }, {
        next_cursor?: string | undefined;
    }>>;
}, {
    profile: z.ZodOptional<z.ZodObject<{
        display_name: z.ZodOptional<z.ZodString>;
        display_name_normalized: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        first_name: z.ZodOptional<z.ZodString>;
        last_name: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        real_name: z.ZodOptional<z.ZodString>;
        real_name_normalized: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        real_name?: string | undefined;
        display_name?: string | undefined;
        display_name_normalized?: string | undefined;
        email?: string | undefined;
        first_name?: string | undefined;
        last_name?: string | undefined;
        phone?: string | undefined;
        real_name_normalized?: string | undefined;
        title?: string | undefined;
    }, {
        real_name?: string | undefined;
        display_name?: string | undefined;
        display_name_normalized?: string | undefined;
        email?: string | undefined;
        first_name?: string | undefined;
        last_name?: string | undefined;
        phone?: string | undefined;
        real_name_normalized?: string | undefined;
        title?: string | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    profile?: {
        real_name?: string | undefined;
        display_name?: string | undefined;
        display_name_normalized?: string | undefined;
        email?: string | undefined;
        first_name?: string | undefined;
        last_name?: string | undefined;
        phone?: string | undefined;
        real_name_normalized?: string | undefined;
        title?: string | undefined;
    } | undefined;
}, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    profile?: {
        real_name?: string | undefined;
        display_name?: string | undefined;
        display_name_normalized?: string | undefined;
        email?: string | undefined;
        first_name?: string | undefined;
        last_name?: string | undefined;
        phone?: string | undefined;
        real_name_normalized?: string | undefined;
        title?: string | undefined;
    } | undefined;
}>;
export declare const GetUserProfilesResponseSchema: z.ZodObject<{
    profiles: z.ZodArray<z.ZodObject<{
        user_id: z.ZodString;
        profile: z.ZodOptional<z.ZodObject<{
            display_name: z.ZodOptional<z.ZodString>;
            display_name_normalized: z.ZodOptional<z.ZodString>;
            email: z.ZodOptional<z.ZodString>;
            first_name: z.ZodOptional<z.ZodString>;
            last_name: z.ZodOptional<z.ZodString>;
            phone: z.ZodOptional<z.ZodString>;
            real_name: z.ZodOptional<z.ZodString>;
            real_name_normalized: z.ZodOptional<z.ZodString>;
            title: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            real_name?: string | undefined;
            display_name?: string | undefined;
            display_name_normalized?: string | undefined;
            email?: string | undefined;
            first_name?: string | undefined;
            last_name?: string | undefined;
            phone?: string | undefined;
            real_name_normalized?: string | undefined;
            title?: string | undefined;
        }, {
            real_name?: string | undefined;
            display_name?: string | undefined;
            display_name_normalized?: string | undefined;
            email?: string | undefined;
            first_name?: string | undefined;
            last_name?: string | undefined;
            phone?: string | undefined;
            real_name_normalized?: string | undefined;
            title?: string | undefined;
        }>>;
        error: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        user_id: string;
        error?: string | undefined;
        profile?: {
            real_name?: string | undefined;
            display_name?: string | undefined;
            display_name_normalized?: string | undefined;
            email?: string | undefined;
            first_name?: string | undefined;
            last_name?: string | undefined;
            phone?: string | undefined;
            real_name_normalized?: string | undefined;
            title?: string | undefined;
        } | undefined;
    }, {
        user_id: string;
        error?: string | undefined;
        profile?: {
            real_name?: string | undefined;
            display_name?: string | undefined;
            display_name_normalized?: string | undefined;
            email?: string | undefined;
            first_name?: string | undefined;
            last_name?: string | undefined;
            phone?: string | undefined;
            real_name_normalized?: string | undefined;
            title?: string | undefined;
        } | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    profiles: {
        user_id: string;
        error?: string | undefined;
        profile?: {
            real_name?: string | undefined;
            display_name?: string | undefined;
            display_name_normalized?: string | undefined;
            email?: string | undefined;
            first_name?: string | undefined;
            last_name?: string | undefined;
            phone?: string | undefined;
            real_name_normalized?: string | undefined;
            title?: string | undefined;
        } | undefined;
    }[];
}, {
    profiles: {
        user_id: string;
        error?: string | undefined;
        profile?: {
            real_name?: string | undefined;
            display_name?: string | undefined;
            display_name_normalized?: string | undefined;
            email?: string | undefined;
            first_name?: string | undefined;
            last_name?: string | undefined;
            phone?: string | undefined;
            real_name_normalized?: string | undefined;
            title?: string | undefined;
        } | undefined;
    }[];
}>;
export declare const ListChannelsResponseSchema: z.ZodObject<z.objectUtil.extendShape<{
    error: z.ZodOptional<z.ZodString>;
    ok: z.ZodOptional<z.ZodBoolean>;
    response_metadata: z.ZodOptional<z.ZodObject<{
        next_cursor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        next_cursor?: string | undefined;
    }, {
        next_cursor?: string | undefined;
    }>>;
}, {
    channels: z.ZodOptional<z.ZodArray<z.ZodObject<{
        conversation_host_id: z.ZodOptional<z.ZodString>;
        created: z.ZodOptional<z.ZodNumber>;
        id: z.ZodOptional<z.ZodString>;
        is_archived: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodOptional<z.ZodString>;
        name_normalized: z.ZodOptional<z.ZodString>;
        num_members: z.ZodOptional<z.ZodNumber>;
        purpose: z.ZodOptional<z.ZodObject<{
            creator: z.ZodOptional<z.ZodString>;
            last_set: z.ZodOptional<z.ZodNumber>;
            value: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        }, {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        }>>;
        shared_team_ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        topic: z.ZodOptional<z.ZodObject<{
            creator: z.ZodOptional<z.ZodString>;
            last_set: z.ZodOptional<z.ZodNumber>;
            value: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        }, {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        }>>;
        updated: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        conversation_host_id?: string | undefined;
        created?: number | undefined;
        id?: string | undefined;
        is_archived?: boolean | undefined;
        name?: string | undefined;
        name_normalized?: string | undefined;
        num_members?: number | undefined;
        purpose?: {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        } | undefined;
        shared_team_ids?: string[] | undefined;
        topic?: {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        } | undefined;
        updated?: number | undefined;
    }, {
        conversation_host_id?: string | undefined;
        created?: number | undefined;
        id?: string | undefined;
        is_archived?: boolean | undefined;
        name?: string | undefined;
        name_normalized?: string | undefined;
        num_members?: number | undefined;
        purpose?: {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        } | undefined;
        shared_team_ids?: string[] | undefined;
        topic?: {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        } | undefined;
        updated?: number | undefined;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    channels?: {
        conversation_host_id?: string | undefined;
        created?: number | undefined;
        id?: string | undefined;
        is_archived?: boolean | undefined;
        name?: string | undefined;
        name_normalized?: string | undefined;
        num_members?: number | undefined;
        purpose?: {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        } | undefined;
        shared_team_ids?: string[] | undefined;
        topic?: {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        } | undefined;
        updated?: number | undefined;
    }[] | undefined;
}, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    channels?: {
        conversation_host_id?: string | undefined;
        created?: number | undefined;
        id?: string | undefined;
        is_archived?: boolean | undefined;
        name?: string | undefined;
        name_normalized?: string | undefined;
        num_members?: number | undefined;
        purpose?: {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        } | undefined;
        shared_team_ids?: string[] | undefined;
        topic?: {
            creator?: string | undefined;
            last_set?: number | undefined;
            value?: string | undefined;
        } | undefined;
        updated?: number | undefined;
    }[] | undefined;
}>;
export declare const SearchMessagesResponseSchema: z.ZodObject<z.objectUtil.extendShape<{
    error: z.ZodOptional<z.ZodString>;
    ok: z.ZodOptional<z.ZodBoolean>;
    response_metadata: z.ZodOptional<z.ZodObject<{
        next_cursor: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        next_cursor?: string | undefined;
    }, {
        next_cursor?: string | undefined;
    }>>;
}, {
    messages: z.ZodOptional<z.ZodObject<{
        matches: z.ZodOptional<z.ZodArray<z.ZodObject<{
            channel: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                name?: string | undefined;
            }, {
                id?: string | undefined;
                name?: string | undefined;
            }>>;
            permalink: z.ZodOptional<z.ZodString>;
            text: z.ZodOptional<z.ZodString>;
            ts: z.ZodOptional<z.ZodString>;
            type: z.ZodOptional<z.ZodString>;
            user: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type?: string | undefined;
            text?: string | undefined;
            ts?: string | undefined;
            user?: string | undefined;
            channel?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            permalink?: string | undefined;
        }, {
            type?: string | undefined;
            text?: string | undefined;
            ts?: string | undefined;
            user?: string | undefined;
            channel?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            permalink?: string | undefined;
        }>, "many">>;
        pagination: z.ZodOptional<z.ZodObject<{
            first: z.ZodOptional<z.ZodNumber>;
            last: z.ZodOptional<z.ZodNumber>;
            page: z.ZodOptional<z.ZodNumber>;
            page_count: z.ZodOptional<z.ZodNumber>;
            per_page: z.ZodOptional<z.ZodNumber>;
            total_count: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            page?: number | undefined;
            first?: number | undefined;
            last?: number | undefined;
            page_count?: number | undefined;
            per_page?: number | undefined;
            total_count?: number | undefined;
        }, {
            page?: number | undefined;
            first?: number | undefined;
            last?: number | undefined;
            page_count?: number | undefined;
            per_page?: number | undefined;
            total_count?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        matches?: {
            type?: string | undefined;
            text?: string | undefined;
            ts?: string | undefined;
            user?: string | undefined;
            channel?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            permalink?: string | undefined;
        }[] | undefined;
        pagination?: {
            page?: number | undefined;
            first?: number | undefined;
            last?: number | undefined;
            page_count?: number | undefined;
            per_page?: number | undefined;
            total_count?: number | undefined;
        } | undefined;
    }, {
        matches?: {
            type?: string | undefined;
            text?: string | undefined;
            ts?: string | undefined;
            user?: string | undefined;
            channel?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            permalink?: string | undefined;
        }[] | undefined;
        pagination?: {
            page?: number | undefined;
            first?: number | undefined;
            last?: number | undefined;
            page_count?: number | undefined;
            per_page?: number | undefined;
            total_count?: number | undefined;
        } | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    messages?: {
        matches?: {
            type?: string | undefined;
            text?: string | undefined;
            ts?: string | undefined;
            user?: string | undefined;
            channel?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            permalink?: string | undefined;
        }[] | undefined;
        pagination?: {
            page?: number | undefined;
            first?: number | undefined;
            last?: number | undefined;
            page_count?: number | undefined;
            per_page?: number | undefined;
            total_count?: number | undefined;
        } | undefined;
    } | undefined;
}, {
    error?: string | undefined;
    ok?: boolean | undefined;
    response_metadata?: {
        next_cursor?: string | undefined;
    } | undefined;
    messages?: {
        matches?: {
            type?: string | undefined;
            text?: string | undefined;
            ts?: string | undefined;
            user?: string | undefined;
            channel?: {
                id?: string | undefined;
                name?: string | undefined;
            } | undefined;
            permalink?: string | undefined;
        }[] | undefined;
        pagination?: {
            page?: number | undefined;
            first?: number | undefined;
            last?: number | undefined;
            page_count?: number | undefined;
            per_page?: number | undefined;
            total_count?: number | undefined;
        } | undefined;
    } | undefined;
}>;
