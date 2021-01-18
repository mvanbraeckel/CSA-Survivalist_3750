import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import styled from 'styled-components';
import Home from './Home';

const StyledLogin = styled.div`
padding: 120px 0;
margin: auto;
max-width: 320px;
`;

 class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    validateForm = () => {
        const {email, password} = this.state
        return email.length > 0 && password.length > 0;
    }

    setEmail = (email) => {
        this.setState({email})
    }

    setPassword = (password) => {
        this.setState({ password })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        console.log(email, password)
        if(email === "dixant@uoguelph.ca" && password === "testing"){
            return(
                <Home/>
            )
        }
    }

    render(){
        const { email, password } = this.state
        const { handleSubmit, setEmail, setPassword, validateForm } = this
    return (
        <StyledLogin>
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bssize="large">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup controlId="password" bssize="large">
                    <FormLabel>Password</FormLabel>
                    <FormControl
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </FormGroup>
                <Button block bssize="large" disabled={!validateForm()} type="submit">
                    Login
        </Button>
            </form>
        </StyledLogin>
    );
    }
}
export default Login;