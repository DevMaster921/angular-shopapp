export class Product {
  constructor(
    public type: string,
    public id: number,
    public name: string,
    public description: string,
    public imagePath: string,
    public imagePathSm: string,
    public price: number,
    public qty: number = 1
  ) { }
}