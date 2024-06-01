import React from 'react';

const Button = ({ onClick, children }: { onClick?: () => void | null, children: any }) => {

    return (<button onClick={onClick}>
        {children}
    </button>)

}
    ;

export default Button;