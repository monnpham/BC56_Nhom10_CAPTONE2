export default class ProductClass {
  constructor(
    id,
    name,
    type,
    price,
    backCamera,
    frontCamera,
    img,
    description
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.backCamera = backCamera;
    this.frontCamera = frontCamera;
    this.img = img;
    this.description = description;
  }
}
