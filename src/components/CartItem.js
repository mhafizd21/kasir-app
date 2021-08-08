import styled from 'styled-components';
import Counter from './Counter';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { incCart, decCart, removeCart } from '../store/actions/products';

const CartItem = ({ item }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch()

  const inc = id => {
    setCount( count + 1);
    dispatch(incCart(id));
  }
  
  const dec = id => {
    if(count > 1) {
      setCount( count - 1)
      dispatch(decCart(id));
    }
    else {
      dispatch(removeCart(id));
    }
  }

  return(
    <CartItemStyled>
      <ProductName>{item.name}</ProductName>
      <CounterContainer>
        <Counter inc={() => inc(item.id)}/>
        <CounterNum>
          {count}
        </CounterNum>
        <Counter dec={() => dec(item.id)}/>
      </CounterContainer>
      <div>{item.price}</div>
    </CartItemStyled>
  )
}

export default CartItem;

const CartItemStyled = styled.div`
  width: 100%;
  padding: 12px 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
`;

const ProductName = styled.div`
  width: 40%;
  `;

const CounterContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

const CounterNum = styled.div`
  margin: 0 12px;
`;