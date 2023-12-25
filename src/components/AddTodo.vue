<template>
    <form @submit.prevent="onSubmit">
        <input type="text" v-model="title" placeholder="todo title">
        <button type="submit">Create</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        onSubmit() {
            console.log('Submit', this.title)
            if (this.title.trim()) {
                const newTodo = {
                    id: Date.now(),
                    title: this.title,
                    completed: false
                }

                this.$emit('add-todo', newTodo)
                this.title = ''
            }
        }
    }
}
</script>

<style scoped>
    form {
        width: 100%;
    }

    input {
        height: 25px;
        width: 98%;
        outline: none;
        border: 1px solid #ccc;
    }
    button {
        height: 25px;
        width: 100%;
        margin-top: 10px;
        background: #FFF;
        outline: none;
        border: 1px solid #ccc;
    }
</style>