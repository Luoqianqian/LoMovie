import { useIntersectionObserver } from "@vueuse/core"

export default {
  mounted(el) {
    const imgSrc = el.src
    el.src = ''
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      el.src = imgSrc
      stop()
    })
  }
}
