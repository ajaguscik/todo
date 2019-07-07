<template>
    <div class="container">
        <div class="row justify-content-center">
            <h1>To Do List</h1>
        </div>
        <div class="row justify-content-center">
            <h4>Add, Remove and Mark Tasks as Completed!</h4>
        </div>
        <hr>
        <transition name="appear">
            <div v-if="allTasks !== 0">
                <div class="row justify-content-center">
                    <transition name="appear" mode="out-in">
                        <h6 key=1 v-if="allTasks !== 0 && allTasks === completedTasks">All Tasks Completed!</h6>
                        <h6 key=2 v-else>Completed Tasks:</h6>
                    </transition>
                </div>
                <div class="row justify-content-center">
                    <div class="progress progbar-background">
                        <div class="progress-bar progbar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"
                            :style="{width: (completedTasks / allTasks) * 100 + '%'}">
                            &nbsp;{{ completedTasks }} / {{ allTasks }}
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: ['completedTasks', 'allTasks']
}
</script>

<style>
h1, h6 {
    color: #0b4b2b;
}
.progbar-background {
    width: 50%; 
    background-color: #789184;
    margin-bottom: 3em;
}
.progbar {
    background-color: #0b4b2b;
}
</style>
