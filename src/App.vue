<script setup>
   import { ref } from 'vue';
   import { RouterLink, RouterView } from 'vue-router';
   import HelloWorld from './components/HelloWorld.vue';
   import ProjectLogo from './components/graphics/ProjectLogo.vue';

   const mainMenuOpen = ref(false);

   function toggleMenu() {
      mainMenuOpen.value = !mainMenuOpen.value;
   }
</script>

<template>
   <vue-app :class="{ 'menu-open': mainMenuOpen }">
      <header>
         <inner-column>
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
               </ul>

               <button @click="toggleMenu()">toggle menu</button>
            </nav>

            <button @click="toggleMenu()">toggle menu</button>
         </inner-column>
      </header>

      <main>
         <inner-column>
            <route-outlet>
               <RouterView />
            </route-outlet>
         </inner-column>
      </main>

      <footer>
         <inner-column> footer </inner-column>
      </footer>
   </vue-app>
</template>

<style>
   vue-app.menu-open .site-menu {
      position: fixed;
      background-color: white;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      display: grid;
      place-items: center;
   }

   .site-menu {
      border: 4px solid red;
   }

   vue-app.menu-open .site-menu ul {
      display: flex;
      flex-direction: column;
   }

   vue-app.menu-open .site-menu a {
      display: block;
      padding: 20px;
   }

   body,
   #app {
      display: contents;
   }

   vue-app {
      display: flex;
      flex-direction: column;
      min-height: 100vh;

      position: relative;
      overflow: hidden;
   }

   main {
      flex-grow: 1;
   }

   inner-column {
      display: block;
      max-width: 1000px;
      margin-right: auto;
      margin-left: auto;
      border: 1px solid blue;
      padding: 10px;
   }

   route-outlet {
      display: block;
      border: 2px dashed gray;
      padding: 10px;
   }
</style>
