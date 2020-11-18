export default class CardList {
  constructor(page, Card) {
    this.page = page;
    this.Card = Card;
    this.addCard = this.addCard.bind(this);
    this.temp = this.page.getElementById("card-template").content;
    this.cardTemp = this.temp.querySelector(".card");
    this._sortHandler = this._sortHandler.bind(this);
  }


  showCards(array) {
    array.forEach((element) => {
      this.addCard(element);
    });
  }

  addCard(element) {
    this.card = this.Card(element, this.cardTemp);
    this.card.setData();
    this.card.createCard();
  }

  sortByPrice() {
    const price = ".card__price";
    this.page.querySelector(".search-result__sorted-by-price").addEventListener("click", () => this._sortHandler(price))
  }

  sortByAge() {
    const age = ".card__age";
    this.page.querySelector(".search-result__sorted-by-age").addEventListener("click", () => this._sortHandler(age))
  }

  _sortHandler(element) {
    const cards = this.page.querySelectorAll(".card");

    const sorted = [...cards].sort((a, b) => {
      const elA = a.querySelector(element).textContent;
      const elB = b.querySelector(element).textContent;
      const getPrice = (el) => parseInt(el.replace(/ /g, ""));
      return getPrice(elA) - getPrice(elB);
    })
    const cantainer = this.page.querySelector(".search-result__cards");
    sorted.forEach(el => cantainer.appendChild(el));

  }
}