export default class Card {
  constructor(data, template, page) {
    this.data = data;
    this.template = template;
    this.page = page;
    this.setData = this.setData.bind(this);
    this._likeHandler = this._likeHandler.bind(this);
    this._soldHandler = this._soldHandler.bind(this);

  }

  setData() {
    const title = this.template.querySelector(".card__title");
    const picture = this.template.querySelector(".card__image");
    const color = this.template.querySelector(".card__color");
    const age = this.template.querySelector(".card__age");
    const paws = this.template.querySelector(".card__paws");
    const price = this.template.querySelector(".card__price");
    const sale = this.template.querySelector(".card__sale");

    title.textContent = this.data.title;
    picture.src = this.data.picture;
    color.textContent = this.data.color;
    age.textContent = this.data.age;
    paws.textContent = this.data.paws;
    price.textContent = this.data.price;
    if (this.data.isSale !== false) {
      sale.classList.add("card__sale_on");
      sale.textContent = this.data.isSale;
    } else {
      sale.classList.remove("card__sale_on");
    }
  }

  createCard() {
    this.page
      .querySelector(".search-result__cards")
      .append(
        this.page.getElementById("card-template").content.cloneNode(true),
      );
  }

  cardLike() {
    this.page.querySelectorAll(".card__like").forEach(element => {
      element.addEventListener("click", () => this._likeHandler(element));
    });
  }

  _likeHandler(element) {
    element.classList.add("card__like_active");
    alert("Добавлено в избранное");
  }

  sold() {
    this.page.querySelectorAll(".button__card").forEach(element => {
      element.addEventListener("click", () => this._soldHandler(element));
    });
  }

  _soldHandler(element) {
    element.classList.add("button__card_active");
    element.textContent = "Продано";
  }
}