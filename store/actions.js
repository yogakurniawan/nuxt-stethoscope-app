import firebase from 'firebase'
import Cookie from 'js-cookie'
import * as Local from '~/utils/localStorage'
import * as mutationTypes from './mutation-types'

export default {
  async SIGN_IN({ commit, dispatch }, { email, password }) {
    try {
      commit(mutationTypes.SIGNIN.PENDING)
      const data = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      commit(mutationTypes.SIGNIN.SUCCESS, data.user)
      dispatch('LOAD_TOKEN')
      Local.setItem('user', data.user)
      Cookie.set('user', data.user)
      return Promise.resolve()
    } catch (error) {
      commit(mutationTypes.SIGNIN.FAILURE, error)
      return Promise.reject()
    }
  },
  async SIGN_UP({ commit, dispatch }, { email, password }) {
    try {
      commit(mutationTypes.SIGNUP.PENDING)
      const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
      const currentUser = firebase.auth().currentUser
      await currentUser.sendEmailVerification()
      commit(mutationTypes.SIGNUP.SUCCESS, user)
      dispatch('LOAD_TOKEN')
      Local.setItem('user', data)
      Cookie.set('user', data)
      return Promise.resolve()
    } catch (error) {
      commit(mutationTypes.SIGNUP.FAILURE, error)
      return Promise.reject()
    }
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
  async SIGN_OUT({ commit, ...rest }) {
    await firebase.auth().signOut()
    commit('SET_USER', null)
    Cookie.remove('user')
    if (process.client) {
      Local.removeItem('user')
    }
  },
  async LOAD_TOKEN({ commit }) {
    try {
      const token = await firebase.auth().currentUser.getIdToken(false)
      commit('SET_TOKEN', token)
    } catch (error) {
      commit('SET_TOKEN', null)
    }
  },
  async REFRESH_TOKEN({ commit }) {
    try {
      const token = await firebase.auth().currentUser.getIdToken(true)
      commit('SET_TOKEN', token)
      return Promise.resolve(token)
    } catch (error) {
      commit('SET_TOKEN', null)
      return Promise.reject()
    }
  }
}