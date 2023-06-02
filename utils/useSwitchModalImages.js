export function useSwitchModalImages() {
  const onPrevClickHanlder = () => {
    selectedCardIndex.value -= 1;
    selectedCard.value = cardsList.value[selectedCardIndex.value];
  };

  const onNextClickHanlder = () => {
    selectedCardIndex.value += 1;
    selectedCard.value = cardsList.value[selectedCardIndex.value];
  };

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
}
