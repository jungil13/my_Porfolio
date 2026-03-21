<template>
  <div class="profile-photo-wrap relative inline-flex animate-slide-up" style="animation-delay: 0.15s; animation-fill-mode: both">
    <div class="relative rounded-full overflow-hidden ring-4 ring-slate-700/80 ring-offset-4 ring-offset-slate-900 shadow-2xl bg-slate-700/50">
      <img
        v-if="!imgError"
        :src="displaySrc"
        :alt="alt"
        class="w-full h-full object-cover aspect-square"
        @error="onError"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center text-4xl font-bold text-primary-400/80 bg-slate-800"
      >
        JGC
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import junnyImg from '@/assets/images/junny.jpg'

const props = defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: 'Jun Gil' },
  size: { type: String, default: '180px' }
})

const imgError = ref(false)
const displaySrc = computed(() => props.src || junnyImg)

function onError() {
  imgError.value = true
}
</script>

<style scoped>
.profile-photo-wrap {
  width: v-bind(size);
  height: v-bind(size);
}
</style>
