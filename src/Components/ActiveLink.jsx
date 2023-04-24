import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <>
            <NavLink
                to={to}
                className={({ isActive }) =>
                    isActive ? "text-green-400" : ""
                }
                
            >
                {
                    children
                }
                
            </NavLink>

        </>
    );
};

export default ActiveLink;