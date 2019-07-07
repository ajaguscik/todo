<template>
    <div class="container">
        <div class="row justify-content-center"> 
            <h6>New Task:</h6>
        </div>
        <div class="form-group row justify-content-center input-section"> 
            <input v-model.trim="task.text" @keydown.enter="sendTask" autofocus type="text" class="form-control input-field">
            <button class="btn btn-add" @click="sendTask">Add Task</button>
        </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            task: {
                text: '',
                completed: false
            }
        }
    },
    methods: {
        sendTask() {
            if (this.task.text.length > 0) {
                const task = JSON.parse(JSON.stringify(this.task));
                this.$emit('taskAdded', task);
                this.task.text = '';
            } 
        }
    }
}
</script>

<style>
    .btn-add {
        color: #f0f7f6;
        background-color: #255c40;
        margin-left: 1em;
        margin-top: 0;
    }
    .btn-add:hover {
        color: #f0f7f6;
        background-color: #0b4b2b;
    }
    .input-section {
        margin-bottom: 3em;
    }
    .input-field {
        width: 60%;
    }
</style>
