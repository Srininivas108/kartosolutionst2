import React from "react";
import Header from "./header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Store } from "../Store";
import { useContext } from 'react';
import { toast } from 'react-toastify';

function Womensclothes() {
  const product = {
    title: "Women Clothes",
    image:"https://media.istockphoto.com/photos/women-summer-dresses-on-display-at-camden-market-picture-id935032524?k=20&m=935032524&s=612x612&w=0&h=ueJ5ZicI3_LMyywW-Hnx92im0V8onGJCAQXDWLaRdz0=",
    price: '₹5,000'
  };

  const { state, dispatch: ctxDispatch } = useContext(Store);
  console.log(state.womensclothes.womensclothesItems)

  const addToCartHandler = () => {
    ctxDispatch({
      type: "ADD_TO_WOMENSCLOTHESCART",
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

export default Womensclothes;
