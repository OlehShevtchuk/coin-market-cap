import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'
import App from './components/App.vue'

import router from './router/router'
import store from './store/store'
import './filters/usdFilter'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCFPJ8oqZGw9Cn042ZPPYcn07f9trTKduc',
      authDomain: 'vue-coin-cap.firebaseapp.com',
      databaseURL: 'https://vue-coin-cap.firebaseio.com',
      projectId: 'vue-coin-cap',
      storageBucket: 'vue-coin-cap.appspot.com',
      messagingSenderId: '689549315080'
    })
  }
}).$mount('#app')
