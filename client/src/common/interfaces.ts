export interface IProduct {
  id: string,
  title: string,
  price: {
    amount: number,
    currency: string,
    decimals: number,
    symbol: string
  },
  picture: string,
  condition: string,
  free_shipping: boolean,
  location: string
};

export interface IProductDetail extends Omit<IProduct, 'location'> {
  sold_quantity: number,
  description: string
};