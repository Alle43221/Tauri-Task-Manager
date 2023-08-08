<script setup lang="ts">
import {ref, Ref} from "vue";

/* TO-DO (8)
  Make a two separate components: one for creating the task, and one for viewing all tasks.
  The user should be able to navigate back and forth between these two screens.
  (HINT: use VueRouter)
*/

interface Task {
  id: number,
  name: string,
  description: string,
  priority: number
}

const taskName: Ref<string> = ref("")
const taskDescription: Ref<string> = ref("")
const taskPriority: Ref<number> = ref(0)
let current_id=1;
const ValidInput=ref(false);
const VisibleTasks=ref(false);

/* TO-DO (6)DONE
  Implement a way for the user to add multiple tasks.
  (HINT: use v-for to show all tasks to the screen)
*/
const tasks: Ref<Task[]> = ref([])
const lasttask: Ref<Task> = ref({})

function ShowTasks(){
  ValidInput.value=false;
  VisibleTasks.value=!VisibleTasks.value;
}

function createTask() {
  /* TO-DO (4) DONE
  Validate the user input before showing it on the screen.
  For example, the task must have a name. It's your choice what checks you want to make.
  Only if the user input is valid, will you show it on the screen.
*/
 
    
  if ((taskName.value!=='')&&(taskPriority.value!==0)){
    ValidInput.value=true; 
    lasttask.value.name=taskName.value;
    lasttask.value.id=current_id++;
    lasttask.value.description=taskDescription.value;
    lasttask.value.priority=taskPriority.value;
    tasks.value.push({id:current_id, name:taskName.value, description:taskDescription.value, priority: taskPriority.value});
  }
  else {
    ValidInput.value=false;
    alert("Make sure the Name and Priority fields are completed!")
  }
}

function dynamicId(taskPriority){
  if(taskPriority==1)
  { return 'high'}
  else if(taskPriority==2){
    return 'medium'
  }
  else return 'low';

}

</script>

<template>
  <div class="container">
    <h1>Create a New Task</h1>
    <!-- TO-DO (1) DONE
      Make a way for a user to create a new task. 
      The task should have a name, description and priority. 
    -->
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
    
  
    <!-- TO-DO (2) DONE
      Make it so that this button creates a new task with the given name, description and priority.
    -->

    <div class="show-task">

      <!-- TO-DO (3) DONE
        Show the newly created task on the screen.
        The user should be able to see the name, description and priority of the task they have just created.
      -->

      <div v-if="ValidInput">
        <h3>Last added:</h3>
        <p>Name : {{lasttask.name}}</p>
        <p>Description : {{lasttask.description}}</p>
        <p>Priority : {{lasttask.priority}}</p>
      </div>

      <button @click="ShowTasks">Show All Tasks</button>
      <div v-if="VisibleTasks">
          <div v-for="task in tasks" :key="task.id" :class="dynamicId(task.priority)">
            <p>ID : {{ task.id }}</p>
            <p>Name : {{ task.name }}</p>
            <p>Description : {{ task.description }}</p>
            <p>Priority : {{ task.priority }}</p>
          </div>
      </div>

      <!-- TO-DO (5) DONE
      If the input is not valid, show an alert on the screen.
      If it is valid, show the newly created task.
      (HINT: use v-if)
      -->

      <!-- TO-DO (9) - bonus
        Implement a way for the user to check off tasks (mark them as 'done')
        You decide what the done tasks will look like (eg crossed out, grayed out, deleted etc.)
      -->

      <!-- TO-DO (10) - bonus
        Implement a filter for each priority number.
        For example, the user can select to display only tasks that have priority 1.
      -->
    </div>
  </div>
</template>

<style scoped>
.high{
  color:red;
}
.medium{
  color:orange;
}
.low{
  color: yellow;
}
/* TO-DO (7) DONE
  Use CSS to change the task name color depending on the priority.
  (HINT: use attribute binding) 
*/
</style>
