<script setup>
   import { RouterLink, RouterView } from 'vue-router';
   import HelloWorld from './components/HelloWorld.vue';
   import ProjectLogo from './components/graphics/ProjectLogo.vue';
</script>

<template>
   <header>
      <div class="wrapper">
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
                  <RouterLink to="/">Timeline</RouterLink>
               </li>

               <li>
                  <RouterLink to="/about">More timeline</RouterLink>
               </li>
            </ul>
         </nav>
      </div>
   </header>

   <RouterView />
</template>

<style>
   .site-menu ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      list-style: none; /* $todo */
   }
   .site-menu a:not(.home-link) {
      padding: 20px;
   }
   .home-link {
      display: block;
      max-width: 30px;
      padding: 10px;
   }
</style>
