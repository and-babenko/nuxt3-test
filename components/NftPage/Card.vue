<template>
  <article class="flex flex-col gap-4 w-full relative">
    <div class="w-full h-[172px] rounded-2xl flex justify-center items-center">
      <img
        class="cursor-pointer max-w-full max-h-full h-auto"
        :src="card.imageUrl"
        :alt="`nft image ${card.id}`"
        @click="this.$emit('onCardClick', card.id)"
      />
    </div>
    <div class="flex flex-col gap-1">
      <p class="inter text-sm text-white font-medium opacity-[.64]">
        Kor Blockchain OG Badge
      </p>
      <h3 class="inter text-lg text-white font-medium">#{{ card.id }}</h3>
    </div>
  </article>
</template>

<script setup>
const { card } = defineProps(["card"]);
</script>
