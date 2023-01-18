<script setup>
   import { ref, computed, watch } from 'vue';

   import { RouterLink, RouterView } from 'vue-router';
   import HelloWorld from './components/HelloWorld.vue';
   import ProjectLogo from './components/graphics/ProjectLogo.vue';

   const mainMenuOpen = ref(false);

   function toggleMainMenu() {
      mainMenuOpen.value = !mainMenuOpen.value;
   }

   // compute a string to be used as a dynamic CSS class
   const mainMenuClass = computed(function () {
      if (mainMenuOpen.value == true) {
         console.log('hi');
         return 'menu-open-example';
      } else {
         return '';
      }
   });

   // use the DOM and toggle a CSS class
   watch(mainMenuOpen, function (a, b) {
      if (a !== b) {
         document.body.classList.toggle('menu-open');
      }
   });

   // uset the DOM to toggle a data-attribute
   watch(mainMenuOpen, function (a, b) {
      if (a === true) {
         document.documentElement.dataset.menuOpen = '';
      } else {
         delete document.documentElement.dataset.menuOpen;
      }
   });

   // another way you might do that ^
   // watch(mainMenuOpen, function (a, b) {
   //    let state = 'closed';
   //    if (a === true) {
   //       state = 'open';
   //    }
   //    document.documentElement.dataset.menuOpen = state;
   // });
   // why not need for .value on these watchers?
   // a.value ?
</script>

<template>
   <header :class="mainMenuClass">
      <div class="inner-column">
         <h2>mainMenuOpen: {{ mainMenuOpen }}</h2>

         <nav class="site-menu">
            <ul>
               <li>
                  <HelloWorld helloMessage="V3C" />
               </li>

               <li>
                  <RouterLink class="home-link" to="/">
                     <ProjectLogo />
                  </RouterLink>
               </li>

               <li>
                  <RouterLink to="/">Home</RouterLink>
               </li>

               <li>
                  <RouterLink to="/about">About</RouterLink>
               </li>

               <li>
                  <button @click="toggleMainMenu()">Toggle Body Class</button>
               </li>
            </ul>
         </nav>
      </div>
   </header>

   <RouterView />
</template>

<style>
   body.menu-open {
      background-color: wheat;
   }

   header.menu-open-example {
      background-color: lightgreen;
   }
</style>
