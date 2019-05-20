import Create from '@/components/Create.vue';
import Edit from '@/components/Edit.vue';
import Index from '@/components/Index.vue';

export const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
  },
];
