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
                component: () => import('../views/DetailDetect/DetailView.vue')
            },
            {
                path: '/Detection/Major', 
                name: 'DetectionMajor',
                component: () => import('../views/DetailDetect/DetailMajor.vue')
            },
            {
                path: '/Detection/Minor', 
                name: 'DetectionMinor',
                component: () => import('../views/DetailDetect/DetailMinor.vue')
            },
            {
                path: '/IPv6', 
                name: 'IPv6',
                component: () => import('../views/IPv6/IPv6.vue')
            },
            {
                path: '/IPv6/Insert', 
                name: 'Insert',
                component: () => import('../views/IPv6/IPInsert.vue')
            },
            {
                path: '/IPv6/Deny', 
                name: 'Deny',
                component: () => import('../views/IPv6/IPDeny.vue')
            },
            {
                path: '/DoHT', 
                name: 'DoHT',
                component: () => import('../views/DoTDoH/DotDoH.vue')
            },
            {
                path: '/DoTDoH/api-1', 
                name: 'DoHInsert',
                component: () => import('../views/DoTDoH/DenyView.vue')
            },
            {
                path: '/DoTDoH/api-2', 
                name: 'DoHDeny',
                component: () => import('../views/DoTDoH/ResolveView.vue')
            },
            {
                path: '/DNSSEC', 
                name: 'DNSSEC',
                component: () => import('../views/DNSSEC/DNSSECView.vue')
            },
            {
                path: '/DNSSEC/Poison', 
                name: 'Poison',
                component: () => import('../views/DNSSEC/DnssecPoison.vue')
            },
            {
                path: '/DNSSEC/Bypass', 
                name: 'DnssecBypass',
                component: () => import('../views/DNSSEC/DnssecBypass.vue')
            },
            {
                path: '/DNSSEC/Deny', 
                name: 'DnssecDeny',
                component: () => import('../views/DNSSEC/DnssecDeny.vue')
            }
            // {
            //     path: '/DNSSEC/Deny', 
            //     name: 'DnssecDeny',
            //     component: () => import('../views/DNSSEC/DnssecLiu.vue')
            // }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});   

export default router;   