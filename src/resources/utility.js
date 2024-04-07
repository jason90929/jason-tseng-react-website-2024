import MobileDetect from 'mobile-detect'

export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  }
}

export const isMobile = (new MobileDetect(window.navigator.userAgent).mobile() !== null)

export const loadImage = async (url = '', callback = () => { }, onprogress = e => { }, onerror = () => { }) => {
  if (typeof url === 'string' || url instanceof String) {
    try {
      const xmlHttp = new window.XMLHttpRequest()
      xmlHttp.open('GET', url, true)
      xmlHttp.responseType = 'arraybuffer'
      xmlHttp.onload = () => {
        callback()
      }
      xmlHttp.onprogress = e => {
        onprogress(Math.ceil(e.loaded / e.total * 100))
      }
      xmlHttp.onerror = () => {
        onerror()
      }
      xmlHttp.send()
    } catch (e) {
    }
  } else if (Array.isArray(url) && url.length > 0) {
    url = url.filter(uniUrl => uniUrl)
    const loadAllImages = url.map(uniUrl => {
      return new Promise((resolve, reject) => {
        try {
          const xmlHttp = new window.XMLHttpRequest()
          xmlHttp.open('GET', uniUrl, true)
          xmlHttp.responseType = 'arraybuffer'
          xmlHttp.onload = () => {
            resolve()
          }
          xmlHttp.onerror = () => {
            onerror()
            reject(new Error('image load error'))
          }
          xmlHttp.send()
        } catch (error) {
          reject(new Error(error))
        }
      })
    })
    await Promise.all(loadAllImages).then(() => {
      callback()
    }).catch(error => {
      console.error(error)
      return null
    })
  }
}
