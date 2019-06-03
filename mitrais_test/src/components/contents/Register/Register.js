import React from 'react';
import './Register.css';
import axios from 'axios';
import $ from 'jquery';

// const initialState = {

//     mobileNumber: "",
//     firstName: "",
//     lastName: "",
//     email: "",
//     dob: "",
//     gender: "",
//     mobileNumberError: "",
//     firstNameError: "",
//     lastNameError: "",
//     emailError: "",
// }

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: "",
            firstName: "",
            lastName: "",
            email: "",
            dob: "",
            month: "0",
            year: "0",
            day: "0",
            gender: "",
            mobileNumberError: "",
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            users: {}
        };


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validate = this.validate.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    componentDidMount = () => {
        fetch('http://localhost:4000/users/')
            .then(response => response.json())
            .then(users => this.setState({ users }));
    }

    handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    handleOptionChange = (event) => {
        this.setState({
            gender: event.target.value
        });
    }
    handleSelectChange = (event) => {
        const selectName = event.target.name;
        const selectValue = event.target.value;

        this.setState({
            [selectName]: selectValue
        });
        
    }
    validate = () => {
        

        let mobileNumberError = "";
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";

        // console.log(this.state);

        // if (this.state.users !== {}) {
        //     for (let user of this.state.users.data) {
        //         // console.log(user);
        //         if (user.mobileNumber === this.state.mobileNumber) {

        //             mobileNumberError = "Please enter an unique number. The number is already exist.";
        //         }
        //     }
        // }

        if (!this.state.mobileNumber) {
            mobileNumberError = "Please enter an Indonesian mobile number";
        }
        
        else if (this.state.mobileNumber && !this.state.mobileNumber.includes("+62") ) {
            mobileNumberError = "Please enter valid Indonesian mobile number. Begin with +62.";
        }

        if (!this.state.firstName) {
            firstNameError = "Please enter the first name";
        }
        if (!this.state.lastName) {
            lastNameError = "Please enter the last name";
        }

        if (!this.state.email.includes("@")) {
            emailError = "Please enter a valid email address";
        }

        // if (this.state.users !== {}) {
        //     for (let user of this.state.users.data) {
        //         // console.log(this.state.users.data[user]['email']);
        //         if (user.email === this.state.email) {
        //             emailError = "Please enter an unique email. The email is already exist.";
        //         }
        //     }
        // }
        if (mobileNumberError || emailError || firstNameError || lastNameError) {
            this.setState({ mobileNumberError, firstNameError, lastNameError, emailError });
            return false;
        }
        return true;
    }
    handleSubmit = event => {
        event.preventDefault();

        //insert dob state
        if (this.state.month !== '0' && this.state.day !== '0' && this.state.year !== '0') {
            var dob = this.state.year + '-' + this.state.month + '-' + this.state.day;
            this.setState({
                dob: dob
            });

            // console.log(dob);
        }

        const isValid = this.validate();
        
        if (isValid) {
            // console.log(this.state);

            axios.post(`http://localhost:4000/users/add`, null, {
                params: {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    mobileNumber: this.state.mobileNumber,
                    email: this.state.email,
                    dob: this.state.dob,
                    gender: this.state.gender
                }
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
                .catch(err => console.warn(err));
            
            $('.register-container').addClass('registered');

            //disable form
            $('form input, form select, .register-btn').prop("disabled", true);

            this.setState({
                mobileNumber: "",
                firstName: "",
                lastName: "",
                email: "",
                dob: "",
                month: "0",
                year: "0",
                day: "0",
                gender: "",
                mobileNumberError: "",
                firstNameError: "",
                lastNameError: "",
                emailError: "",
            });
        return false;
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="content register-container">
                        <div className="register-form">
                            <h3 className="register-title">Registration</h3>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="text" id="mobileNumber" name="mobileNumber" value={this.state.mobileNumber} className={this.state.mobileNumberError ? "form-control form-error-red" : "form-control"} placeholder="Mobile number" onChange={this.handleChange} />
                                    {this.state.mobileNumberError ?
                                        <div className="form-error">
                                            {this.state.mobileNumberError}
                                        </div>
                                        : null
                                    }
                                </div>

                                <div className="form-group">
                                    <input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleChange} className={this.state.firstNameError ? "form-control form-error-red" : "form-control"} placeholder="First Name" />
                                    {this.state.firstNameError ?
                                        <div className="form-error">
                                            {this.state.firstNameError}
                                        </div>
                                        : null
                                    }
                                </div>
                                <div className="form-group">
                                    <input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleChange} className={this.state.lastNameError ? "form-control form-error-red" : "form-control"} placeholder="Last Name" />
                                    {this.state.lastNameError ?
                                        <div className="form-error">
                                            {this.state.lastNameError}
                                        </div>
                                        : null
                                    }
                                </div>
                                <div className="form-group">
                                    <label>Date of Birth</label>
                                    <div className="dob">
                                        <input type="hidden" value="" name="dob" />
                                        <select name="month" onChange={this.handleSelectChange}>
                                            <option value="0">Month</option>
                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                            <option value="6">June</option>
                                            <option value="7">July</option>
                                            <option value="8">August</option>
                                            <option value="9">September</option>
                                            <option value="10">October</option>
                                            <option value="10">November</option>
                                            <option value="10">December</option>
                                        </select>
                                        <select name="day" onChange={this.handleSelectChange}>
                                            <option value="0">Date</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
                                            <option value="18">18</option>
                                            <option value="19">19</option>
                                            <option value="20">20</option>
                                            <option value="21">21</option>
                                            <option value="22">22</option>
                                            <option value="23">23</option>
                                            <option value="24">24</option>
                                            <option value="25">25</option>
                                            <option value="26">26</option>
                                            <option value="27">27</option>
                                            <option value="28">28</option>
                                            <option value="29">29</option>
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                        </select>
                                        <select name="year" onChange={this.handleSelectChange}>
                                            <option value="0">Year</option>
                                            <option value="1987">1987</option>
                                            <option value="1988">1988</option>
                                            <option value="1989">1989</option>
                                            <option value="1990">1990</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1992</option>
                                            <option value="1993">1993</option>
                                            <option value="1994">1994</option>
                                            <option value="1995">1995</option>
                                            <option value="1996">1996</option>
                                            <option value="1997">1997</option>
                                            <option value="1998">1998</option>
                                            <option value="1999">1999</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="form-group">
                                    <div className="gender">
                                        <label>
                                            <span>
                                                <input type="radio" value="1" checked={this.state.gender === '1'} name="gender" onChange={this.handleOptionChange} />
                                                <span>
                                                    Male
                                            </span>
                                            </span>
                                        </label>
                                        <label>
                                            <span>
                                                <input type="radio" value="2" checked={this.state.gender === '2'} name="gender" onChange={this.handleOptionChange} />
                                                <span>
                                                    Female
                                            </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" id="email" value={this.state.email} className={this.state.emailError ? "form-control form-error-red" : "form-control"} onChange={this.handleChange} placeholder="Email" />
                                    {this.state.emailError ?
                                        <div className="form-error">
                                            {this.state.emailError}
                                        </div>
                                        : null
                                    }
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn w-100 purple-btn register-btn">Register</button>
                                </div>
                            </form>
                        </div>
                        <div className="login">
                            <a className="btn purple-btn w-100 " href="">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;