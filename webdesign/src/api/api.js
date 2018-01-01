/**
 * Axios instance to internal api
 * all options for internal api
 * to be set here
 */

import axios from 'axios'

/**
 * Options
 */
const instance = axios.create({
    baseURL: '//localhost:8081'
})

instance.defaults.headers.common['Content-Type'] = 'application/json'


/**
 * all api calls
 */
const service = {
    sampleGet(params) {
        let _params = params ? params : '';
        return instance.get('/api/sample/sample?' + params);
    }
}

/**
 * Note: please export axios instance when needed
 */
export default service