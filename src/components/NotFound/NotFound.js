import React from 'react';
import notfound from '../../img/404.png';
const NotFound = () => {
    return (
        <div>
            <img className="img-fluid" src={notfound} alt="" width="1000" />
        </div>
    );
};

export default NotFound;