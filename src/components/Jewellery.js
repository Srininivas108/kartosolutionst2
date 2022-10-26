import React from "react";
import Header from "./header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Store } from "../Store";
import { useContext } from 'react';
import { toast } from 'react-toastify';

function Jewellery() {
  const product = {
    title: "Ring",
    image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSS0yNPE4G18ZscIGkxMEVDA4fxs_BJhGv-unxAaPA3QcPeSkoeertZQRF_2uAeDrl1g0-JhFBcLoElIP3xEBG0EiN0V8nTqfgizuFj-u1CBC5SQs5nAojIb7Rs&usqp=CAY',
    price: '₹15,000'
  };

  const { state, dispatch: ctxDispatch } = useContext(Store);
  console.log(state.jewellery.jewelleryItems)


  const addToCartHandler = () => {
    ctxDispatch({
      type: "ADD_TO_JEWELLERYCART",
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
          <Card.Title>{product.title} </Card.Title>
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

export default Jewellery;
