import React, {Fragment} from 'react';

const Error = ({message}) => {
    return ( 
        <Fragment>
            <p className="alert alert-danger text-center">{message}</p>
        </Fragment>
     );
}
 
export default Error;