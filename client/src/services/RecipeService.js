import Api from '../services/Api'

export default {
    post (recipe) {
        return Api().post('recipes', recipe)
    }
}
