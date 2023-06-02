<template>
  <header class="flex justify-between items-center mt-[18px] flex-wrap gap-4">
    <div class="flex gap-8 items-center">
      <GrayBtn>
        <img src="~/assets/imgs/icon-left.svg" alt="icon-left" />
      </GrayBtn>
      <h1 class="inter font-semibold text-white text-[32px] text-center">
        {{ sectionName }}
      </h1>
    </div>
    <div class="h-[96px] w-[260px] bg-[#FC8AC2] rounded-2xl"></div>
  </header>
</template>
<script setup>
// На случай если это пропса и что-то вроде названия NFT-коллекции, объявлю динамически
const sectionName = ref("Kadena Bears");
</script>
<style></style>
