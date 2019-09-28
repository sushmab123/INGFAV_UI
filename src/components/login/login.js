import React, { Component } from 'react';
import axios from 'axios';
import './login.css';
import { ToastContainer, toast } from 'react-toastify';
import swal from 'sweetalert'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {},
            formData: {
                customerId: ''
            }
        }
    }

    //On KeyPress/Entering, the value will be changed

    handleChange = (event) => {
        let fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({
            fields
        });

        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    //To Validate Customer Id

    validateHandler = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["customerId"] = "";

            this.setState({ fields: fields });
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["customerId"] = "";
            this.setState({ fields: fields });
        }

        const { formData } = this.state;
        axios.post('http://192.168.1.100:9093/ingbank/login', formData).then((response) => {
            console.log(response);
            localStorage.setItem("customerId",formData.customerId); 
            localStorage.setItem("name",response.data.name); 
            this.props.history.push('/favAccount');
            // swal(response.data.message);

            // toast("Logged in!", {
            //     position: toast.POSITION.TOP_CENTER
            // });
            // setTimeout(
            //     function () {
            //         
            //     }
            //         .bind(this),
            //     1500
            // );


        }).catch((error)=>{ 
            // swal(error.response.data.message);

        });;


    }


    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;


        if (!fields["customerId"]) {
            formIsValid = false;
            errors["customerId"] = "*Please enter your Customer ID.";
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }



    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-sm-6 col-md-8 col-md-offset-4">
                        <h1 className="text-center main-title">Login</h1>
                        <div className="account-wall">
                            <img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                                alt="" />
                            <form className="form-signin">
                                <labe className="cust-title">Customer ID:</labe>
                                <input type="text" name="customerId" value={this.state.fields.customerId} className="form-control customerId" placeholder="Enter Customer Id" onChange={this.handleChange} required autoFocus /><div className="errorMsg">{this.state.errors.customerId}</div>
                                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.handleSubmit}>
                                    Login</button>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default Login;
