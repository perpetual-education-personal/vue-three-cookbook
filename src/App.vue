<script setup>
   import { ref } from 'vue';
   import { RouterLink, RouterView, useRouter } from 'vue-router';
   import HelloWorld from './components/HelloWorld.vue';
   import ProjectLogo from './components/graphics/ProjectLogo.vue';

   const mainMenuOpen = ref(false);

   const router = useRouter();

   router.afterEach(function (to, from) {
      console.log(to, from);

      if (to.path !== from.path) {
         closeMenu();
      }
   });

   function toggleMenu() {
      mainMenuOpen.value = !mainMenuOpen.value;
   }

   function closeMenu() {
      mainMenuOpen.value = false;
   }
</script>

<template>
   <vue-app :class="{ 'menu-open': mainMenuOpen }">
      <header>
         <inner-column>
            <button @click="toggleMenu()">toggle menu</button>

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
         <inner-column>
            <h2>footer</h2>

            <button @click="toggleMenu()">toggle menu</button>
         </inner-column>
      </footer>
   </vue-app>
</template>

<style scoped>
   .site-menu {
      background-color: var(--color-light);
   }

   .site-menu ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      list-style: none; /* $todo */
      margin: 0;
      padding: 0;
   }

   .site-menu a:not(.home-link) {
      padding: 20px;
   }

   .site-menu .home-link {
      display: block;
      padding: 10px;
   }

   .site-menu .home-link svg {
      max-width: 20px;
   }

   .site-menu .router-link-active {
      color: var(--color);
   }

   .site-menu .router-link-active * {
      fill: var(--color);
   }

   @media (max-width: 599px) {
      .site-menu {
         position: fixed;
         background-color: var(--color-light);
         top: 0;
         left: 0;
         width: 100%;
         height: 100%;

         display: grid;
         place-items: center;

         transition: all 0.2s ease-in-out;
         opacity: 0.2;
         transform: translate(90%, 0);
         pointer-events: none;
      }

      .site-menu ul {
         display: flex;
         flex-direction: column;
      }

      .site-menu a {
         display: block;
         padding: 20px;
      }

      vue-app.menu-open .site-menu {
         opacity: 1;
         transform: translate(0, 0);
         pointer-events: initial;
      }
   }

   @media (min-width: 600px) {
      button {
         display: none;
      }
   }
</style>
