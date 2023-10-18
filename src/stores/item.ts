import { defineStore } from "pinia";
import { inject, ref } from "vue";
import type { Item } from "../models/Item";
import type { ItemsResponse } from "../models/ItemsResponse";
import axios from "axios";

const useItemStore = defineStore('item', () => {
    
    const apiUrl = inject<string>('apiUrl');

    // State
    const items = ref<Item[]>([]);

    // Actions
    async function fetchItems() {
        const response = await axios.get<ItemsResponse>(apiUrl + '/Items');
        items.value = response.data.items;
    }

    return {
        items,
        fetchItems
    };

});

export {
    useItemStore
};