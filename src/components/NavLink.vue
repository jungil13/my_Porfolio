<template>
  <router-link
    :to="to"
    class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all duration-200 font-medium"
    active-class="!text-primary-400 !bg-slate-800/80"
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
