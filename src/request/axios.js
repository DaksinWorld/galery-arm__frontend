import axios from 'axios'

const requestAxios = axios.create({
    baseURL: 'https://protected-plains-17913.herokuapp.com'
})

export default requestAxios
