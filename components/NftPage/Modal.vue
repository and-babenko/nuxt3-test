<template>
  <div
    class="popup fixed inset-0 z-30 bg-[#0D0D0D]/[.9] flex justify-center items-center"
  >
    <div class="flex flex-col gap-5 p-24">
      <GrayBtn
        class="absolute right-[45px] top-[45px] backdrop-blur-md"
        @onBtnClick="this.$emit('onClosePopup')"
      >
        <img src="~/assets/imgs/icon-cross.svg" alt="icon-left" />
      </GrayBtn>
      <!-- Высота  -->
      <div class="text-white flex flex-col gap-3">
        <div class="flex justify-between gap-3">
          <h2 class="inter font-semibold text-2xl md:text-[32px] leading-10">
            Kor Blockchain Badge
          </h2>
          <p class="inter font-medium text-2xl md:text-[32px] leading-10">
            #{{ selectedCard.id }}
          </p>
        </div>
        <ul class="flex gap-6">
          <li class="flex gap-2">
            <img src="~/assets/imgs/icon-profile.svg" alt="onwer-logo" />
            <NuxtLink
              to="/"
              class="cursor-pointer underline hover:text-slate-400 active:text-slate-500"
              >Owner</NuxtLink
            >
          </li>
          <li class="flex gap-2">
            <img
              src="~/assets/imgs/icon-collection.svg"
              alt="collection-logo"
            />
            <NuxtLink
              to="/"
              class="cursor-pointer underline hover:text-slate-400 active:text-slate-500"
              >Collection</NuxtLink
            >
          </li>
          <li class="flex gap-2">
            <img src="~/assets/imgs/icon-share.svg" alt="share-logo" />
            <span
              @click="onCopyUrlHandler"
              class="cursor-pointer underline hover:text-slate-400 active:text-slate-500"
              >Share</span
            >
          </li>
        </ul>
      </div>
      <div class="flex flex-col items-center gap-4">
        <div class="flex justify-center items-center gap-6 relative">
          <GrayBtn
            :disabled="
              switchLockStatus === 'first' || switchLockStatus === 'both'
            "
            class="backdrop-blur-md absolute bottom-50 left-[-80px]"
            @onBtnClick="this.$emit('onPrevClick')"
          >
            <img src="~/assets/imgs/icon-left.svg" alt="icon-left" />
          </GrayBtn>

          <div
            class="relative max-w-[512px] max-h-[512px] flex justify-center items-center"
          >
            <!-- Мне не нравится такое решение, но лучшего я пока ничего не придумал.  -->
            <img
              class="opacity-[0.48] blur-[100px] absolute inset-0"
              :src="selectedCard.imageUrl"
              alt="Kor Blockchain Badge"
              @error="handleImageError"
            />
            <img
              class="relative z-10 max-w-full max-h-full h-auto"
              :src="selectedCard.imageUrl"
              alt="Kor Blockchain Badge"
              @error="handleImageError"
            />
          </div>
          <GrayBtn
            :disabled="
              switchLockStatus === 'last' || switchLockStatus === 'both'
            "
            class="backdrop-blur-md absolute top-50 right-[-80px]"
            @onBtnClick="this.$emit('onNextClick')"
          >
            <img
              src="~/assets/imgs/icon-left.svg"
              alt="icon-right"
              class="rotate-180"
            />
          </GrayBtn>
        </div>

        <GrayBtn class="backdrop-blur-md" @onBtnClick="onOpenShopHandler">
          <span class="inter font-bold text-sm text-white"
            >Open Marketplace</span
          >
        </GrayBtn>
      </div>
    </div>
  </div>
</template>

<script setup>
const { selectedCard, switchLockStatus } = defineProps([
  "selectedCard",
  "switchLockStatus",
]);

const onCopyUrlHandler = () => {
  // По хорошему тут добавить бы попап...
  const { href } = useRequestURL();
  navigator.clipboard.writeText(href);
};

const onOpenShopHandler = () => {
  console.log("Go To Shop!");
};

function handleImageError(evt) {
  console.log("Error");
  evt.target.src =
    "https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-1920.jpg?w=2000";
}
</script>
