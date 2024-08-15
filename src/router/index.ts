import { createRouter, createWebHistory } from 'vue-router';
 
// import AttackSimulation from './views/AttackSimulation.vue';
// import VulnerabilityMeasurement from './views/VulnerabilityMeasurement.vue'; 
// import PayloadAdjustment from './views/PayloadAdjustment.vue'; 

export const routes = [
    { 
        path: '/MainView', 
        name: 'MainView',
        component: () => import('../App.vue')
    },
    { 
        path: '/Detection', 
        name: 'Detection',
        component: () => import('../components/HelloWorld.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});   

export default router;   