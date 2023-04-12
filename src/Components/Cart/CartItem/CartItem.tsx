import { Fragment } from "react";
import ProductList from "../../ProductList/ProductList";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AddProduct, RemoveProduct} from '../../../store/actions/cart';
import {Product} from '../../../models/Product';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'

type Props = {
  title: string,
  type: string,
  description: string,
  image: string,
  height: number,
  width: number,
  price: number,
  rating: number,
  id: string,
  amount: number
};

const CartItem: React.FC<Props> = ({image, title, type, description, height, width, price, rating, id, amount}) => {

  const currentProduct : Product = {
    title: title, 
    filename: image, 
    type: type, 
    description: description, 
    height: height,
    width: width,
    price: price,
    rating: rating,
    id: id
  };
  const dispatch :ThunkDispatch<{}, {}, any> = useDispatch();

  return (
    <Card style={{ width: '900px', height: '180px', margin: '10px', display: 'flex', flexDirection: 'row'}}>
        <div style={{height: '100%', width: '20%'}}>
        <Card.Img variant="top" src = {image} style={{height: '100%', width: '100%'}}/>
        </div>
        <div style={{height: '100%', width: '80%'}} >
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Price = {price}</Card.Text>
            <Card.Text>Quantity: 
              <Button variant="primary" style={{backgroundColor: 'black', color: 'white'}} onClick={(e) => {
                  e.preventDefault();
                  dispatch(AddProduct(currentProduct));
              }}>
              +
              </Button> {amount}
              <Button variant="primary" style={{backgroundColor: 'black', color: 'white'}} onClick={(e) => {
                e.preventDefault();
                dispatch(RemoveProduct(currentProduct));
              }}> -
              </Button>
            </Card.Text>
        </Card.Body>
        </div>
    </Card>
  );
}

export default CartItem;