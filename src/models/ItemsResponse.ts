import type { Item } from "./Item";

type ItemsResponse = {
    success: boolean;
    items: Item[];
}

export type {
    ItemsResponse
};