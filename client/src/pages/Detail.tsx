// custom hook
import useProductDetal from '../hooks/useProductDetail';

// custom components
import {
  Layout,
  Box,
  Container,
  Breadcrumb,
  ProductDetail,
  Loader,
  ErrorMessage
} from '../components';

// main component definition
const Detail = () => {
  const {
    isLoading,
    product,
    categories,
    error
  } = useProductDetal();

  // render
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

  return (
    <Layout>
      <Container>
        <Breadcrumb categories={ categories} />
        <Box>
          <ProductDetail item={ product } />
        </Box>
      </Container>
    </Layout>
  );
};

export default Detail;