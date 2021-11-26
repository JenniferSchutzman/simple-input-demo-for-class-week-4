import React, { Component } from 'react'
import {Form, FormGroup, Label, Input} from 'reactstrap'

class ControlledFormDemo extends Component {

    constructor(props){
        super()
        this.state = {
            firstName: '',
            touched: {
                firstName: false
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const name = event.target.name 
        const value = event.target.value
        this.setState({
            [name]: value
        })
    }

    handleBlur(name){
        this.setState({
            touched: {...this.state.touched, [name]: true}
        })
    }

 

    render () {
        console.log('this.state.touched.firstName', this.state.touched.firstName)
        console.log('this.state.firstName', this.state.firstName)

        return (
            <Form>
                <FormGroup>
                    <Label for="firstName">
                        What is your first name?
                    </Label>
                    <Input
                        type="text" id="firstName" name="firstName"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleInputChange} 
                        onBlur={() => this.handleBlur('firstName')}
                        invalid={(this.state.touched.firstName === true && !this.state.firstName) ? true : false}
                    />
                    {(this.state.touched.firstName === true && !this.state.firstName) ? (<div className="red">You need to enter a value!</div>) : ('')}
                </FormGroup>
            </Form>
        )
    }
}

export default ControlledFormDemo;