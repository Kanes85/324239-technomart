// Модальное окно обратной связи
var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".feedback-window");
var close = document.querySelector(".modal-close");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("feedback-window-show");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("feedback-window-show");
});

// Модальное окно карты
var mapLink = document.querySelector(".contacts img");
var mapPopup = document.querySelector(".map-window");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-window-show");
});

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-window-show");
});

// Модальное окно покупки

var buy = document.querySelector(".btn-buy");
var buyPopup = document.querySelector(".modal-add-goods");
var buyClose = buyPopup.querySelector(".modal-close");
var resume = buyPopup.querySelector(".btn-continue");

buy.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.add("modal-add-show");
});

buyClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-add-show");
});

resume.addEventListener("click", function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove("modal-add-show");
});
