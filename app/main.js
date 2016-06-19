import Vue from 'vue'
import { StateManager } from 'voie'
import Resource from 'vue-resource'
import VueMdl from 'vue-mdl'

// require('material-design-lite/material.css')
require('material-design-lite/dist/material.blue-red.min.css')
require('material-design-lite/material.js')

require('scss/main.scss')

// Install resource
Vue.use(Resource)
Vue.http.options.root = 'http://localhost:5000/api/v1'

// Install vue mdl
Vue.use(VueMdl)

Vue.config.debug = true

let manager = new StateManager({
  el: 'application'
})

manager.add('root', {
  component: require('components/welcome')
})

manager.add('app', {
  component: require('components/application')
})

manager.add('employees', {
  parent: 'app',
  path: '/employees',
  enter (ctx) {
    return Vue.http.get('employees')
      .then(response => { ctx.data.employees = response.data.objects })
  },
  component: require('components/employees')
})

manager.add('about', {
  path: '/about',
  component: require('components/about.vue')
})

manager.start()
