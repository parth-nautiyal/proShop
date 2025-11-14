import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Col, Row, ListGroup } from "react-bootstrap";
import Rating from "../components/Rating";
import { Card } from "react-bootstrap";
import { useGetProductDetailsQuery } from "../slices/productApiSlice";


const ProductScreen = () => {
  const { id: productId } = useParams();
  const { data: product, error, isLoading } = useGetProductDetailsQuery(productId);

  return (
    <>
    {isLoading ? (<h2>Loading...</h2>) : error ? (<h3>{error?.data?.message || error.error}</h3>) : (
      <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <img src={product.image} alt={product.name} className="img-fluid" />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <button
                  className="btn btn-secondary btn-block"
                  disabled={product.countInStock === 0}
                >
                  Add to Cart
                </button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>)}
    </>
  );
};

export default ProductScreen;
