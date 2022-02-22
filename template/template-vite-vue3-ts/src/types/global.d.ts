/* 三方库类型补充 */
declare module 'vue3-lottie' {
  import {App} from 'vue';

  interface LottieProps {
    animationData?: any
    animationLink?: string
    loop?: boolean | number
    autoPlay?: boolean
    rendererSettings?: any
    width?: number | string
    height?: number | string
    speed?: number
    delay?: number
    direction?: string
    pauseOnHover?: boolean
    playOnHover?: boolean
    backgroundColor?: string
    pauseAnimation?: boolean
  }

  declare function install(app: App): void
  export default install
}