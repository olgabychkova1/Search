import React from "react"
import { Form } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"

class AppReg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            phone: '',
            country: '',
            city: '',
            street: '',
            user: []
        }
    }
    handleNameChange = (event) => {
        console.log('dsdsdsd');

        this.setState({ name: event.target.value });
    }
    handleSurnameChange = (event) => {

        this.setState({ surname: event.target.value })
    }
    handleEmailChange = (event) => {

        this.setState({ email: event.target.value })
    }
    handlePhoneChange = (event) => {

        this.setState({ phone: event.target.value })
    }
    handleCountryChange = (event) => {

        this.setState({ country: event.target.value })
    }
    handleCityChange = (event) => {
        this.setState({ city: event.target.value })
    }
    handleStreetChange = (event) => {
        this.setState({ street: event.target.value })
    }
    handleAddClick = () => {
        const { user } = this.state;
        this.setState({
            user: [
                ...user,
                {
                    name: this.state.name,
                    surname: this.state.surname,
                    email: this.state.email,
                    phone: this.state.phone,
                    country: this.state.country,
                    city: this.state.city,
                    street: this.state.street,
                }
            ]
        });
    }
    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control placeholder="Enter your name" onChange={this.handleNameChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSurname">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control placeholder="Enter your surname" onChange={this.handleSurnameChange} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control onChange={this.handleEmailChange} />
                        </Form.Group>

                        <Form.Group controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control placeholder="Enter your phone" onChange={this.handlePhoneChange} />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCountry">
                                <Form.Label>Country</Form.Label>
                                <Form.Control placeholder="Enter your country" onChange={this.handleCountryChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="Enter your city" onChange={this.handleCityChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridStreet">
                                <Form.Label>Street</Form.Label>
                                <Form.Control placeholder="Enter your street" onChange={this.handleStreetChange} />
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary" type="button" onClick={this.handleAddClick}>
                            Submit
                       </Button>
                    </Form>
                </Container>
                {this.state.user.length !== 0 && <div id="d03">
                    <h1>Users:</h1>              {
                        this.state.user.map(
                            (item) => {
                                return (
                                    <ul key={item.phone}>
                                        <li>{item.name}</li>
                                        <li>{item.surname}</li>
                                        <li>{item.email}</li>
                                        <li>{item.phone}</li>
                                        <li>{item.country}</li>
                                        <li>{item.city}</li>
                                        <li>{item.street}</li>
                                    </ul>
                                )
                            }
                        )
                    }

                </div>}
            </div>
        )
    }
}
export default AppReg