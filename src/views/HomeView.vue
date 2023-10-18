<script setup lang="ts">
import { ref, toRaw } from 'vue'
import ItemList from '@/components/ItemList.vue';
import UserList from '@/components/UserList.vue';
import { type User } from '@/models/User';
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';

const cartStore = useCartStore();

const { itemsCounter } = storeToRefs(cartStore);

const { clearItems } = cartStore;

const selectedUser = ref<User | null>(null);

const userSelected = (user: User) => {
  console.log('userSelected', toRaw(user));
  selectedUser.value = toRaw(user);
}

const cancelAction = () => {
  selectedUser.value = null;
  clearItems();
}
</script>

<template>
  <div>
    <h1>Select your p(l)ayer: <span @click="cancelAction">{{ selectedUser?.name }}</span></h1>
    <UserList v-if="selectedUser === null" @user-selected="userSelected" />
    <ItemList v-if="selectedUser !== null" />
    <div class="container">
      <button 
        v-if="selectedUser !== null"
        class="btn btn-primary btn-lg btn-block"
      >{{ itemsCounter }} Artikel kaufen</button>
    </div>
  </div>
</template>
