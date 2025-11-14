import { useGetProductsQuery } from "../slices/productApiSlice";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
const HomeScreen = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (<h2>Loading...</h2>) : error ? (<h3>{error?.data?.message || error.error}</h3>) : (
        <>
        <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      </>
      )}
    </>
  );
};

export default HomeScreen;
