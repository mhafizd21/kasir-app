import styled from 'styled-components';
import { useState } from 'react';

const ListMenu = () => {
  const [menu] = useState(['Favourite', 'Makanan', 'Minuman', 'Cemilan']);

  return (
    <ul>
      {menu.map((item, i ) => {
        return(
          <MenuItem key={i}>{item}</MenuItem>
        )
      })}
    </ul>
  )
}

export default ListMenu;

const MenuItem = styled.li`
  width: 100%;
  color: ${props => props.theme.grey};
  padding: 8px 12px 8px 24px;
  background: #FFFFFF;
`