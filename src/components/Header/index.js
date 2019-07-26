import React from 'react';
import PropTypes from 'prop-types';

import Logo from '../Logo';
import SearchBar from '../SearchBar';

import { Container } from './styles';

const Header = ({ searchQuery, handleSearchQuery, search }) => (
  <Container>
    <Logo hasLink width="100px" />
    <SearchBar
      value={searchQuery}
      width="600px"
      handleInput={handleSearchQuery}
      placeholder="Which article are you looking for?"
      submit={search}
    />
  </Container>
);

Header.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  handleSearchQuery: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
};

export default Header;
