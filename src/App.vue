<script setup>
   import { RouterLink, RouterView } from 'vue-router';
   import HelloWorld from './components/HelloWorld.vue';
   import ProjectLogo from './components/graphics/ProjectLogo.vue';
</script>

<template>
   <vue-app>
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
            </nav>
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
   body,
   #app {
      display: contents;
   }

   vue-app {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
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
