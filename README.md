# Вопросы к заданию

Тут вопросы, которые я бы задал, будь это рабочий проект, предположительные ответы и какая-то аргументация этих ответов.

1. Каким должен быть loader? Что показывать во время состояния загрузки? Спиннер, скелетон? -- Спиннер.
2. Как реализовывать подгрузку большого количества карточек? Могу добавить пагинацию или бесконечную ленту через intersection-элемент внизу. -- Пагинация, сделай функциональный набросок (это быстрее, так не придется оптимизировать отображение большого количества DOM-элементов, на написание скрипта по удалению тех карточек, что вне области видимости ушло бы больше времени).
3. Максимальное количество элементов на одной странице статично или динамично и высчитывается, к примеру, из квери? -- Статично, всегда 12, все что больше -- на другую страницу.
4. Нужна мобильная разметка? -- Смены сетки пока будет достаточно.
5. Эффекты хувера при наведении на карточку? -- Только курсор.
6. Если какая-то картинка будет недоступна, что показывать? -- Сделай какую-то заглушку.

# Вопросы к проекту

1. 404 страница и прочие ошибки -- Просто набросок (на проекте она уже точно должна быть).
2. fetch или axios? -- Просто useFetch.
3. Нужна стора? -- Нет (компонент простой, хотя на проекте наверняка есть Vuex и было бы здорово показать что я умею им пользоваться, подумал я пока не узнал что в Nuxt3 вместо него Pinia :( Попробую после этого тестового, аж интересно).
4. Метаданные на странице? -- Сделай заглушку, потом заполним (наверняка они приходят потом от ребят, которые настраивают СЕО).
5. Composition API или классические Vue-компоненты? -- Composition везде где можно (не знаю, является ли такой подход стандартом разработки на Vue3, если логика компонента не будет переиспользоваться то наверное можно обойтись и без этого. Но написать без CompApi я всегда успею, да и попробовать интересно :))
6. TS? -- Отключи (как я помню он не на всех проектах используется, а тратить время на то чтобы "подружить" его с Nuxt буду позже).
7. Тесты? -- Не надо (не знаю как подружить Jest и Nuxt (да и Vue честно говоря тоже, пока не разбирался))

# Итого

1. Серверный рут для получения массива. Что-то новое, а получить их из public-директории, вернуть из промиса или с условного MockApi всегда успею. Даже не смотря на то что это не какие-то приватные данные.
2. Абзац текста в попапе вместо Kor "Blockchain Badge" может сломать разметку попапа.
3. Как я понял, в Nuxt вместо лоадера можно использовать <NuxtLoadingIndicator>.
4. Что я не понял, так как обрабатывать ошибки из useFetch. Try-catch не работает, поищу ответ в доке.
5. Можно было бы декомпозировать логику перелистывания в отдельный хук. Но код основной компоненты достаточно небольшой, и я не уверен что эта логика будет переиспользоваться где-то ещё в проекте, так что решил оставить эту логику приватной для родителя модального окна.
6. Касательно Ui. Кнопку я пока бросил просто в компоненты, процедура регистрации Ui-элементов во Vue меня несколько смутила. Карточку я сделал компонентом, хотя если бы она часто использовалась на проекте то можно было бы сделать компонент-враппер через именованные слоты и прокидывать из внешнего контектса данные, но не уверен что сейчас это нужно.
7. Прямо сейчас занимаюсь пагинацией. Надеюсь успею отправить коммит до того, как вы это прочтете и никто об этом не узнает :)
