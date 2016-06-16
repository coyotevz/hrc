import Vue from 'vue'
import { StateManager } from 'voie'
import Resource from 'vue-resource'
import VueMdl from 'vue-mdl'

require('material-design-lite/material.css')
require('material-design-lite/material.js')

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
  component: require('components/application')
})

manager.start()
