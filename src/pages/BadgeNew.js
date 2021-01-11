import React from 'react';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar.js';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js';
import './styles/BadgeNew.css';

class BagdeNew extends React.Component{

    state = {form:{
        firstName:'',
        lastName:'',
        email:'',
        jobTitle: '',
        twitter:''
    }}

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge firstName={this.state.form.firstName} 
                            lastName={this.state.form.lastName}
                            jobTitle={this.state.form.jobTitle}
                            email={this.state.form.email}
                            twitter={this.state.form.twitter}
                            avatar=""></Badge>
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                            onChange={this.handleChange}
                            formValues={this.state.form}></BadgeForm>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BagdeNew;