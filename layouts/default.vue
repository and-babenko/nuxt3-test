<template>
  <div
    class="w-full bg-black pb-[95px] overflow-hidden min-h-screen px-8 xl:px-[120px]"
  >
    <NuxtLoadingIndicator />

    <DefaultLayoutHeader />
    <slot />
  </div>
</template>
