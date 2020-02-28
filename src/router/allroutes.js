import Vue from 'vue'

//************ importa td componentes k nta bai usa ************* */

import About from '../components/About.vue';
import Contact from '../components/Contact.vue';
import Projects from '../components/Projects.vue';
import Experiences from '../components/Experiences.vue';
import Articles from '../components/Articles.vue';

let routes = [
    {
      path: '/',
      name: 'About',
      component: About
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/experiences',
      name: 'Experiences',
      component: Experiences
    },
    // {
    //   path: '/articles',
    //   name: 'Articles',
    //   component: Articles
    // },
    // {
    //   path: '/contact-me',
    //   name: 'Contact',
    //   component: Contact
    // }
  ]

export default routes