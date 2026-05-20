
export default {
  parseError (err) {
    const errors = err && err.response && err.response.data ? err.response.data.errors : []
    if (errors && errors[0] && errors[0].title) {
      return Object.values(errors)
    }
    console.log(err)
    return [{ title: 'Unknown Error, Reload the page and try again.' }]
  },
}
