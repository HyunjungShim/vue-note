import ListView from '@/views/ListView.vue';
import WriteView from '@/views/WriteView.vue';
import ListDetailView from '@/views/ListDetailView.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
    {
        path:'/',
        component:ListView
    },
    {
        path:'/write',
        component:WriteView
    },
    {
        path:'/detail/:id',
        component:ListDetailView
    },
    {
        path: "/404",
        component: NotFound
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/404",
    },
]

export default routes;