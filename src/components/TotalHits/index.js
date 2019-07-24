import React from 'react';
import PropTypes from 'prop-types';

import { Text, Results } from './styles';

const TotalHits = ({ results }) => (
  <Text>
    <Results>{results}</Results> results found
  </Text>
);

TotalHits.defaultProps = {
  results: null,
};

TotalHits.propTypes = {
  results: PropTypes.number,
};

export default TotalHits;
