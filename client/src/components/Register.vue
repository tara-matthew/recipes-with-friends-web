<template>
    <div>
        <h1>Register</h1>

        <input
            type="email"
            name="email"
            v-model="email"
            placeholder="email" />
        <br>

        <input
            type="password"
            name="password"
            v-model="password"
            placeholder="password" />
        <br>

        <button
            @click="register">
            Register
        </button>
    </div>
</template>


<script>

    import AuthenticationService from '@/services/AuthenticationService'

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            async register() {
                console.log("button clicked")
                const response = await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })

                console.log(response.data)
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
