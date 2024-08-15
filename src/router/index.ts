import MainView from '@/views/MainView.vue';
import { componentSizeMap } from 'element-plus';
import { createRouter, createWebHistory } from 'vue-router';
 
// import AttackSimulation from './views/AttackSimulation.vue';
// import VulnerabilityMeasurement from './views/VulnerabilityMeasurement.vue'; 
// import PayloadAdjustment from './views/PayloadAdjustment.vue'; 

export const routes = [
    { 
        path: '/', 
        name: 'MainView',
        component: MainView,
        children:[
            {
                path: '/Detection', 
                name: 'Detection',
                component: () => import('../views/AboutView.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});   

export default router;   