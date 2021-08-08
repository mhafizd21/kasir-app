import styled from 'styled-components';

const Counter = ({ inc, dec }) => {
  if (inc) {
    return (
      <CounterButton onClick={inc}>+</CounterButton>
    )
  }
  else {
    return (
      <CounterButton onClick={dec}>-</CounterButton>
    )
  }
}

export default Counter;

const CounterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  min-width: 24px;
  min-height: 24px;
  background: ${props => props.theme.secondary};
  color: #FFFFFF;
`