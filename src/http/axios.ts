import axios, { type CreateAxiosDefaults } from 'axios'

const config: CreateAxiosDefaults = {
    // baseURL: '/',
    timeout: 10 * 1000, // 10 sec
}

const axiosInstance = axios.create(config)

axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response
}, function (error) {

    /**
     * @link https://axios-http.com/docs/handling_errors
     */
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
    } else {
        // Something happened in setting up the request that triggered an Error
    }

    return Promise.reject(error)
})

export { axiosInstance }
