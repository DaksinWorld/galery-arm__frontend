import axios from 'axios'

const requestAxios = axios.create({
    baseURL: 'https://strapi-postgres22.herokuapp.com'
})

export default requestAxios
