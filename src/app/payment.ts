export class Payment {

  private _payDate: string;
  private _itemId: number;
  private _name: string;
  private _unitPrice: number;
  private _quantity: number;
  private _amount: number;

  constructor(payDate: string, itemId: number, name: string, unitPrice: number, quantity: number, amount: number) {
    this._payDate = payDate;
    this._itemId = itemId;
    this._name = name;
    this._unitPrice = unitPrice;
    this._quantity = quantity;
    this._amount = amount;
  }

  public getPayDate(): string {
    return this._payDate;
  }

  public setPayDate(value: string) {
    this._payDate = value;
  }

  public getItemId(): number {
    return this._itemId;
  }

  public setItemId(value: number) {
    this._itemId = value;
  }

  public getName(): string {
    return this._name;
  }

  public setName(value: string) {
    this._name = value;
  }

  public getUnitPrice(): number {
    return this._unitPrice;
  }

  public setUnitPrice(value: number) {
    this._unitPrice = value;
  }

  public getQuantity(): number {
    return this._quantity;
  }

  public setQuantity(value: number) {
    this._quantity = value;
  }

  public getAmount(): number {
    return this._amount;
  }

  public setAmount(value: number) {
    this._amount = value;
  }
}
