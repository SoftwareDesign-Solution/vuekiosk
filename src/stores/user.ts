import { defineStore } from "pinia";
import { inject, ref } from "vue";
import type { User } from "../models/User";
import type { UsersResponse } from "../models/UsersResponse";
import axios from "axios";

const useUserStore = defineStore('user', () => {
    
    const apiUrl = inject<string>('apiUrl');

    // State
    const users = ref<User[]>([]);

    // Actions
    async function fetchUsers() {
        const response = await axios.get<UsersResponse>(apiUrl + '/Users');
        users.value = response.data.users;
    }

    return {
        users,
        fetchUsers
    };

});

export {
    useUserStore
};