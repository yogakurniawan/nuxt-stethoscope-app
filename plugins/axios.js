import { updateQueryStringParameter } from '../utils/request'

export default function ({ $axios, redirect, ...rest }) {
  console.log(rest)
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 401) {
      console.log(code)
    }
  })
  $axios.onRequest(config => {
    console.log(config)
    config.url = updateQueryStringParameter(config.url, 'auth', 'foo')
  })
}