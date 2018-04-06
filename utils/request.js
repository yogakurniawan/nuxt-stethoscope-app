export function updateQueryStringParameter(uri, key, value) {
  var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  if (uri.match(re)) {
    return uri.replace(re, '$1' + key + "=" + value + '$2');
  } else {
    return uri + separator + key + "=" + value;
  }
}

export const doAsync = (store, {
  url,
  mutationTypes,
  stateKey
}) => {
  store.commit(mutationTypes.PENDING)
  this.$axios(url, {})
    .then(response => {
      store.commit(mutationTypes.SUCCESS, response.data)
    })
    .catch(error => {
      store.commit(mutationTypes.FAILURE)
    })
}
