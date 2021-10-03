import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCart } from '../store/actions/products';
import CurrencyFormat from './CurrencyFormat';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = id => {
    dispatch(addCart(id));
  }

  return(
    <Card onClick={() => addToCart(item.id)}>
      <CardImg src={item.image} alt={item.name}/>
      <CardDetail>
        <CardTitle>{item.name}</CardTitle>
        <CardPrice>
          <CurrencyFormat
            value={item.price}
          />
        </CardPrice>
      </CardDetail>
    </Card>
  )
}

export default ProductCard;

const Card = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  height: max-content;
  display: block;
  margin: 0 12px;
  width: 120px;
`
const CardImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
`
const CardDetail = styled.div`
  p {
    color: ${props => props.theme.dark};
  }
`
const CardTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
`
const CardPrice = styled.p`
  font-size: 16px;
`
