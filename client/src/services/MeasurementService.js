import Api from '../services/Api'

export default {
    index(params) {
        return Api().get('measurements', {
            params: params
        })
    },
}