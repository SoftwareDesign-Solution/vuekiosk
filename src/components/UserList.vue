<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/user';
import { type User } from '@/models/User';
import UserCard from './UserCard.vue';

const userStore = useUserStore();
const { users } = storeToRefs(userStore);
const { fetchUsers } = userStore;

onBeforeMount(() => {

    // Benutzer laden
    fetchUsers();

});

const emit = defineEmits<{
    (e: 'userSelected', user: User): void
}>();

const userSelected = (user: User) => emit('userSelected', user);

</script>

<template>
    <div class="container">
        <div class="row row-cols-5 g-2">
            <UserCard 
                class="col m-2" 
                v-for="user in users" 
                :key="user.id" 
                :user="user"
                v-on:user-selected="userSelected" />
        </div>
    </div>
</template>

<style lang="" scoped>

</style>