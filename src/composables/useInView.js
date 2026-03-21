import { ref, onMounted, onUnmounted } from 'vue'

export function useInView(options = {}) {
  const el = ref(null)
  const isInView = ref(false)
  const { rootMargin = '0px 0px -50px 0px', threshold = 0 } = options

  onMounted(() => {
    if (!el.value) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.value = entry.isIntersecting
      },
      { rootMargin, threshold }
    )
    observer.observe(el.value)
    return () => observer.disconnect()
  })

  return { el, isInView }
}
