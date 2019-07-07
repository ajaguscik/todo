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
      completedTasksNo: [],
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
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.completedTasksNo = this.tasks.filter(task => task.completed === true).length;
    },
    updateTask(updatedTasks) {
      this.tasks = [...updatedTasks];
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.completedTasksNo = this.tasks.filter(task => task.completed === true).length;
    }
  },
  created() {
    try {
      if (Array.isArray(JSON.parse(localStorage.getItem('tasks')))) {
        this.tasks = JSON.parse(localStorage.getItem('tasks'));
      }
    }
    catch {
      localStorage.setItem('tasks', []);
      this.tasks = [];
    }
    this.completedTasksNo = this.tasks.filter(task => task.completed === true).length;
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
        animation: appear-in 500ms ease-out forwards;
    }
    .appear-leave-active {
        animation: appear-out 500ms ease-out forwards;
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
