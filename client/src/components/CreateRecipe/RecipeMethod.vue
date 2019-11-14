<template>
    <v-row>
        <v-col
            cols="12"
            class="custom-padding">
            <v-card class="first-card">
                <v-row>
                    <v-col
                        class="px-12 pt-12"
                        cols="6"
                        md="6">
                        <div
                            class="input-area"
                            v-for="input in inputs"
                            :key = "input.id">
                            <v-textarea
                                outlined
                                :label ="input.label"
                                placeholder="Massage oil into Caroline">
                            </v-textarea>
                        </div>
                        <v-card-actions class="justify-center">
                            <v-btn
                                color="#099E7A"
                                class="mb-3 white--text"
                                @click="addInput">
                                Add
                            </v-btn>
                        </v-card-actions>
                    </v-col>
                    <v-col
                        class="px-12 pt-12"
                        cols="6"
                        md="6">
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        counter: 1,
        inputs: [{
            id: 'method1',
            label: 'How do you make it?',
            value: '',
        }],
    }),

    methods: {
        addInput() {
            this.inputs.push({
                id: `method${++this.counter}`,
                label: `Step ${this.counter}`,
                value: ''
            })
        },
    }
}
</script>

<style scoped>
    .custom-padding {
        padding-left: 39px;
        padding-right: 39px;
    }

    .first-card {
        background: #F7F7F7;
        margin-bottom: 20px;
    }
</style>
