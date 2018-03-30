import firebase from 'firebase'
import Cookie from 'js-cookie'
import * as Local from '~/utils/localStorage'

export default {
  SIGN_UP({ commit }, { email, password }) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('SET_LOADING', true)
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        commit('SET_LOADING', false)
        commit('SET_USER', user)
        commit('SET_ERROR', null)      
        Local.setItem('user', user)
        Cookie.set('user', user)
        resolve()
      } catch (error) {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error)
        reject()
      }
    })
  },
  SIGN_IN({ commit }, { email, password }) {
    return new Promise(async (resolve, reject) => {
      try {
        commit('SET_LOADING', true)
        const user = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
        commit('SET_LOADING', false)
        commit('SET_USER', user)
        commit('SET_ERROR', null)      
        Local.setItem('user', user)
        Cookie.set('user', user)
        resolve()
      } catch (error) {
        commit('SET_LOADING', false)
        commit('SET_ERROR', error)
        reject()
      }
    })
  },
  INIT_AUTH({ commit }, req) {
    let user = null
    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const cookie = req.headers.cookie
      const userCookie = cookie.split(";").find(c => c.trim().startsWith("user="))
      if (!userCookie) {
        return
      }
      const userJson = decodeURIComponent(userCookie.split('=')[1])
      user = JSON.parse(userJson)
    } else {
      user = Local.getItem('user')
    }
    commit('SET_USER', user)
  },
  SIGN_OUT({ commit }) {
    firebase.auth().signOut()
    commit('SET_USER', null)
    Cookie.remove('user')
    if (process.client) {
      Local.removeItem('user')
    }
  }
}