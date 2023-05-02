import { createApp } from 'vue'
import './assets/scss/App.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { faMagnifyingGlass, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'

import * as bootstrap from 'bootstrap'

library.add(faMagnifyingGlass, faFacebookF, faTwitter, faGithub, faInstagram, faAngleUp)

createApp(App).component('font-awesome-icon', FontAwesomeIcon, bootstrap).mount('#app')

