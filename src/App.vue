<script setup>
   import { ref, reactive, computed } from 'vue';
   import { RouterLink, RouterView } from 'vue-router';
   import HelloWorld from './components/HelloWorld.vue';
   import ProjectLogo from './components/graphics/ProjectLogo.vue';
   import { useNamesStore } from '@/stores/names.js';

   const names = useNamesStore();

   function removeOtherItem(id) {
      names.list = names.list.filter((item) => item.id !== id);
   }

   const searchString = ref('');

   const filtered = computed(function () {
      return names.list.filter(function (item) {
         return item.name.toLowerCase().includes(searchString.value.toLowerCase());
      });
   });
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
                  <RouterLink to="/">Home</RouterLink>
               </li>

               <li>
                  <RouterLink to="/about">About</RouterLink>
               </li>
            </ul>
         </nav>
      </div>
   </header>

   <main>
      <label for="">Search</label>

      <input type="text" v-model="searchString" />

      <h2>Results for {{ searchString }}</h2>

      <ul style="border: 1px solid red">
         <li><u>Filtered results</u></li>
         <li v-for="item in filtered" :key="item.name">
            {{ item.name }}
         </li>
      </ul>

      <ul>
         <li><u>Reactive object</u></li>
         <li v-for="item in names.list" :key="item.id">
            {{ item.name }}
            <button @click="removeOtherItem(item.id)">x</button>
         </li>
      </ul>
   </main>

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
