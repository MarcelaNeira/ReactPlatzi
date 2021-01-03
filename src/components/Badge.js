import React from 'react';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{

    render(){
        return (
        <div>
            <div>
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>
            <div>
                <img src="http://www.gravatar.com/avartar?d=identicon" alt="" />
                <h1>Marcela <br /> Neira</h1>
            </div>
            <div>
                <p>Desarrrolladora Web</p>
                <p>@marcela.code</p>
                <p>#platziconf</p>
            </div>
        </div>)
    }
}

export default Badge;