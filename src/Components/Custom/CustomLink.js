import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({children,to,...props}) => {
    let resolved=useResolvedPath(to);
    let match=useMatch({path:resolved.pathname,end:true});
    return (
        <div>
            <Link style={{color:match?'rgb(223, 74, 67)':'rgb(0,0,10,10)', fontweight:match?'bolder':'normal',borderBottom:match? '3px solid tomato':''}}
            to={to}
            {...props}
            >{children}
            </Link>
        </div>
    );
};

export default CustomLink;