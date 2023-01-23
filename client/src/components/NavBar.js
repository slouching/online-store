import React, {useContext} from 'react'
import {Context} from '../index'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {SHOP_ROUTE} from '../utils/consts'
import {observer} from 'mobx-react-lite'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink to={SHOP_ROUTE} style={{color: 'white'}}>Devices</NavLink>

                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'}>Admin panel</Button>
                        <Button variant={'outline-light'} className="ms-2">Log out</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar