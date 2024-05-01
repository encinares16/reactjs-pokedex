const setData = (key, value) => {
  typeof value == 'object'
  ? localStorage.setItem(key, JSON.stringify(value))
  : localStorage.setItem(key, value)
}
export default setData

