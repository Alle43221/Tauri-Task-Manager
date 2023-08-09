import { createRouter, createWebHistory } from 'vue-router';
import AddTask from '../components/AddTask.vue'

import ViewTasks from '../components/ViewTasks.vue'

const routes = [
    {
      path: "/",
      name: "Add Task",
      component: AddTask,
    },
    {
      path: "/viewtasks",
      name: "View Tasks",
      component: ViewTasks,
    },
  ];

const router = createRouter({ history: createWebHistory(), routes })

export default router