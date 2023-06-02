<template>
  <header class="py-6 flex items-center relative z-10">
    <div class="flex items-end flex-wrap gap-4 sm:gap-8">
      <div class="cursor-pointer">
        <NuxtLink to="/">
          <img src="~/assets/imgs/header-logo.svg" alt="kadena-logo" />
        </NuxtLink>
      </div>
      <div class="flex gap-2">
        <div class="flex flex-row items-center gap-1">
          <img src="~/assets/imgs/icon-kda-price.svg" alt="kadena-price" />
          <span class="inter text-white text-sm font-semibold">KDA</span>
        </div>
        <div class="inter font-regular flex items-center gap-1">
          <span class="text-white">${{ currentPrice }}</span>
          <span class="text-[#00FF85]"> ({{ priceChangeValue }})</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const currentPrice = ref(23.8);
const priceChangeValue = ref("+1.85%"); // TODO Пока оставлю строкой, в случае чего подправлю. Также можно забиндить стиль в зависимости от того, положительное число или отрицательное.
</script>
