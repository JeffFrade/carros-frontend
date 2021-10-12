import axios from 'axios'

const urlBase = 'http://localhost:8000/api/'

export default {
  getAllCars: (callback) => {
    const url = `${urlBase}`
    axios.get(url).then((cars) => {
      if (callback) {
        callback(cars)
      }
    })
  }
}
