<script setup>
   import { ref, reactive } from 'vue';
   import { RouterLink, RouterView } from 'vue-router';
   import HelloWorld from './components/HelloWorld.vue';
   import ProjectLogo from './components/graphics/ProjectLogo.vue';

   const exampleData = [
      {
         id: 'a',
         name: 'Andy',
      },
      {
         id: 'b',
         name: 'Burooj',
      },
      {
         id: 'j',
         name: 'Jesse',
      },
      {
         id: 'n',
         name: 'Ned',
      },
   ];

   // ref version
   const liveDataRef = ref(exampleData);

   function removeItem(id) {
      liveDataRef.value = liveDataRef.value.filter((item) => item.id !== id);
   }

   // reactive object version
   const liveData = reactive({
      list: exampleData,
   });

   function removeOtherItem(id) {
      liveData.list = liveData.list.filter((item) => item.id !== id);
   }
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
      <ul>
         <li>Ref</li>
         <li v-for="item in liveDataRef" :key="item.name">
            {{ item.name }}
            <button @click="removeItem(item.id)">x</button>
         </li>
      </ul>

      <ul>
         <li>Reactive object</li>
         <li v-for="item in liveData.list" :key="item.id">
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
