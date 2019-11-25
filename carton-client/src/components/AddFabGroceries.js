import React, {Component} from 'react';
import Link from 'react-router-dom/Link';


import { Fab } from '@material-ui/core';

class AddFabGroceries extends Component {

    render(){
        return (
            <div>
                <Fab component={Link} to='/addGroceries'> New Item
                    
                     </Fab>
            </div>
        )
    }


}

export default AddFabGroceries  
