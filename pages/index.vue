<template>
  <main class="relative">
    <div>
      <div class="lamp bg-[#0d37a4] top-[-400px] left-[-400px]"></div>
      <div class="lamp bg-[#ec967a40] bottom-[-250px] left-[-300px]"></div>
      <div class="lamp bg-[#ff009940] top-[-350px] right-[200px]"></div>
      <div class="absolute top-[-300px] left-[-400px]">
        <img src="~/assets/imgs/blast-dots2.svg" alt="dots" />
      </div>
    </div>
    <NftPageHeader class="relative" />
    <div class="mt-10 bg-white bg-opacity-5 rounded-2xl z-10">
      <div class="p-6 border-b border-solid border-[#353945]">
        <span class="text-white inter font-normal text-sm">NFTs</span>
      </div>
      <section
        class="px-6 pt-6 pb-8 grid gap-6 nftPageLayout justify-items-center"
      >
        <NftPageCard
          class="max-w-[200px]"
          v-for="(card, index) in cardsList"
          :key="card.id"
          :card="card"
          @onCardClick="onCardClickHandler(index)"
        />
      </section>
      <NftPageModal
        v-if="isModalVisible"
        :selectedCard="selectedCard"
        :switchLockStatus="switchLockStatus"
        @onClosePopup="onClosePopupHandler"
        @onPrevClick="onPrevClickHanlder"
        @onNextClick="onNextClickHanlder"
      />
    </div>
  </main>
</template>
<script setup>
const { data: cardsList } = await useFetch("/api/imageArr");

const isModalVisible = ref(false); // Показ и скрытие модалки
const selectedCard = ref(null); // Карточка в модальное окно
const selectedCardIndex = ref(null); // Индекс выбранной карточки, для управления выбранной в данный момент через индекс (для клавиш перелистывания)
const switchLockStatus = ref(null); //both, first, last. Блокировка клавиш в модалке

const onClosePopupHandler = () => {
  isModalVisible.value = false;
  selectedCard.value = null;
  selectedCardIndex.value = null;
  switchLockStatus.value = null;
};

const onPrevClickHanlder = () => {
  selectedCardIndex.value -= 1;
  selectedCard.value = cardsList.value[selectedCardIndex.value];
};

const onNextClickHanlder = () => {
  selectedCardIndex.value += 1;
  selectedCard.value = cardsList.value[selectedCardIndex.value];
};

const onCardClickHandler = (index) => {
  selectedCardIndex.value = index;
  selectedCard.value = cardsList.value[index];
  isModalVisible.value = true;
};

// Блокировка скролла
watch(isModalVisible, () => {
  isModalVisible.value
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "");
});

// Проверка на индекс открытого в попапе элемента для блокировки клавиш перелистывания. Выглядит не очень, но всё лучше if-else...
watch(selectedCardIndex, () => {
  switch (true) {
    case selectedCardIndex.value === 0 &&
      selectedCardIndex.value === cardsList.value.length - 1:
      switchLockStatus.value = "both";
      break;

    case selectedCardIndex.value === 0:
      switchLockStatus.value = "first";
      break;

    case selectedCardIndex.value === cardsList.value.length - 1:
      switchLockStatus.value = "last";
      break;

    default:
      switchLockStatus.value = null;
      break;
  }
});
</script>

<style scoped>
.nftPageLayout {
  grid-template-columns: repeat(auto-fit, minmax(172px, 1fr));
}
/* Вынес для переиспользования. В случае чего можно вынести на уровень tailwind'а, если такие эффекты будут встречаться повторно */
.lamp {
  width: 488px;
  height: 488px;
  position: absolute;
  z-index: 0;
  filter: blur(165px);
}
</style>
