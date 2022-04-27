import type { App, Plugin } from 'vue'

import Example from './src/index.vue'
export { Example }

const install = (app: App) => {
  app.component(Example.name, Example)
}

export default install as Plugin
