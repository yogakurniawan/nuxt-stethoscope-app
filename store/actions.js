import firebase from 'firebase'
import Cookie from 'js-cookie'
import * as Local from '~/utils/localStorage'
import * as mutationTypes from './mutation-types'

export default {
  SIGN_UP({ commit }, { email, password }) {
    return new Promise(async (resolve, reject) => {
      try {
        commit(mutationTypes.SIGNUP.PENDING)
        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
        const currentUser = firebase.auth().currentUser
        await currentUser.sendEmailVerification()
        commit(mutationTypes.SIGNUP.SUCCESS, user)
        Local.setItem('user', user)
        Cookie.set('user', user)
        resolve()
      } catch (error) {
        commit(mutationTypes.SIGNUP.FAILURE, error)
        reject()
      }
    })
  },
  SIGN_IN({ commit }, { email, password }) {
    return new Promise(async (resolve, reject) => {
      try {
        commit(mutationTypes.SIGNIN.PENDING)
        const data = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
        commit(mutationTypes.SIGNIN.SUCCESS, data.user)
        Local.setItem('user', data.user)
        Cookie.set('user', data.user)
        resolve()
      } catch (error) {
        console.log(error)
        commit(mutationTypes.SIGNIN.FAILURE, error)
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
  async SIGN_OUT({ commit, ...rest }) {
    console.log(this)
    await firebase.auth().signOut()
    commit('SET_USER', null)
    Cookie.remove('user')
    if (process.client) {
      Local.removeItem('user')
    }
  }
}