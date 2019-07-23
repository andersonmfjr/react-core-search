import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Image } from './styles';

import logo from '../../assets/img/logo.png';

const Logo = ({
  width,
  hasLink,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
}) =>
  hasLink ? (
    <Link to="/">
      <Image
        width={width}
        marginTop={marginTop}
        marginLeft={marginLeft}
        marginRight={marginRight}
        marginBottom={marginBottom}
        hasLink={hasLink}
        src={logo}
      />
    </Link>
  ) : (
    <Image
      width={width}
      marginTop={marginTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginBottom={marginBottom}
      hasLink={hasLink}
      src={logo}
    />
  );

Logo.defaultProps = {
  width: '250px',
  marginLeft: '0',
  marginRight: '0',
  marginBottom: '0',
  marginTop: '0',
  hasLink: true,
};

Logo.propTypes = {
  width: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  hasLink: PropTypes.bool,
};

export default Logo;
