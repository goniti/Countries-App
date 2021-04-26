import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({flag}) => (
    <header className="header">
        <img className="header__img" alt="Flag country" src={flag} />
    </header>
);

Header.propTypes = {
    flag: PropTypes.string.isRequired,
};

export default Header;
