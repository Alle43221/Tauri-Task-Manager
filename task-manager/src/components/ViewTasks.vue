<script setup lang="ts">
import {tasks} from '../App.vue'
import {ref, computed, Ref} from "vue";

const hideCompleted =ref(false);
const ShowHigh =ref(true);
const ShowMedium =ref(true);
const ShowLow =ref(true);
const Priorities : Ref<[]>=ref(["High", "Medium", "Low"])
  
function dynamicId(taskPriority){
    if(taskPriority==1)
    { return 'high'}
    else if(taskPriority==2){
      return 'medium'
    }
    else return 'low';
  
}

function removeTask(task){
  tasks.value = tasks.value.filter((t) => t !== task)
}

const filteredTasks = computed(() => {
  return (hideCompleted.value ? tasks.value.filter((t) => !t.done) : tasks.value).filter((t) =>{
    if(t.priority==1)
      return ShowHigh.value
    else if(t.priority==2) 
      return ShowMedium.value;
    else 
      return ShowLow.value;
  })
})

function filterPriority(number, mnv){ 
  if(number==1)ShowHigh.value = !ShowHigh.value
  else if(number==2)ShowMedium.value = !ShowMedium.value
  else ShowLow.value = !ShowLow.value
  if(mnv==false)
    filteredTasks.value.filter((t) => t.priority!=number);
 
}

  </script>

  <template>
      
      <div class="container">
      <div>
      <button @click="hideCompleted = !hideCompleted" class="menu_button">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </button>
      <button @click="ShowHigh = !ShowHigh" class="menu_button">
        {{ ShowHigh ? 'Hide High Priority' : 'Show High Priority' }}
      </button>
      <button @click="ShowMedium = !ShowMedium" class="menu_button">
        {{ ShowMedium ? 'Hide Medium Priority' : 'Show Medium Priority' }}
      </button>
      <button @click="ShowLow = !ShowLow" class="menu_button">
        {{ ShowLow ? 'Hide Low Priority' : 'Show Low Priority' }}
      </button>
      </div>
      <div class="cards_container">
          <div v-for="task in filteredTasks" :key="task.id" :class="[{ done: task.done}, 'cards', dynamicId(task.priority)]" >
            <input type="checkbox" v-model="task.done" class="cards_check">
            <div class="cards_info">
            <p>Name : {{ task.name }}</p>
            <p>Description : {{ task.description }}</p>
            <p>Priority : {{ Priorities[task.priority-1]  }}</p>
            </div>
            <button @click="removeTask(task)" class="cards_button">X</button>
          </div>
      </div>
    </div>
  </template>

  <style>
  .menu_button{
    margin: 5px;
  }
  .cards{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color:rgb(36, 62, 98);
    margin: 5px;
    border-radius: 20px;
  }
  .cards_check{
      height: 45px;
      width: 45px;
  }

  .cards_container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
  }
  .cards_info{
    margin:5px;
  }
  .cards_button{
    height: 50px;
    width: 50px;
  }
  .done {
  background-color: rgb(27, 45, 71);
}
</style>