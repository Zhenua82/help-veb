// карта:
var myMap;
ymaps.ready(init);
function init () {
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center:[54.752661, 56.002053],
        zoom:16,
        type: 'yandex#map'//'yandex#satellite' или 'yandex#hybrid'
    });
  // Создаем метку с помощью вспомогательного класса.
  myPlacemark1 = new ymaps.Placemark([54.752799, 56.001853], {
      hintContent: 'Рога и копыта'
  }, {
      iconImageHref: 'maps.png',
      // Размеры метки.
      iconImageSize: [42, 32],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -25]
  });
// Добавляем все метки на карту.
myMap.geoObjects
  .add(myPlacemark1);
// Для добавления элемента управления на карту
    // используется поле map.controls.
   myMap.controls.add("smallZoomControl", { left: 5, top: 0 });
   // myMap.controls.add('miniMap', { left: 65, top: 60});
   myMap.controls.add(new ymaps.control.MiniMap({type:'yandex#hybrid'},{zoomOffset: 5}));
   myMap.controls.add('typeSelector');
   myMap.controls.add('mapTools', { left: 35, top: 5 });
   myMap.controls.add('searchControl', { left: 250, top: 5 });
   myMap.controls.add('scaleLine');
};