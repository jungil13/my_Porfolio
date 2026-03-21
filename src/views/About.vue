<template>
  <div class="pt-20 pb-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <header class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
          About Me
        </h1>
        <p class="text-slate-400 text-lg max-w-2xl mx-auto">
          IT graduate and web developer from Lapu-Lapu City, Cebu, Philippines.
        </p>
      </header>

      <!-- Bio card -->
      <section class="rounded-2xl bg-slate-800/60 border border-slate-700/50 p-8 md:p-10 mb-12">
        <div class="flex flex-col md:flex-row gap-8 items-start">
          <div class="shrink-0 mx-auto md:mx-0">
            <ProfilePhoto size="160px" />
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-semibold text-white mb-4">Casquejo Jun Gil M.</h2>
            <ul class="space-y-2 text-slate-400">
              <li class="flex items-center gap-3">
                <CalendarIcon class="w-5 h-5 text-primary-500 shrink-0" />
                21 years old
              </li>
              <li class="flex items-center gap-3">
                <AcademicCapIcon class="w-5 h-5 text-primary-500 shrink-0" />
                BSIT (Bachelor of Science in Information Technology)
              </li>
              <li class="flex items-center gap-3">
                <MapPinIcon class="w-5 h-5 text-primary-500 shrink-0" />
                Lapu-Lapu City, Cebu, Philippines
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
          <WrenchScrewdriverIcon class="w-6 h-6 text-primary-500" />
          Technical Skills
        </h2>
        <div class="grid sm:grid-cols-2 gap-6">
          <div class="rounded-xl bg-slate-800/60 border border-slate-700/50 p-6">
            <h3 class="text-primary-400 font-medium mb-3">Web Development</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="s in webSkills" :key="s" class="px-3 py-1.5 rounded-lg bg-slate-700/80 text-slate-300 text-sm">
                {{ s }}
              </span>
            </div>
          </div>
          <div class="rounded-xl bg-slate-800/60 border border-slate-700/50 p-6">
            <h3 class="text-primary-400 font-medium mb-3">Other IT Skills</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="s in otherSkills" :key="s" class="px-3 py-1.5 rounded-lg bg-slate-700/80 text-slate-300 text-sm">
                {{ s }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Career & interests -->
      <section class="rounded-2xl bg-slate-800/60 border border-slate-700/50 p-8 md:p-10">
        <h2 class="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
          <BriefcaseIcon class="w-6 h-6 text-primary-500" />
          Career & Interests
        </h2>
        <p class="text-slate-400 leading-relaxed mb-4">
          I'm actively looking for job opportunities as IT staff, in BPO, or related tech roles. I also offer programming services and accept student project commissions. I'm interested in building websites that generate passive income, selling projects, and sharing code on platforms like GitHub.
        </p>
        <p class="text-slate-400 leading-relaxed">
          I'm practicing my English and always improving. When I'm not coding, I enjoy working on side projects and exploring new tech.
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import {
  CalendarIcon,
  AcademicCapIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
  BriefcaseIcon
} from '@heroicons/vue/24/outline'
import ProfilePhoto from '../components/ProfilePhoto.vue'

const webSkills = [
  'Vue.js', 'React', 'Tailwind CSS', 'Laravel', 'Express.js',
  'MySQL', 'Axios', 'CRUD systems', 'API integration'
]

const otherSkills = [
  'Computer System Servicing',
  'Basic IT support / IT staff',
  'Backend development'
]
</script>
