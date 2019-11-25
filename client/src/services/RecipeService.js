import Api from '../services/Api'

export default {
    post(recipe) {
        return Api().post('recipes', recipe)
    },

    show(recipeId) {
        return Api().get(`recipes/${recipeId}`)
    },

    index(params) {
        return Api().get('recipes', {
            params: params
        })
    }
}
