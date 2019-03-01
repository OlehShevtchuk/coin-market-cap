import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDedail: {}
  },
  mutations: {
    setUserDetail (state, payload) {
      state.userDedail = payload
    }
  },
  actions: {
    setUserDetail ({ commit }, payload) {
      const userDedail = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        phoneNumber: payload.phoneNumber,
        country: payload.country,
        city: payload.city,
        address: payload.address,
        postCode: payload.postCode
      }
      let imageUrl
      let key
      firebase.database().ref('userDetails').push(userDedail)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.') + 1)
          return firebase.storage().ref('userDetail/' + key + '.' + ext).put(payload.image)
        })
        .then((fileData) => {
          return firebase.storage().ref(fileData.metadata.fullPath).getDownloadURL()
        })
        .then((url) => {
          imageUrl = url
          return firebase.database().ref('userDetails').child(key).update({ imageUrl: url })
        })
        .then(() => {
          commit('setUserDetail', {
            ...userDedail,
            imageUrl: imageUrl,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  getters: {
    userDedail (state) {
      return state.userDedail
    }
  }
})
