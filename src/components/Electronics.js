import React from "react";
import Header from "./header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Store } from "../Store";
import { useContext } from 'react';
import { toast } from 'react-toastify';

function Electronics() {
  const product = {
    title: "Laptop",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTprSfc7v2ZmJ4IB0ZI6NZ5eDoFgG7pFDaCo_a9bZvGfC-919rg-AdKUDdzpWib784SGzU&usqp=CAU",
    price: '₹45,000'
  };

  const { state, dispatch: ctxDispatch } = useContext(Store);
  console.log(state.electronics.electronicsItems)


  const addToCartHandler = () => {
    ctxDispatch({
      type: "ADD_TO_ELECTRONICSCART",
      payload: product,
    });
    toast.success('You have successfully added the product to the cart!');

  };

  return (
    <>
      <Header />
      <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={product.image}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.price}
          </Card.Text>
          <Button variant="primary" onClick={addToCartHandler}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
      </div>
    </>
  );
}

export default Electronics;
