<template>
  <div>
    <!-- Hero -->
    <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div class="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-primary-100/50" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(14,165,233,0.15),transparent)]" />
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float" />
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float" style="animation-delay: 1s" />

      <div class="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <ProfilePhoto class="mb-8" size="200px" />
        <div
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 text-slate-600 text-sm mb-6 shadow-sm animate-fade-in"
          style="animation-delay: 0.1s"
        >
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for work
        </div>
        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 animate-slide-up"
          style="animation-delay: 0.2s; animation-fill-mode: both"
        >
          Hi, I'm
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Jun Gil</span>
        </h1>
        <p
          class="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 animate-slide-up"
          style="animation-delay: 0.35s; animation-fill-mode: both"
        >
          BSIT Graduate & Entry-level Web Developer from Cordova, Cebu. I build web apps with Vue, React, and Nextjs.
        </p>
        <div
          class="flex flex-wrap items-center justify-center gap-4 animate-slide-up"
          style="animation-delay: 0.5s; animation-fill-mode: both"
        >
          <a
            :href="resumePdf"
            download="Casquejo_Jun_Gil_Resume.pdf"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 font-semibold transition-all duration-200"
          >
            Download Resume
            <ArrowDownTrayIcon class="w-5 h-5" />
          </a>
          <router-link
            to="/projects"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 shadow-sm font-semibold transition-all duration-200"
          >
            View Projects
            <ArrowRightIcon class="w-5 h-5" />
          </router-link>
          <router-link
            to="/contact"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-900 shadow-sm font-semibold transition-all duration-200"
          >
            Get in Touch
          </router-link>
        </div>
      </div>
    </section>

    <!-- Achievements -->
    <section ref="achievementsRef" id="achievements" class="py-20 md:py-28 relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Achievements & Experience
        </h2>
        <p class="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Education, work experience, and what I bring to the table.
        </p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(item, i) in achievements"
            :key="item.title"
            class="achievement-card p-6 rounded-2xl bg-white border border-slate-200 hover:border-primary-500/30 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 translate-y-6"
            :class="{ 'animate-in': achievementsInView }"
            :style="{ transitionDelay: `${0.08 * i}s` }"
          >
            <div class="p-3 rounded-xl bg-primary-100 text-primary-600 w-fit mb-4">
              <component :is="item.icon" class="w-6 h-6" />
            </div>
            <h3 class="text-lg font-semibold text-slate-900 mb-2">{{ item.title }}</h3>
            <p class="text-slate-600 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section id="featured-projects" class="py-20 md:py-28 bg-slate-100/50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
          Featured Projects
        </h2>
        <p class="text-slate-600 text-center max-w-2xl mx-auto mb-12">
          Click on a project to see details. Open with GitHub available on each card.
        </p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            v-for="(project, i) in featuredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
        <div class="text-center mt-10">
          <router-link
            to="/projects"
            class="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
          >
            View all projects
            <ArrowRightIcon class="w-5 h-5" />
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 md:py-28">
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Let's work together
        </h2>
        <p class="text-slate-600 mb-8">
          Open to IT staff, BPO, or tech roles. I also take on programming commissions and student projects.
        </p>
        <router-link
          to="/contact"
          class="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 text-white font-semibold transition-all duration-200"
        >
          Contact Me
          <ArrowRightIcon class="w-5 h-5" />
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { ArrowRightIcon, AcademicCapIcon, BriefcaseIcon, PaintBrushIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline'
import ProjectCard from '../components/ProjectCard.vue'
import ProfilePhoto from '../components/ProfilePhoto.vue'
import { projects } from '../data/projects'
import resumePdf from '../assets/resume/Casquejo_Jun Gil Resume.pdf'

const achievementsRef = ref(null)
const achievementsInView = ref(false)

let observer
onMounted(() => {
  if (!achievementsRef.value) return
  observer = new IntersectionObserver(
    ([entry]) => { achievementsInView.value = entry.isIntersecting },
    { rootMargin: '0px 0px -80px 0px', threshold: 0 }
  )
  observer.observe(achievementsRef.value)
})
onUnmounted(() => observer?.disconnect())

const featuredProjects = computed(() => projects.slice(0, 6))

const achievements = [
  {
    title: 'BSIT Graduate',
    description: 'Bachelor of Science in Information Technology. Strong foundation in web development and systems.',
    icon: AcademicCapIcon
  },
  {
    title: 'IT Support Intern @ DepEd Lapu-Lapu',
    description: 'Worked at Department of Education in Lapu-Lapu City — IT support and system maintenance.',
    icon: BriefcaseIcon
  },
  {
    title: 'Design Associate at Ripeconcepts Inc.',
    description: 'Design Associate at Ripeconcepts Inc. — Creating/Editing design requests for clients cards using adobe illustrator and photoshop from Minted .',
    icon: PaintBrushIcon  
  }
]
</script>
