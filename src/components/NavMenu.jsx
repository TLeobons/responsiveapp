import styled from 'styled-components'
import { Link, NavLink } from "react-router-dom"
import {menuItems} from 'menus'
import {logo} from 'assets/svgs'

const NavMenu = () => {
  return (
    <Nav>
      <Menu>
        <MenuItem><Link to="/"/>{logo}</MenuItem>
        {menuItems.map((item, i) => (
          <MenuItem key={i}> <NavLink to={`/${item.path}`}> {item.item} </NavLink> </MenuItem>
        ))}
      </Menu>
    </Nav>
  )
}

export default NavMenu

const Nav = styled.nav`
  font-size: 2rem;
  width: 240px;
  height: 100vh;
  background-color:var(--grey)
`
const Menu = styled.ul`

  &:first-child{

  }
`

const MenuItem = styled.li`

`