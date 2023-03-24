// custom components
import {
  Layout,
  Box,
  Container,
  Breadcrumb,
  ItemList,
  Loader,
  ErrorMessage
} from '../components';

import useProducts from '../hooks/useProducts';

// main component definition
const Search = () => {
  const {
    isLoading,
    recordset,
    categories,
    error
  } = useProducts();

  // render loading state
  if (!!isLoading) {
    return (
      <Layout>
        <Container>
          <Box>
            <Loader />
          </Box>
        </Container>
      </Layout>
    );
  }

  // render error state
  if (!!error) {
    return (
      <Layout>
        <Container>
          <Box>
            <ErrorMessage message={ error } />
          </Box>
        </Container>
      </Layout>
    );
    
  }

  // render
  return (
    <Layout>
      <Container>
        <Breadcrumb categories={ categories } />

          <p>{error}</p>
        <Box>
          { recordset.map((record) => {
            return (
              <ItemList
                key={ record.id }
                item={ record }
              />
            );
          }) }
        </Box>
      </Container>
    </Layout>
  );
};

export default Search;