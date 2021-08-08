import styled from 'styled-components';

const Button = ({variant, children}) => {
  switch(variant){
    case "primary":
      return (<PrimaryButton>{children}</PrimaryButton>)
    case "secondary":
      return (<SecondaryButton>{children}</SecondaryButton>)
    case "tertiary":
      return (<TertiaryButton>{children}</TertiaryButton>)
    default:
      return (null)
  }
}

const StyledButton = styled.div`
  height: 36px;
  padding: 8px 12px;
  color: #FFFFFF;
  display: flex;
  width: max-content;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const PrimaryButton = styled(StyledButton)`
  background: ${props => props.theme.primary};
`
const SecondaryButton = styled(StyledButton)`
  background: ${props => props.theme.secondary};
`
const TertiaryButton = styled(StyledButton)`
  background: ${props => props.theme.tertiary};
`

export default Button;