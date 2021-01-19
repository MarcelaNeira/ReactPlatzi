import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Layout from './Layout';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';

function App(){
    
        return(
            <BrowserRouter>
            <Layout>
            <Switch>
                <Route exact path="/badges" component={Badges}/>
                <Route exact path="/badges/new" component={BadgeNew}/>
            </Switch>
            </Layout>
            </BrowserRouter>
        )
     
}

export default App;