import axios from 'axios'

const api = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 5000
})

export const get = async<T>(
    endpoint: string,
    options: Partial<T> | undefined = undefined) => {

    if (options) {
        options = {
            ...options
        }
    }

    try {
        const { data } = await api.get(endpoint, { params: options })
        return data
    } catch (error) {
        throw error
    }
}