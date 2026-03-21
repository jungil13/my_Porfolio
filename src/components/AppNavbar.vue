<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-18">
        <router-link
          to="/"
          class="flex items-center gap-2 text-lg font-semibold text-white hover:text-primary-400 transition-colors"
        >
          <CodeBracketIcon class="w-7 h-7 text-primary-400" />
          <span class="hidden sm:inline">Jun Gil</span>
        </router-link>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/projects" label="Projects" />
          <NavLink to="/contact" label="Contact" />
          <router-link
            to="/resume"
            class="px-4 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all duration-200 font-medium inline-flex items-center gap-1.5"
          >
            View Resume
            <ArrowTopRightOnSquareIcon class="w-4 h-4" />
          </router-link>
          <a
            :href="resumeUrl"
            download
            class="px-4 py-2 rounded-lg bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 font-medium transition-all duration-200 inline-flex items-center gap-1.5"
          >
            Download Resume
            <ArrowDownTrayIcon class="w-4 h-4" />
          </a>
        </div>

        <!-- Mobile menu button -->
        <button
          type="button"
          class="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
          aria-label="Toggle menu"
          @click="mobileOpen = !mobileOpen"
        >
          <Bars3Icon v-if="!mobileOpen" class="w-6 h-6" />
          <XMarkIcon v-else class="w-6 h-6" />
        </button>
      </div>

      <!-- Mobile menu -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="mobileOpen"
          class="md:hidden py-4 border-t border-slate-700/50"
        >
          <div class="flex flex-col gap-1">
            <NavLink to="/" label="Home" @click="mobileOpen = false" />
            <NavLink to="/about" label="About" @click="mobileOpen = false" />
            <NavLink to="/projects" label="Projects" @click="mobileOpen = false" />
            <NavLink to="/contact" label="Contact" @click="mobileOpen = false" />
            <router-link
              to="/resume"
              class="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800"
              @click="mobileOpen = false"
            >
              View Resume
            </router-link>
            <a
              :href="resumeUrl"
              download
              class="px-4 py-2 rounded-lg text-primary-400 hover:bg-slate-800"
              @click="mobileOpen = false"
            >
              Download Resume
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { CodeBracketIcon, Bars3Icon, XMarkIcon, ArrowTopRightOnSquareIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
import NavLink from './NavLink.vue'
import { resumeUrl } from '../data/resume'

const scrolled = ref(false)
const mobileOpen = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
