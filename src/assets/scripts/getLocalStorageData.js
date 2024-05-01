const getLocalStorageData = (key) => {
    try {
      return JSON.parse(localStorage.getItem(key))
    } catch (error) {
      return localStorage.getItem(key)
    }
  }

export default getLocalStorageData