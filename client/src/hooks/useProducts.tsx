// modules
import {
  useMemo,
  useEffect,
  useState
} from 'react';

import {
  useSearchParams
} from 'react-router-dom';

// interfaces
import {
  IProduct
} from '../common/interfaces';

// services
import {
  fetchSearch
} from '../services';

// main hook definition
const useProducts = () => {
  // hooks
  const [ query ] = useSearchParams();

  // states
  const [ isLoading, setIsLoading ] = useState<Boolean>(true);
  const [ recordset, setRecordset ] = useState<IProduct[]>([]);
  const [ categories, setCategories ] = useState<String[]>([]);
  const [ error, setError ] = useState<string | null>(null);

  // memo state query
  const search: string | null = useMemo(() => {
    return query.get('search');
  }, [ query ]);

  // cycle
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchSearch(search);
  
        setRecordset(response.items);
        setCategories(response.categories);
      } catch(ex: any) {
        setError(ex.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [ search ]);

  return {
    isLoading,
    recordset,
    categories,
    error
  };
};

export default useProducts;