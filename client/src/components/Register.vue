<template>
    <v-container fill-height>
        <v-card width="650" class="mx-auto py-5">

            <v-card-title class="justify-center">
                <h1 class="display-2 font-weight-thin">Let's get cooking!</h1>
            </v-card-title>

            <v-card-text>
                <v-form>
                    <v-text-field
                        type="firstName"
                        name="firstName"
                        v-model="firstName"
                        placeholder="first name"
                        prepend-icon="mdi-account"/>

                    <v-text-field
                        type="email"
                        name="email"
                        v-model="email"
                        placeholder="email"
                        prepend-icon="mdi-email" />

                    <v-text-field
                        type="password"
                        name="password"
                        v-model="password"
                        placeholder="password"
                        prepend-icon="mdi-lock" />

                </v-form>
            </v-card-text>

            <v-card-actions class="justify-center">
                <v-btn
                    color="success"
                    @click="register"
                    class="mb-3">
                    Register
                </v-btn>
            </v-card-actions>

            <div class="danger-alert" v-html="error">ERROR</div>



        </v-card>
    </v-container>
</template>


<script>

    import AuthenticationService from '@/services/AuthenticationService'

    export default {
        data() {
            return {
                email: '',
                password: '',
                firstName: '',
                error: null
            }
        },
        methods: {
            async register() {
                try {
                    const response = await AuthenticationService.register({
                        email: this.email,
                        password: this.password,
                        firstName: this.firstName
                    })
                    console.log(response)
                    this.$store.dispatch('setToken', response.data.token)
                    this.$store.dispatch('setUser', response.data.user)
                    console.log(response.data)
                    this.$router.push({
                        name: 'recipes'
                    })
                } catch(error) {
                    console.log(error)
                    this.error = error.response.data.error
                }
            }
        }
    }

 </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
