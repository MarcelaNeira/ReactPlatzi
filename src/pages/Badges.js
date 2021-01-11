import React from 'react';
import Navbar from '../components/Navbar';
import './styles/Badges.css'
import '../global.css'
import confLogo from '../images/badge-header.svg'

class Badges extends React.Component{

    render(){
        return(
            <div>
                <Navbar />
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img className="Badges_cof-logo" src={confLogo} alt="Conf logo"/>
                        </div>
                    </div>
                </div>
                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <a href="/badges/new" className='btn btn-primary'>New Badge</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Badges;