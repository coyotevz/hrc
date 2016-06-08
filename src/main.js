import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Application from './application'

// Install router
Vue.use(Router)

// Install resource
Vue.use(Resource)

Vue.config.debug = true

var router = new Router()

router.start(Application, 'application')
