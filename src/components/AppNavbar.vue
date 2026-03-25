<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200' : 'bg-transparent'"
  >
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-18">
        <!-- Logo -->
        <div class="flex-1 flex justify-start">
          <router-link
            to="/"
            class="flex items-center gap-2 text-lg font-semibold text-slate-900 hover:text-primary-500 transition-colors"
          >
            <span class="text-2xl font-bold font-mono text-primary-500">JG</span>
            <span class="hidden sm:inline">Jun Gil</span>
          </router-link>
        </div>

        <!-- Desktop nav -->
        <div class="hidden md:flex justify-center items-center gap-1">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />
          <NavLink to="/projects" label="Projects" />
          <NavLink to="/contact" label="Contact" />
        </div>

        <!-- Right Side (Socials + Resume) -->
        <div class="flex-1 hidden md:flex justify-end items-center gap-4">
          <a href="https://www.facebook.com/jungil.casquejo30" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-[#1877F2] transition-colors" aria-label="Facebook">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/jun-gil-casquejo-6a78683b8" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-1.85 0-2.3 1.05-2.69 1.48V9h-2.66v9.5h2.66v-5.12c0-1.37.26-2.7 1.96-2.7 1.67 0 1.7 1.57 1.7 2.82v5.04h2.69M6.56 7.64c.9 0 1.45-.6 1.45-1.35 0-.77-.56-1.37-1.47-1.37-.9 0-1.47.6-1.47 1.37 0 .75.55 1.35 1.44 1.35m-1.33 10.86h2.66V9H5.23v9.5"/></svg>
          </a>
          <a
            :href="resumePdf"
            download="Casquejo_Jun_Gil_Resume.pdf"
            class="px-4 py-2 rounded-lg bg-primary-100 text-primary-600 hover:bg-primary-200 font-medium transition-all duration-200 text-sm hidden xl:inline-flex items-center gap-1.5"
          >
            Download Resume
            <ArrowDownTrayIcon class="w-4 h-4" />
          </a>
        </div>

        <!-- Mobile menu button -->
        <div class="flex-1 flex justify-end md:hidden">
          <button
            type="button"
            class="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            aria-label="Toggle menu"
            @click="mobileOpen = !mobileOpen"
          >
            <Bars3Icon v-if="!mobileOpen" class="w-6 h-6" />
            <XMarkIcon v-else class="w-6 h-6" />
          </button>
        </div>
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
          class="md:hidden py-4 border-t border-slate-200 bg-white shadow-xl"
        >
          <div class="flex flex-col gap-1">
            <NavLink to="/" label="Home" @click="mobileOpen = false" />
            <NavLink to="/about" label="About" @click="mobileOpen = false" />
            <NavLink to="/projects" label="Projects" @click="mobileOpen = false" />
            <NavLink to="/contact" label="Contact" @click="mobileOpen = false" />
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
import NavLink from './NavLink.vue'
import resumePdf from '../assets/resume/Casquejo_Jun Gil Resume.pdf'

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
