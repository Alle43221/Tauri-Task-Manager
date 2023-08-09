<script lang="ts">
import {ref, Ref} from "vue";
import { RouterLink, RouterView } from 'vue-router'

interface Task {
  id: number,
  name: string,
  description: string,
  priority: number,
  done: false
}

export const taskName: Ref<string> = ref("")
export const taskDescription: Ref<string> = ref("")
export const taskPriority: Ref<number> = ref(0)

export const tasks: Ref<Task[]> = ref([])
export const lasttask: Ref<Task> = ref({})
export let current_id=0;

</script>


<template>
 <div id="app">
    <nav>
      <RouterLink to="/">Add Task</RouterLink>
      <RouterLink to="/viewtasks">View Tasks</RouterLink>
    </nav>
     <RouterView />
  </div>
</template>

<style>
nav{
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: aliceblue;
  margin: 0;
  padding: 0;

}
a{
  color:rgb(104, 113, 124);
  font-size:xx-large;
  border-radius: 20px;
  padding: 5px;
  height: 40px;
  vertical-align: middle;
}
</style>
