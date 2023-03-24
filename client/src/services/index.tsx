// modules
import axios from 'axios';
import { Exception } from 'sass';

// interfaces
import {
  IProduct,
  IProductDetail
} from '../common/interfaces';

// types declarations
type SearchFn = (query: string | null) => Promise<{
  items: IProduct[],
  categories: string[]
}>;

type DetailFn = (query: string) => Promise<{
  item: IProductDetail,
  categories: string[]
}>;

// services declarations
export const fetchSearch: SearchFn = async (query) => {
  try {
    const {
      data: response
    } = await axios.get(`/api/items?query=${ query }`);
  
    return response.data;
  } catch (ex: any) {
    console.log('{ex}', ex);
    throw new Error(ex.message);
  }
};

export const fetchProduct: DetailFn = async (id) => {
  const {
    data: response
  } = await axios.get(`/api/item/${ id }`);

  return response.data;
};