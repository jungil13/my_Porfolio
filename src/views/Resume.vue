<template>
  <div class="pt-20 pb-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <header class="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
            My Resume
          </h1>
          <p class="text-slate-400">
            View the latest version of my resume directly in the browser.
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <a
            :href="resumeUrl"
            download
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-medium transition-colors"
          >
            <ArrowDownTrayIcon class="w-5 h-5" />
            Download PDF
          </a>
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 font-medium transition-colors"
          >
            <ArrowLeftIcon class="w-5 h-5" />
            Back to Contact
          </router-link>
        </div>
      </header>

      <div class="rounded-2xl bg-slate-900/80 border border-slate-700/60 overflow-hidden shadow-xl shadow-slate-900/40">
        <div class="bg-slate-800/80 px-4 py-2 flex items-center justify-between text-xs text-slate-400">
          <span>{{ resumeUrl }}</span>
          <span class="hidden sm:inline">If the preview does not load, use the download button above.</span>
        </div>
        <div class="h-[70vh] md:h-[80vh] bg-slate-900">
          <iframe
            :src="resumeUrl"
            title="Resume PDF"
            class="w-full h-full border-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowDownTrayIcon, ArrowLeftIcon } from '@heroicons/vue/24/outline'
import { resumeUrl } from '../data/resume'
</script>

