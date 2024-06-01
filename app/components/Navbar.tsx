import React from 'react';

type NavbarProps = {
    items: string[];
};

const Navbar: React.FC<NavbarProps> = ({ items }) => {
    return (
        <nav>
            <div className="logo">Logo</div>
            <ul className="items">
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
