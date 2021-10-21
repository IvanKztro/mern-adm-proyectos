import axios from 'axios'

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL2,
    mode: 'cors',
    headers: {
            	'Access-Control-Allow-Origin': '*',
        	}
})

export default clienteAxios;