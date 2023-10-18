<script setup lang="ts">
import { defineProps, type PropType, toRaw } from 'vue';
import { useCartStore } from '../stores/cart';
import { type Item } from '../models/Item';
import { storeToRefs } from 'pinia';

const props = defineProps({
    item: {
        type: Object as PropType<Item>,
        required: true
    }
});

const store = useCartStore();

const { currentItemCount } = storeToRefs(store);
const { addItem } = store;

const itemSelected = (item: Item) => {
    console.log(toRaw(item))
    addItem(item);
};
</script>

<template>
    <div class="card cursor-pointer" @click="() => itemSelected(props.item)">
        <div class="card-body">
            <h5 class="card-title">{{ props.item.name }}</h5>
            <p class="card-text">{{ currentItemCount(props.item.id) }}</p>
        </div>
    </div>
</template>

<style scoped>
    .cursor-pointer {
        cursor: pointer;
    }
</style>