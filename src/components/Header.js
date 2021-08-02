import styled from 'styled-components';

const HeaderComponent = () => {
  return(
    <Header>
      <h1>KAASIR</h1>
    </Header>
  )
}

export default HeaderComponent;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.light};
  height: 8vh;
`