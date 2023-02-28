import MockAdapter from 'axios-mock-adapter'
import { axiosInstance } from '@/http/axios'

/**
 * @link https://github.com/ctimmerm/axios-mock-adapter
 */
export const axiosMock = new MockAdapter(axiosInstance)
