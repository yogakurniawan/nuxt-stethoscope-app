import firebase from 'firebase'
import { updateQueryStringParameter } from '../utils/request'

export default function ({ $axios, redirect, store, ...rest }) {
  $axios.onError(async error => {
    const { response } = error
    const code = parseInt(response && response.status)
    if (code === 401) {
      const originalRequest = response.config
      originalRequest.baseURL = ''
      originalRequest._retry = true
      const result = await store.dispatch('REFRESH_TOKEN')
      if (result) {
        const url = updateQueryStringParameter(originalRequest.url, 'auth', store.getters.token)
        originalRequest.url = url
        return $axios(originalRequest)
      } else {
        redirect(301, '/signin')
      }
    }
  })

  $axios.onRequest(config => {
    config.url = `${config.url}?auth=${store.getters.token}`
  })
}