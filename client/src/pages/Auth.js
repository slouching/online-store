import React from 'react'
import {Button, Card, Container, Form} from 'react-bootstrap'
import {NavLink, useLocation} from 'react-router-dom'
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from '../utils/consts'

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <Container
            className="d-flex align-items-center justify-content-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card
                className="p-5"
                style={{width: 600}}
            >
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Email"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Password"
                    />
                    <div className="d-flex justify-content-between mt-3 ">
                        {isLogin ? <div>
                                Don't have an account yet? <NavLink to={REGISTRATION_ROUTE}>Create!</NavLink>
                            </div>
                            : <div>
                                Already have an account? <NavLink to={LOGIN_ROUTE}>Sign in!</NavLink>
                            </div>}
                        <Button
                            variant="outline-success"
                            onClick={() => alert('ok')}
                        >
                            {isLogin? 'Sign in' : 'Create'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth