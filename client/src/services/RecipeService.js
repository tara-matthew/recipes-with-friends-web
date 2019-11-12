import Api from '../services/Api'

export default {
    post (recipe) {
        return Api().post('recipes', recipe)
    },

    index (params) {
        return Api().get('recipes', {
            params: params
        })
    }
}
