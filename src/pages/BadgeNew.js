import React from 'react';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar.js';
import Badge from '../components/Badge.js';
import './styles/BadgeNew.css'

class BagdeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Marcela" lastName="Neira" jobTitle="Web Developer" twitter="marcela.code" avatar=""></Badge>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BagdeNew;