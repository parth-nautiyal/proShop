import express from 'express';
import dotenv from 'dotenv';  
dotenv.config();
import products from './data/products.js';
const port = process.env.PORT || 3001;


const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
}
);
app.get('/api/products', (req, res) => {
  res.json(products);
}
);
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send({ message: 'Product not found' });
  }
}
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
