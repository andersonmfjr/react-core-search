import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Logo from '../../components/Logo';
import SearchBar from '../../components/SearchBar';

import { Container } from './styles';

export default function Home({ history }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchQuery = useCallback(e => setSearchQuery(e.target.value), [
    searchQuery,
  ]);

  const search = () => {
    if (searchQuery.length > 0) {
      history.push({ pathname: '/search', search: `?q=${searchQuery}` });
    } else {
      alert('Please fill the field.');
    }
  };

  return (
    <Container>
      <Logo marginBottom="30px" width="200px" hasLink={false} />
      <SearchBar
        value={searchQuery}
        width="500px"
        handleInput={handleSearchQuery}
        placeholder="Which article are you looking for?"
        submit={search}
      />
    </Container>
  );
}

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
