import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'
const Product = ({product})=>{
    return(
        <Card style={{height : '400px', overflow:'auto'}} className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top'/>
            </Link>
            <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'>
                <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as='h3'>
                ${product.price}
            </Card.Text>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </Card.Body>
        </Card>
    )
}
export default Product