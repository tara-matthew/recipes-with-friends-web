import Api from '../services/Api'

export default {
    post(recipe) {
        return Api().post('recipes', recipe)
    },

    show(recipeId) {
        return Api().get(`recipes/${recipeId}`)
    },

    index(search) {
        return Api().get('recipes', {
            params: {
                search: search
            }
        })
    }
}
