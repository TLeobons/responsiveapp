import styled from 'styled-components'
import { Link, NavLink } from "react-router-dom"
import {menuItems} from 'menus'
import {logo} from 'assets/svgs'

const NavMenu = () => {
  return (
    <Nav>
      <ul>
        <MenuItem><Link to="/"/>{logo}</MenuItem>
        {menuItems.map((item, i) => (
          <MenuItem key={i}> <NavLink to={`/${item.path}`}> {item.item} </NavLink> </MenuItem>
        ))}
      </ul>
    </Nav>
  )
}

export default NavMenu

const Nav = styled.nav`
  font-size: 2rem;
`

const MenuItem = styled.li`

`