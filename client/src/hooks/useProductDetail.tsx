// modules
import {
  useState,
  useEffect
} from 'react';

import {
  useParams
} from 'react-router-dom';

// interfaces
import {
  IProductDetail
} from '../common/interfaces';

// services
import {
  fetchProduct
} from '../services';

// main hook definition
const useProductDetal = () => {
  // state
  const [ isLoading, setIsLoading ] = useState<Boolean>(true);
  const [ product, setProduct ] = useState<IProductDetail | null>(null);
  const [ categories, setCategories ] = useState<String[]>([]);
  const [ error, setError ] = useState<String | null>(null);

  // params
  const {
    id = ''
  } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const product = await fetchProduct(id);
  
        setProduct(product.item);
        setCategories(product.categories);
      } catch(ex: any) {
        setError(ex.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    product,
    categories,
    error
  };
};

export default useProductDetal;