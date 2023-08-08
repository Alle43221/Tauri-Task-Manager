<script setup lang="ts">
import {tasks, } from './'

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

</script>

