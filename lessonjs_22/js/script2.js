class HouseParent {
  constructor(linkImg, updateInterval, min, max) {
    this.coordinatX = this.getRandomNum();
    this.coordinatY = this.getRandomNum();
    this.min = min;
    this.max = max;
    this.linkImg = linkImg;
    this.updateInterval = updateInterval;
    this.elem = this.createElementHTML();
  }
  getRandomNum() {
    return this.min + Math.floor(Math.random() * (this.max - this.min + 1));
  }
  createCordin() {}

  createElementHTML() {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", this.linkImg);
    div.append(img);
    div.style.position = "absolute";
    return div;
  }
  render(selectorTag) {
    document.querySelector(selectorTag).append(this.elem);
  }
  scaleImg() {
    setInterval(() => {
      this.elem.style.transform = `scale(${this.getRandomNum()})`; // ПОЯСНIТЬ БУДЬЛАСКА не могу разобраться почему если я тут поставлю  this.coordinatX не считает
    }, this.updateInterval * 1000);
  }
}
class Dog extends HouseParent {
  constructor(linkImg, updateInterval, min, max) {
    super(linkImg, updateInterval, min, max);
  }
  moveHorizontal() {
    setInterval(() => {
      this.elem.style.transform = `translateX(${this.getRandomNum()}px)`;
    }, this.updateInterval * 1000);
  }
}
class Bird extends HouseParent {
  constructor(linkImg, updateInterval, min, max) {
    super(linkImg, updateInterval, min, max);
  }
  moveArbitrary() {
    setInterval(() => {
      this.elem.style.transform = `translate(${this.getRandomNum()}px, ${this.getRandomNum()}px)`;
    }, this.updateInterval * 1000);
  }
}
/*let hous = new HouseParent("../img/banana4.png", 2, 0.5, 2);
hous.render(".lesson");
hous.scaleImg();

let dog = new Dog("../img/cherry1.png", 2, 5, 500);
dog.render(".lesson");
dog.moveHorizontal();

let bird = new Bird("../img/lemon3.png", 2, 5, 500);
bird.render(".lesson");
bird.moveArbitrary();*/
