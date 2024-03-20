export class Checkout {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public paymentMethod: string,
    public cardName: string,
    public cardNumber: string,
    public cardExpiration: string,
    public cardCvv: string
  ) {}
}

