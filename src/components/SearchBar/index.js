import React from 'react';
import PropTypes from 'prop-types';

import { Input, SearchBarContainer, Button } from './styles';

const SearchBar = ({ value, handleInput, width, placeholder, submit }) => (
  <SearchBarContainer width={width}>
    <Input value={value} onChange={handleInput} placeholder={placeholder} />
    <Button onClick={submit}>Search</Button>
  </SearchBarContainer>
);

SearchBar.defaultProps = {
  width: '500px',
  placeholder: '',
  submit: () => {},
};

SearchBar.propTypes = {
  handleInput: PropTypes.func.isRequired,
  width: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  submit: PropTypes.func,
};

export default SearchBar;
