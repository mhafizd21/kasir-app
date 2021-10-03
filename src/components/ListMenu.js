import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProducts } from '../store/actions/products';

const ListMenu = () => {
  const dispatch = useDispatch();
  const filterMenu = useSelector(state => state.filterMenu)
  const [selectedMenu, setSelectedMenu] = useState(filterMenu || 'makanan');

  const handleChange = menuName => {
    setSelectedMenu(menuName);
    dispatch(filterProducts(menuName));
  }

  const menu = [ 
    {
      id: 1,
      name: 'favourite',
      label:  'Favourite',
    },
    {
      id: 2,
      name: 'makanan',
      label:  'Makanan',
    },
    {
      id: 3,
      name: 'minuman',
      label:  'Minuman',
    },
    {
      id: 4,
      name: 'cemilan',
      label:  'Cemilan',
    },
  ];

  return (
    <ul>
      {menu.map(item => {
        return(
          <MenuItem
            key={item.id}
            selected={item.name === selectedMenu}
            onClick={() => handleChange(item.name)}
          >
            {item.label}
          </MenuItem>
        )
      })}
    </ul>
  )
}

export default ListMenu;

const MenuItem = styled.li`
  width: 100%;
  padding: 8px 12px 8px 24px;
  cursor: pointer;
  ${props => {
    if (props.selected) {
      return `
        background: #4ABAD1;
        color: #FFFFFF;
      `
    } else {
      return `
        background: #FFFFFF;
        color: ${props.theme.grey};
      `
    }
  }}
`