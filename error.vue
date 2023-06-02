<template>
  <div
    class="flex flex-col w-1/3 m-auto justify-center items-center gap-8 p-10 shadow-xl"
  >
    <p class="font-bold text-7xl">{{ error.statusCode }}</p>
    <p class="text-6xl">Ooops.</p>
    <p class="">{{ error.message }}</p>
    <NuxtLink
      to="/"
      class="cursor-pointer shadow-md bg-gray-100 p-4 rounded-sm hover:bg-gray-200"
      >Go to home page</NuxtLink
    >
  </div>
</template>
<script setup>
defineProps(["error"]);
</script>
<style lang=""></style>
