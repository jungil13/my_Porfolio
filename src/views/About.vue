<template>
  <div class="pt-20 pb-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <header class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          About Me
        </h1>
        <p class="text-slate-600 text-lg max-w-2xl mx-auto">
          BSIT graduate and entry-level web developer from Cordova, Cebu, Philippines.
        </p>
      </header>

      <!-- Bio card -->
      <section class="rounded-2xl bg-white border border-slate-200 shadow-sm p-8 md:p-10 mb-12">
        <div class="flex flex-col md:flex-row gap-8 items-start">
          <div class="shrink-0 mx-auto md:mx-0">
            <ProfilePhoto size="160px" />
          </div>
          <div class="flex-1">
            <h2 class="text-2xl font-semibold text-slate-900 mb-4">Casquejo Jun Gil M.</h2>
            <ul class="space-y-2 text-slate-600">
              <li class="flex items-center gap-3">
                <CalendarIcon class="w-5 h-5 text-primary-500 shrink-0" />
                22 years old
              </li>
              <li class="flex items-center gap-3">
                <AcademicCapIcon class="w-5 h-5 text-primary-500 shrink-0" />
                BSIT (Bachelor of Science in Information Technology)
              </li>
              <li class="flex items-center gap-3">
                <MapPinIcon class="w-5 h-5 text-primary-500 shrink-0" />
                Cordova, Cebu, Philippines
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Education -->
      <section class="rounded-2xl bg-white border border-slate-200 shadow-sm p-8 md:p-10 mb-12">
        <h2 class="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
          <AcademicCapIcon class="w-6 h-6 text-primary-500" />
          Education
        </h2>
        <div class="space-y-6">
          <div class="border-l-2 border-primary-200 pl-4 py-1">
            <h3 class="text-lg font-semibold text-slate-900">Cordova Public College</h3>
            <p class="text-slate-600 font-medium">Bachelor of Science in Information Technology (BSIT)</p>
            <p class="text-slate-500 text-sm">2024 - 2025</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4 py-1">
            <h3 class="text-lg font-semibold text-slate-900">Cordova National High School</h3>
            <p class="text-slate-600 font-medium">Cordova Cebu</p>
            <p class="text-slate-500 text-sm">2017 - 2018</p>
          </div>
          <div class="border-l-2 border-primary-200 pl-4 py-1">
            <h3 class="text-lg font-semibold text-slate-900">Cordova Central School</h3>
            <p class="text-slate-600 font-medium">Elementary</p>
            <p class="text-slate-500 text-sm">2013 - 2014</p>
          </div>
        </div>
      </section>

      <!-- Skills -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
          <WrenchScrewdriverIcon class="w-6 h-6 text-primary-500" />
          Technical Skills
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="rounded-xl bg-white border border-slate-200 shadow-sm p-6">
            <h3 class="text-primary-600 font-medium mb-3">Web Development</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="s in webSkills" :key="s" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-sm">
                {{ s }}
              </span>
            </div>
          </div>

          <div class="rounded-xl bg-white border border-slate-200 shadow-sm p-6">
            <h3 class="text-primary-600 font-medium mb-3">Development Tools</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="s in devTools" :key="s" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-sm">
                {{ s }}
              </span>
            </div>
          </div>

          <div class="rounded-xl bg-white border border-slate-200 shadow-sm p-6">
            <h3 class="text-primary-600 font-medium mb-3">AI Tools for Development</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="s in aiTools" :key="s" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-sm">
                {{ s }}
              </span>
            </div>
          </div>

          <div class="rounded-xl bg-white border border-slate-200 shadow-sm p-6">
            <h3 class="text-primary-600 font-medium mb-3">IT Support & Hardware</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="s in itSupportSkills" :key="s" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-sm">
                {{ s }}
              </span>
            </div>
          </div>
          
          <div class="rounded-xl bg-white border border-slate-200 shadow-sm p-6 sm:col-span-2 lg:col-span-1">
            <h3 class="text-primary-600 font-medium mb-3">TESDA Certification</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="s in tesdaSkills" :key="s" class="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 text-sm">
                {{ s }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Career & interests -->
      <section class="rounded-2xl bg-white border border-slate-200 shadow-sm p-8 md:p-10">
        <h2 class="text-2xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
          <BriefcaseIcon class="w-6 h-6 text-primary-500" />
          Career & Interests
        </h2>
        <p class="text-slate-600 leading-relaxed mb-4">
          I'm actively looking for job opportunities as IT Support/Staff, or related tech roles. I also offer programming services and accept student project commissions. 
        </p>
        <p class="text-slate-600 leading-relaxed">
          I'm practicing my communication skills and always improving. When I'm not coding, I enjoy working on side projects and exploring new tech.
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
  'Vue.js', 'React', 'Next.js', 'Tailwind CSS', 'Laravel', 'Express.js',
  'MySQL'
]

const itSupportSkills = [
  'Computer Hardware Troubleshooting', 'Software Installation', 'System Maintenance',
  'PC Deployment', 'Printer Support', 'Technical Support'
]

const aiTools = [
  'ChatGPT', 'Claude', 'Cursor IDE', 'Google Antigravity', 'AI-Assisted Development'
]

const devTools = [
  'Git & GitHub', 'Vercel', 'Render.com', 'Railway', 'Netlify', 'Development Environment'
]

const tesdaSkills = [
  'Computer Systems Servicing NC II', 'Hardware Repair', 'Network Troubleshooting', 'System Installation'
]
</script>
