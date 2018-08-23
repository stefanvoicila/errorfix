import React, {Component} from 'react';

import classes from './Register.css';
import Aux from '../../HOC/Aux/Aux';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

class Register extends Component {

    state = {
        id: '',
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        password: '',
        address: {
            country: '',
            postalcode: '',
            city: '',
            region: '',
            street: '',
            streetno: ''
        },

        loading: false,
    }

    registerContinue = () => {
        alert('Some of you are alright, don`t go to school tomorrow');
    }

    registerGetOut = () => {
        alert('Dan, bate-l');
    }

    render() {
        let form = (
            <form>
                <Input inputtype="input" type="text" placeholder="send help" />
                {/* //<button btnType="Success" clicked={this.registrationHandler} /> */}
            </form>
        )

        return (
            <Aux>
                <p>honhonhonhonhon</p>
                <Button btnType="Success" clicked={this.registerContinue}>LOG IN</Button>
                <Button btnType="Danger" clicked={this.registerGetOut}>GET THE FUCK OUT</Button>
            </Aux>
        )
    }
}

export default Register;