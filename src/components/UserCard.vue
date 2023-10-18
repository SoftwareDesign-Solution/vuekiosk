<script setup lang="ts">
import { defineEmits, defineProps, type PropType } from 'vue';
import { type User } from '../models/User';

const props = defineProps({
    user: {
        type: Object as PropType<User>,
        required: true
    }
});

/*
const emit = defineEmits<{
    (e: 'userSelected', user: User): void
}>();
*/

const emit = defineEmits<{
    userSelected: [user: User]
}>();

</script>

<template>
    <div class="card cursor-pointer" @click="$emit('userSelected', props.user)">
        <div class="card-body">
            <h5 class="card-title">{{ props.user.name }}</h5>
            <p class="card-text">{{ props.user.email }}</p>
        </div>
    </div>
</template>

<style scoped>
    .cursor-pointer {
        cursor: pointer;
    }
</style>