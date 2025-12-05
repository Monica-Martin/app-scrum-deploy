export class Product {
  private _id: number;
  private _name: string;
  private _image: string;
  private _price: number;
  private _available: boolean;

  constructor(id: number, name: string, image: string, price: number, available: boolean) {
    this._id = id;
    this._name = name;
    this._image = image;
    this._price = price;
    this._available = available;
  }

  // Getters
  get id(): number { return this._id; }
  get name(): string { return this._name; }
  get image(): string { return this._image; }
  get price(): number { return this._price; }
  get available(): boolean { return this._available; }

  // Setters
  set id(v: number) { this._id = v; }
  set name(v: string) { this._name = v; }
  set image(v: string) { this._image = v; }
  set price(v: number) { this._price = v; }
  set available(v: boolean) { this._available = v; }
}
