import "../style.css";
import cards from "./data";
import Card from "./Card";
import CardList from "./CardList";

(() => {
  const page = document;
  const cardsArray = cards;

  const link = page.querySelector(".search-result__up");
  const footerSubscribe = page.querySelector(".footer__subscribe");

  const card = new Card("", "", page);

  // отрисовка карточек
  const cardList = new CardList(
    page,
    (element, card) => new Card(element, card, page),
  );
  cardList.showCards(cardsArray);

  // лайк на карточке
  card.cardLike();

  // сортировка по цене
  cardList.sortByPrice();

  // сортировка по возрасту
  cardList.sortByAge();

  // клик по "купить"
  card.sold();

  // прокрутка наверх
  function scroll() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scroll);
      window.scrollTo(0, c - c / 10);
    }
  }

  //  клик по "наверх"
  link.addEventListener("click", () => scroll())

  // убрать/поставить галочку "подписаться на новости"
  function noSubscribe(e) {
    e.preventDefault();
    footerSubscribe.classList.toggle("footer__subscribe_active");
  }
  // клик по "подписаться на новости" - убрать галочку
  footerSubscribe.addEventListener("click", (e) => noSubscribe(e));

})();