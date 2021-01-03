import React from 'react';
import confLogo from '../images/badge-header.svg';
import './styles/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../global.css';

class Badge extends React.Component{

    render(){
        return (
        <div className="badge">
            <div className="badge_header">
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div className="badge_section-name">
                <img className="badge_avatar" src="http://www.gravatar.com/avartar?d=identicon" alt="" />
                <h1>{this.props.firstName} <br /> Neira</h1>
            </div>
            <div className="badge_section-info">
                <h3>Desarrrolladora Web</h3>
                <div>@marcela.code</div>
                <p>#platziconf</p>
            </div>
        </div>)
    }
}

export default Badge;