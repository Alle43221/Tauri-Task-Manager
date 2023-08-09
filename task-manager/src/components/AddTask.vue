<script setup lang="ts">
import {Ref, ref} from "vue";
import {tasks, lasttask, taskName, taskDescription, taskPriority, current_id} from '../App.vue'
const ValidInput: Ref<Boolean>=ref(false);
let current_id=0;

function createTask() {
      
    if ((taskName.value!=='')&&(taskPriority.value!==0)){
      ValidInput.value=true; 
      lasttask.value.name=taskName.value;
      lasttask.value.id=current_id++;
      lasttask.value.description=taskDescription.value;
      lasttask.value.priority=taskPriority.value;
      lasttask.value.done=false;
      tasks.value.push({id:current_id, name:taskName.value, description:taskDescription.value, priority: taskPriority.value, done:false});
    }
    else {
      ValidInput.value=false;
      alert("Make sure the Name and Priority fields are completed!")
    }
  }

</script>

<template>
    <div class="container">
      <h1>Create a New Task</h1>
      
      <div>
      <input v-model="taskName" placeholder="Task Name">
      <input v-model="taskDescription" placeholder="Task Description">
      <p>Priority:</p>
      <div>
      <input type="radio" id="low" value=3 v-model="taskPriority" />
      <label for="low">Low</label>
      <input type="radio" id="medium" value=2 v-model="taskPriority" />
      <label for="medium">Medium</label>
      <input type="radio" id="high" value=1 v-model="taskPriority" />
      <label for="high">High</label>
      </div>
      <button @click="createTask">Create Task</button>
      </div>
  
      <div class="show-task">
  
        <div v-if="ValidInput">
          <h3>Last added:</h3>
          <p>Name : {{lasttask.name}}</p>
          <p>Description : {{lasttask.description}}</p>
          <p>Priority : {{lasttask.priority}}</p>
          
        </div>
      </div>
        
    </div>
</template>
