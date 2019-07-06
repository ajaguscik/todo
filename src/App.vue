<template>
  <div class="container">
    <app-header :completedTasks="completedTasksNo" :allTasks="tasks.length"></app-header>
    <app-newtask @taskAdded="addTask"></app-newtask>
    <app-tasks :tasks="tasks" @tasksUpdated="updateTask"></app-tasks>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import NewTask from './components/NewTask.vue';
import Tasks from './components/Tasks.vue';
export default {
  data() {
    return {
      tasks: [],
      completedTasksNo: '',
    }
  },
  components: {
    appHeader: Header,
    appNewtask: NewTask,
    appTasks: Tasks
  },
  methods: {
    addTask(newTask) {
      this.tasks.push(newTask);
      this.completedTasksNo = this.tasks.filter(task => task.completed === true).length;
    },
    updateTask(updatedTasks) {
      this.tasks = [...updatedTasks];
      this.completedTasksNo = this.tasks.filter(task => task.completed === true).length;
    }
  }
}
</script>

<style>

body {
        padding: 2em;
        color: #225f40;
        background-color: #f0f7f6;
}
    .appear-enter-active {
        animation: appear-in 400ms ease-out forwards;
    }
    .appear-leave-active {
        animation: appear-out 400ms ease-out forwards;
    }
    .slide-move {
      transition: transform 1s;
    }
    @keyframes appear-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes appear-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

</style>
