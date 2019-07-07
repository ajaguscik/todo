<template>
    <div class="container">
        <div class="row justify-content-center">
            <transition name="appear">
                <h6 v-if="tasksNC.length > 0 || tasksC.length > 0">List of Tasks:</h6>
            </transition>
        </div>
        <div class="sublist">
            <app-task v-if="tasksNC.length > 0" v-for="(task, i) in tasksNC" class="row" :key="Math.random()">
                <div class="row justify-content-center item">
                    <div class="row justify-content-center col-1 col-md-1 col-xl-1 nc-check" @click="changeMark(tasksNC, i)">
                        <div class="nc-check-visible"><font-awesome-icon :icon="['far', 'circle']" /></div>
                        <div class="nc-check-nonvisible"><font-awesome-icon :icon="['far', 'check-circle']" /></div>
                    </div>
                    <div class="col-8 col-md-5 col-xl-3 text">{{ task.text }}</div>
                    <div class="col-1 col-md-1 col-xl-1 nc-trash" @click="remove(tasksNC, i)">
                        <div class="nc-trash-visible"><font-awesome-icon :icon="['far', 'trash-alt']" /></div>
                        <div class="nc-trash-nonvisible"><font-awesome-icon :icon="['fas', 'trash-alt']" /></div>
                    </div>
                </div>
            </app-task>
        </div>
        <div class="sublist">
            <app-task v-if="tasksC.length > 0" v-for="(task, i) in tasksC" class="row completed" :key="Math.random()">
                <div class="row justify-content-center item">
                    <div class="row justify-content-center col-1 col-md-1 col-xl-1 c-check" @click="changeMark(tasksC, i)">
                        <div class="c-check-visible"><font-awesome-icon :icon="['fas', 'check-circle']" /></div>
                        <div class="c-check-nonvisible"><font-awesome-icon :icon="['fas', 'circle']" /></div>
                    </div>
                    <div class="col-8 col-md-5 col-xl-3 text">{{ task.text }}</div>
                    <div class="col-1 col-md-1 col-xl-1 c-trash" @click="remove(tasksC, i)">
                        <div class="c-trash-visible"><font-awesome-icon :icon="['far', 'trash-alt']" /></div>
                        <div class="c-trash-nonvisible"><font-awesome-icon :icon="['fas', 'trash-alt']" /></div>
                    </div>
                </div>
            </app-task>
        </div>
    </div>
</template>

<script>
import Task from './Task.vue';
export default {
    props: ['tasks'],
    components: {
        appTask: Task
    },
    computed: {
        tasksC() {
            return this.tasks.filter(task => task.completed === true);
        },
        tasksNC() {
            return this.tasks.filter(task => task.completed === false);
        }
    },
    methods: {
        remove(tasksList, i) {
            tasksList.splice(i, 1);
            const allTasks = this.tasksC.concat(this.tasksNC);
            this.$emit('tasksUpdated', allTasks);
        },
        changeMark(tasksList, i) {
            (tasksList[i].completed === true) ? tasksList[i].completed = false : tasksList[i].completed = true;
            const allTasks = this.tasksC.concat(this.tasksNC);
            this.$emit('tasksUpdated', allTasks);
        }
    }
}
</script>

<style>
    .completed {
        color: #628574; 
    }
    .sublist {
        margin-bottom: 0.5em;
    }
    .text {
        overflow: hidden;
    }
    .item {
        width: 100%;
    }

    .nc-check, .c-check, .nc-trash, .c-trash {
        cursor: pointer;
    }
    
    .nc-check-nonvisible{
        display: none;
    }
    .nc-check:hover .nc-check-visible {
        display: none;
    }
    .nc-check:hover .nc-check-nonvisible {
        display: block;
    }
    .nc-trash-nonvisible{
        display: none;
    }
    .nc-trash:hover .nc-trash-visible {
        display: none;
    }
    .nc-trash:hover .nc-trash-nonvisible {
        display: block;
    }
    
    .c-check-nonvisible{
        display: none;
    }
    .c-check:hover .c-check-visible {
        display: none;
    }
    .c-check:hover .c-check-nonvisible {
        display: block;
    }
    .c-trash-nonvisible{
        display: none;
    }
    .c-trash:hover .c-trash-visible {
        display: none;
    }
    .c-trash:hover .c-trash-nonvisible {
        display: block;
    }
</style>
