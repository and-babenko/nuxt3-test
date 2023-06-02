<template lang="">
  <div>
    <button
      v-if="disabled"
      class="p-4 rounded-2xl bg-white/[.15] bg-white/[.05] text-[white/[.05]] cursor-default relative filter brightness-[0.40]"
    >
      <slot />
    </button>

    <button
      v-else
      class="p-4 rounded-2xl bg-white/[.15] cursor-pointer hover:bg-white/[.10] active:bg-white/[.05]"
      @click="emit('onBtnClick')"
    >
      <slot />
    </button>
  </div>
</template>

<script setup>
const { disabled } = defineProps(["disabled"]);

const emit = defineEmits(["onBtnClick"]);
</script>

<style scoped></style>
