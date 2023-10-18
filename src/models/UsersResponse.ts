import type { User } from "./User";

type UsersResponse = {
    success: boolean;
    users: User[];
};

export type {
    UsersResponse
};