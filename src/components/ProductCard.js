import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addCart } from '../store/actions/products';

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const addToCart = id => {
    dispatch(addCart(id));
  }

  return(
    <Card onClick={() => addToCart(item.id)}>
      <CardImg src={item.image} alt={item.name}/>
      <CardDetail>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </CardDetail>
    </Card>
  )
}

export default ProductCard;

const Card = styled.div`
  padding: 8px 12px;
  cursor: pointer;
`
const CardImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
`
const CardDetail = styled.div`
  p {
    font-size: 12px;
    color: ${props => props.theme.dark};
  }
`