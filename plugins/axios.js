import firebase from 'firebase'
import axios from 'axios'
import { updateQueryStringParameter } from '../utils/request'

export default function ({ $axios, redirect, store, ...rest }) {
  $axios.onError(async error => {
    const { response } = error
    const code = parseInt(response && response.status)
    if (code === 401) {
      const result = await store.dispatch('REFRESH_TOKEN')
      if (result) {
        const url = updateQueryStringParameter(response.config.url, 'auth', store.getters.token)
        response.config.url = url
        return axios(response.config)
      } else {
        redirect(301, '/signin')
      }
    }
  })

  $axios.onRequest(config => {
    const isMedirecords = /medirecords/.test(config.url)
    if (!isMedirecords) {
      config.url = `${config.url}?auth=${store.getters.token}`
    }
  })
}