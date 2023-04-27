import { createApp } from 'vue'
import './assets/scss/App.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import * as bootstrap from 'bootstrap'

library.add(faMagnifyingGlass, faClock)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

