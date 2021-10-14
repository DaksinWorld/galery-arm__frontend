import axios from 'axios'

const requestAxios = axios.create({
    baseURL: 'http://localhost:1337'
})

export default requestAxios
