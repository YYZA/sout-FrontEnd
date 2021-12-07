const getCookie = (name) => {
  let value = '; ' + document.cookie

  let parts = value.split(`; ${name}=`)

  if (parts.length === 2) {
    return parts.pop().split(';').shift()
  }
}

const deleteCookie = (name) => {
  let date = new Date('2020-01-01').toUTCString()

  document.cookie = name + '=; expires=' + date
}

export { getCookie, deleteCookie }
