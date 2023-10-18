import type { User } from "./user";

type UsersResponse = {
    success: boolean;
    users: User[];
};

export type {
    UsersResponse
};