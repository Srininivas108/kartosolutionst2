import React from "react";
import Header from "./header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Store } from "../Store";
import { useContext } from 'react';
import { toast } from 'react-toastify';

function Mensclothes() {
  const product = {
    title: "Blazers",
    image:'https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?k=20&m=887360960&s=612x612&w=0&h=N0k2yX9noV6kNgpmKbcSXaLOl2x8Mbt_lyppAmfhNcA=',
    price: '₹10,000'
  };

  const { state, dispatch: ctxDispatch } = useContext(Store);
  console.log(state.mensclothes.mensclothesItems)

  const addToCartHandler = () => {
    ctxDispatch({
      type: "ADD_TO_MENSCLOTHESCART",
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

export default Mensclothes;
