import './App.css';
import Header from './components/Header';
import styled, {ThemeProvider } from 'styled-components'
import * as themes from './styled/themes';
import { useSelector } from 'react-redux';
import ProductCard from './components/ProductCard';
import CartItem from './components/CartItem';
import ListMenu from './components/ListMenu';
import CalculateBox from './components/CalculateBox';

const App = () => {
  const filteredProducts = useSelector(state => state.product.filteredProducts);
  const carts = useSelector(state => state.product.carts);
  return(
    <ThemeProvider theme={themes}>
      <Header/>
      <Container>
        <MenuContainer>
          <ListMenu/>
        </MenuContainer>
        <ProductContainer>
          { !!filteredProducts.length ? filteredProducts.map((item, i) => {
              return(
                <ProductCard key={i} item={item}/>
              )
            }) : 'Products Not Found'
          }
        </ProductContainer>
        <SideContainer>
          <CartContainer>
            { carts ? `${carts.length} item in cart` : '0 item in cart' }
            { carts.map(item => 
                <CartItem key={item.id} item={item}/>
              )
            }
          </CartContainer>
          <CalculateBox/>
        </SideContainer>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 100vw;
  height: 92vh;
`

const MenuContainer = styled.div`
  width: 15%;
  padding: 16px 0;
  border-right: 1px solid ${props => props.theme.grey};
`

const ProductContainer = styled.div`
  width: 60%;
  padding: 16px 36px;
  display: flex;
  flex-wrap: wrap;
  height: max-content;
  align-items: flex-start;
  max-height: 92vh;
  overflow-y: auto;
`
const SideContainer = styled.div`
  border-left: 1px solid ${props => props.theme.grey};
  width: 25%;
`;

const CartContainer = styled.div`
  padding: 16px 24px;
  height:70.5vh;
  max-height:70.5vh;
  overflow-y: auto;
`

export default App;
