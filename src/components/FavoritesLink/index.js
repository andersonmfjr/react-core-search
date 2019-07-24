import React from 'react';
import PropTypes from 'prop-types';

import { Favorites } from './styles';

const FavoritesLink = ({ children, marginTop }) => (
  <Favorites margintop={marginTop} to="/favorites">
    {children}
  </Favorites>
);

FavoritesLink.defaultProps = {
  marginTop: '15px',
  children: 'Go to Favorites',
};

FavoritesLink.propTypes = {
  marginTop: PropTypes.string,
  children: PropTypes.string,
};

export default FavoritesLink;
