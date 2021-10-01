import { h, reactive, defineComponent, createApp } from 'vue'

const App = defineComponent(() => {
  const state = reactive({
    count: 0
  })

  function inc() {
    state.count++
  }

  return () => <button onClick={inc}>
    From the Vue: 
    {state.count}
  </button>
})

createApp(App).mount('#app')