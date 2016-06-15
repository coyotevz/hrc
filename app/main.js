import Vue from 'vue'
import { StateManager } from 'voie'
import Resource from 'vue-resource'

// Install resource
Vue.use(Resource)
Vue.http.options.root = 'http://localhost:5000/api/v1'

Vue.config.debug = true

let manager = new StateManager({
  el: 'application'
})

manager.add('root', {
  component: require('components/application')
})

manager.start()
