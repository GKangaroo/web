import { createRouter, createWebHistory } from 'vue-router';
 
// import AttackSimulation from './views/AttackSimulation.vue';
// import VulnerabilityMeasurement from './views/VulnerabilityMeasurement.vue'; 
// import PayloadAdjustment from './views/PayloadAdjustment.vue'; 



export const routes = [
    { 
        path: '/MainPage', 
        component: () => import('../App.vue')
    }
    // { path: '/attack-simulation', component: AttackSimulation },
    // { path: '/vulnerability-measurement', component: VulnerabilityMeasurement },
    // { path: '/payload-adjustment', component: PayloadAdjustment },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});   

export default router;   