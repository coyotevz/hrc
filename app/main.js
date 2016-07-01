import Vue from 'vue'
import { StateManager } from 'voie'
import Resource from 'vue-resource'
import VueTransferDom from 'vue-transfer-dom'

require('scss/main.scss')

// Install resource
Vue.use(Resource)
Vue.http.options.root = 'http://localhost:5000/api/v1'

// Install vue-transfer-dom, required by ui-dialog
Vue.use(VueTransferDom)

Vue.config.debug = true

let manager = new StateManager({
  el: 'application'
})

manager.add('root', {
  component: require('components/welcome')
})

manager.add('demo', {
  path: '/demo',
  redirect: {
    name: 'demo.component',
    params: { componentId: 'ui-toolbar' } // sync with menu 0 on demo.component
  }
})

manager.add('demo.component', {
  path: '/demo/:componentId',
  component: require('ui/demo/ui-demo'),
  enter: (ctx) => {
    ctx.data.componentId = ctx.params.componentId
    return Promise.resolve()
  }
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
