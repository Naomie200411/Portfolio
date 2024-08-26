import { createRouter, createWebHistory } from 'vue-router';
import Acceuil from './components/Acceuil.vue';
import Apropos from './components/Apropos.vue';
import Contact from './components/Contact.vue';
import Skills from './components/Skills.vue';
import Projets from './components/Projets.vue';




const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: Acceuil
  },
  {
    path: '/a-propos',
    name: 'Apropos',
    component: Apropos
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/projets',
    name: 'Projets',
    component: Projets
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
