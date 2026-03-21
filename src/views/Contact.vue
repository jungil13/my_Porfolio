<template>
  <div class="pt-20 pb-16">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
      <header class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact
        </h1>
        <p class="text-slate-400 text-lg">
          Get in touch for work, commissions, or collaborations.
        </p>
      </header>

      <div class="rounded-2xl bg-slate-800/60 border border-slate-700/50 p-8 md:p-10">
        <div class="space-y-6">
          <div class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/50">
            <EnvelopeIcon class="w-8 h-8 text-primary-500 shrink-0" />
            <div>
              <p class="text-sm text-slate-500">Email</p>
              <a href="mailto:jungilcasquejo5@gmail.com" class="text-primary-400 hover:text-primary-300 font-medium">
                jungilcasquejo5@gmail.com
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/50">
            <span class="w-8 h-8 shrink-0 flex items-center justify-center">
              <svg class="w-8 h-8 text-primary-500" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
              </svg>
            </span>
            <div>
              <p class="text-sm text-slate-500">GitHub</p>
              <a href="https://github.com/jungil13" target="_blank" rel="noopener noreferrer" class="text-primary-400 hover:text-primary-300 font-medium">
                github.com/yourusername
              </a>
            </div>
          </div>
          <div class="flex items-center gap-4 p-4 rounded-xl bg-slate-800/80 border border-slate-700/50">
            <MapPinIcon class="w-8 h-8 text-primary-500 shrink-0" />
            <div>
              <p class="text-sm text-slate-500">Location</p>
              <p class="text-slate-300 font-medium">Lapu-Lapu City, Cebu, Philippines</p>
            </div>
          </div>
          <div class="flex flex-wrap gap-3 pt-4 border-t border-slate-700/50">
            <router-link
              to="/resume"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 font-medium transition-colors"
            >
              View Resume
              <ArrowTopRightOnSquareIcon class="w-5 h-5" />
            </router-link>
            <a
              :href="resumeUrl"
              download
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-700/80 hover:bg-slate-700 text-slate-300 font-medium transition-colors border border-slate-600"
            >
              Download Resume
              <ArrowDownTrayIcon class="w-5 h-5" />
            </a>
          </div>
        </div>

        <p class="mt-8 text-center text-slate-500 text-sm">
          Open to IT staff roles, BPO, programming commissions, and student project help.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon, MapPinIcon, ArrowTopRightOnSquareIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
import { resumeUrl } from '../data/resume'
</script>
