import firebase from 'firebase'
import Cookie from 'js-cookie'
import * as Local from '~/utils/localStorage'
import * as mutationTypes from './mutation-types'

export default {
  async SIGN_IN({ commit, dispatch }, { email, password }) {
    try {
      commit(mutationTypes.AUTH.PENDING)
      const data = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      commit(mutationTypes.AUTH.SUCCESS, data.user)
      dispatch('LOAD_TOKEN')
      Local.setItem('user', data.user)
      Cookie.set('user', data.user)
      return Promise.resolve()
    } catch (error) {
      commit(mutationTypes.AUTH.FAILURE, error)
      return Promise.reject()
    }
  },
  async SIGN_UP({ commit, dispatch }, { email, password }) {
    try {
      commit(mutationTypes.AUTH.PENDING)
      const data = await firebase.auth().createUserWithEmailAndPassword(email, password)
      const currentUser = firebase.auth().currentUser
      await currentUser.sendEmailVerification()
      commit(mutationTypes.AUTH.SUCCESS, null)
      return Promise.resolve()
    } catch (error) {
      commit(mutationTypes.AUTH.FAILURE, error)
      return Promise.reject()
    }
  },
  INIT_AUTH({ commit, dispatch }, req) {
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
    commit('SET_TOKEN', user.stsTokenManager.accessToken)
  },
  async SIGN_OUT({ commit, ...rest }) {
    await firebase.auth().signOut()
    commit('SET_USER', null)
    commit('SET_TOKEN', null)
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
  },
  async LOAD_LOOKUP({ commit }, lookupName) {
    try {
      commit(mutationTypes.LOOKUP.PENDING);
      const url = `${process.env.MR_API}metadata/lookup`;
      const result = await this.$axios.get(url, {
        params: {
          lookupName
        }
      });
      commit(mutationTypes.LOOKUP.SUCCESS, {
        [lookupName]: result.data
      });
      return Promise.resolve();
    } catch (error) {
      commit(mutationTypes.LOOKUP.FAILURE, error)
      return Promise.reject(error);
    }
  },
  async LOAD_LOOKUP_ENTITY({ commit }, lookupName) {
    try {
      commit(mutationTypes.LOOKUP.PENDING);
      const url = `${process.env.MR_API}metadata/lookupentity/${lookupName}`;
      const result = await this.$axios.get(url);
      commit(mutationTypes.LOOKUP.SUCCESS, {
        [lookupName]: result.data
      });
      return Promise.resolve();
    } catch (error) {
      commit(mutationTypes.LOOKUP.FAILURE, error)
      return Promise.reject(error);
    }
  },
  async nuxtServerInit({ dispatch }) {
    await Promise.all([
      dispatch('LOAD_LOOKUP', 'NumberOfDoctors'),
      dispatch('LOAD_LOOKUP', 'CurrentClinicalSystem'),
      dispatch('LOAD_LOOKUP_ENTITY', 'ServiceProviderType'),
      dispatch('LOAD_LOOKUP', 'StateID')
    ])
  }
}