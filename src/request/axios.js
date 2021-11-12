import axios from 'axios'

const requestAxios = axios.create({
    baseURL: 'https://quiet-basin-40455.herokuapp.com/files'
})

export default requestAxios
