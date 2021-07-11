import React,{Fragment} from 'react';
import spiner from './spinner.gif'
const Spinner = () => {
    return (
        <Fragment>
            <img src={spiner} alt="Loading...." 
            style={{width:"200px",margin:"auto",display:"block"}}
            
            />
            <h2>Loading.....</h2>
        </Fragment>
    );
};

export default Spinner;