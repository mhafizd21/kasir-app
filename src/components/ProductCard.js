import styled from 'styled-components';

const ProductCard = ({ item }) => {
  return(
    <Card>
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