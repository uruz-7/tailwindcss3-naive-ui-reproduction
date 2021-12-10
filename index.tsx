import './index.css'
import { createApp, defineComponent } from 'vue'
import { NButton } from 'naive-ui'
const App = defineComponent({
  setup() {
    return () => <NButton type="primary">Button</NButton>
  },
})

createApp(App).mount('#app')
