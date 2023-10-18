import { reactive, computed } from "vue";
import { defineStore } from "pinia";

const useCartStore = defineStore('cart', () => {
    
    // State
    const items = reactive<Item[]>([]);

    // Computed
    const itemsCounter = computed(() => items.length);
    const currentItemCount = computed(() => (id: number) => items.filter(item => item.id === id).length);

    // Actions
    function addItem(item: Item) {
        items.push(item);
    };

    function clearItems() {
        items.splice(0, items.length);
    };

    return {
        items,
        itemsCounter,
        currentItemCount,
        addItem,
        clearItems
    };

});

export {
    useCartStore
};