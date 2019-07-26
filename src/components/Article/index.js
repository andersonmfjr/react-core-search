import React from 'react';
import PropTypes from 'prop-types';

import { Item, Title, Link, Type, Description, Info } from './styles';

const Article = ({ id, title, description, type, authors, urls }) => (
  <Item>
    <Title>{title}</Title>
    {description && <Description>{description}</Description>}
    <Info>
      <i>Type:</i> <Type>{type}</Type> - <i>Authors: {authors.join(', ')}</i>
    </Info>
    {urls.map((url, i) => (
      <Link key={`${id}-${i}-${url}`} href={url} target="_blank">
        {url}
      </Link>
    ))}
  </Item>
);

Article.defaultProps = {
  description: '',
};

Article.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(PropTypes.string).isRequired,
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Article;
