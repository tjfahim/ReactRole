import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import "./Login.css"
import checkLogin from './loginService';
class Login extends React.Component {

    state = {
        username: "",
        password: "",
        errorMessage: ""
    }

    changeUserNames = (a) => {
        const username = a.target.value;
        this.setState({ username })  ;  
    }
    changePassword = (a) => {
        const password = a.target.value;
        this.setState({ password })  ;  
    }
    submitlogin = () => {
        if (checkLogin(this.state)){
            this.setState({
                errorMessage: ''
            })
            alert("you are success");
        }else{
            this.setState({
                errorMessage: 'Sorry invalid username password'
            })
        }
        ;
    }

    render() {
        return (

            <div className = 'd-flex justify-content-center login-area' >
            <Card style = {
                { width: '30rem' }
            } >
            <h3 className = 'text-center mt-3 md-2' > Login to your accout < /h3>
            <hr/> 
            {
                this.state.errorMessage.length > 0 && (
                <Alert show={true} variant='danger' className='m-2'><p >
                    {this.state.errorMessage}
                </p></Alert>
                )}
            <Card.Body >
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" 
                    value={this.state.username}
                    placeholder="Enter your name" 
                    onChange={this.changeUserNames}
                    />
                   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                    value={this.state.password}
                    placeholder="Password"
                     onChange={this.changePassword }/>
                </Form.Group>
              
                <div className='text-center d-grid gap-2'>
                    <Button variant="primary" type="button" className='btn btn-success text-uppercase' 
                    onClick={this.submitlogin}
                    >
                        Login
                    </Button>
                </div>
                </Form>
            < /Card.Body > 
            < /Card>
            < /div >

        )
    }
}

export default Login;