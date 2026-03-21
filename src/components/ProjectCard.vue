<template>
  <article
    class="group relative rounded-2xl bg-slate-800/60 border border-slate-700/50 overflow-hidden hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 flex flex-col"
  >
    <!-- Project image -->
    <div class="relative h-40 sm:h-44 bg-slate-700/50 overflow-hidden">
      <img
        v-if="project.image && !imageError"
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        @error="imageError = true"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-800"
      >
        <div class="p-4 rounded-2xl bg-primary-500/20 text-primary-400">
          <component :is="iconComponent" class="w-12 h-12" />
        </div>
      </div>
    </div>

    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-start justify-between gap-3 mb-3">
        <h3 class="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
          {{ project.title }}
        </h3>
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-1.5 text-sm text-slate-400 hover:text-primary-400 transition-colors shrink-0"
          title="Open with GitHub"
        >
          <span class="hidden sm:inline">Open with</span>
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
      <p class="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-700/80 text-slate-300"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  CameraIcon,
  BoltIcon,
  ArchiveBoxIcon,
  MapIcon,
  DocumentTextIcon,
  ShoppingBagIcon,
  GlobeAltIcon
} from '@heroicons/vue/24/outline'
import { HeartIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  project: { type: Object, required: true }
})

const imageError = ref(false)

const iconMap = {
  paw: HeartIcon,
  map: MapIcon,
  camera: CameraIcon,
  bolt: BoltIcon,
  archive: ArchiveBoxIcon,
  sailboat: GlobeAltIcon,
  shopping: ShoppingBagIcon,
  document: DocumentTextIcon
}

const iconComponent = computed(() => iconMap[props.project.icon] || DocumentTextIcon)
</script>
