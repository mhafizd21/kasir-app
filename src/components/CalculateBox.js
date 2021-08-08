import styled from 'styled-components';
import Button from './Button';
import { useSelector } from 'react-redux';
import { useState } from 'react';

const CalculateBox = () => {
  const carts = useSelector(state => state.product.carts);
  const total = carts.reduce((totalPrice, curr) => totalPrice + curr.price, 0);
  const [change, setChange] = useState('');

  return(
    <CalculateContainer>
      <TotalItem>
        <p>Total</p>
        <p>{total}</p>
      </TotalItem>
      <PaymentItem>
        <p>Jumlah Bayar</p>
        <input type="number"/>
      </PaymentItem>
      <ChangeItem>
        <p>Kembalian</p>
        <p>1000000</p>
      </ChangeItem>
      <BtnAction>
        <Button variant="tertiary">CANCEL</Button>
        <Button variant="primary">SELESAI</Button>
      </BtnAction>
    </CalculateContainer>
  )
}

export default CalculateBox;

const CalculateContainer = styled.div`
  border: 1px solid #CCC;
  padding: 12px 16px;
  width: 100%;
`;
const TotalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
const PaymentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  input[type="number"] {
    border: unset;
    border-bottom: 1px solid #CCC;
    text-align: right;
    -moz-appearance: textfield;
    &:focus {
      outline: none;
    }
    &::-webkit-inner-spin-button, 
    &::-webkit-outer-spin-button{
      -webkit-appearance: none;
    }
  }
`;
const ChangeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;
const BtnAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;