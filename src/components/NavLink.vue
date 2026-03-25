<template>
  <router-link
    :to="to"
    class="px-4 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 font-medium"
    active-class="!text-primary-600 !bg-slate-100"
    @click="$emit('click')"
  >
    {{ label }}
  </router-link>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  label: { type: String, required: true }
})
defineEmits(['click'])
</script>
