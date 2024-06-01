import React from 'react';

const Label = ({ htmlFor, children }: { htmlFor?: string, children: any }) => (
    <label htmlFor={htmlFor}>
        {children}
    </label>
);

export default Label;
