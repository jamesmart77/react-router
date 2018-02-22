import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

// Although we do not end up using the visual portion of this piece, we do need to have this portion to capture the user inputs. 

class SignUp extends Component {
    // Sets the state of the current sign up form
    state = {
        email: "",
        password: ""
    };

    // Handles the input from the user to change the state
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]:value
        });
    }

    // Handles the form submition
    handleFormSubmit = event =>{
        event.preventDefault();
        // Go to the SignUp method on the API utils with the
        API.signUp({
            email: this.state.email,
            password: this.state.password
        }).then(res => console.log('successful signup'))
        .catch(err => console.log(err));
    }


    render(){
        return (
            <Container fluid>
                <Row>
                    <Col className="col-md-6">
                    <form>
                        <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            name="email"
                            placeholder="Email"
                            required
                        />
                        <Input
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            type="password"
                            placeholder="Password"
                            required
                        />
                        <FormBtn
                            disabled={!(this.state.email && this.state.password)}
                            onClick={this.handleFormSubmit}>
                        </FormBtn>
                    </form>
                </Col>
            </Row>
        </Container>
        )
    }

}




export default SignUp;
