import './App.css';
import Header from './components/Header';
import styled, {ThemeProvider } from 'styled-components'
import * as themes from './styled/themes';

const App = () => {
  return(
    <ThemeProvider theme={themes}>
      <Header/>
      <Container>
        <MenuContainer>
          Menu
        </MenuContainer>
        <ProductContainer>
          Products
        </ProductContainer>
        <CartContainer>
          Cart
        </CartContainer>
      </Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 92vh;
`

const MenuContainer = styled.div`
  width: 15%;
  padding: 16px 36px;
`

const ProductContainer = styled.div`
  width: 60%;
  padding: 16px 36px;
  border-right: 1px solid ${props => props.theme.grey};
  border-left: 1px solid ${props => props.theme.grey};
`

const CartContainer = styled.div`
  width: 25%;
  padding: 16px 36px;

`

export default App;
