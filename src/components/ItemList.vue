<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import { useItemStore } from '@/stores/item';
import ItemCard from './ItemCard.vue';

const itemStore = useItemStore();
const { items } = storeToRefs(itemStore);
const { fetchItems } = itemStore;

onBeforeMount(() => {

    // Items laden
    fetchItems();

});

</script>

<template>
    <div class="container">
        <div class="row row-cols-5 g-2">
            <ItemCard 
                class="col m-2" 
                v-for="item in items" 
                :key="item.id"
                :item="item"
            />
        </div>
    </div>
</template>