import React from 'react';

const Input = ({ id, value, onChange }: { id: string, value: string, onChange?: () => void }) => (
    <input id={id} value={value} onChange={onChange} />
);

export default Input;
