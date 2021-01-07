import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Api } from './api';

export default function SecureRoute({ path, component }) {
  const [userInfo, setUserInfo] = useState('');
  const [error] = useState(false);

  useEffect(() => {
    if (userInfo === '' && error === false) {
      const fetchData = async () => {
        axios
          .get(Api.userinfo())
          .then((result) => result && setUserInfo(result.data));
      };

      fetchData();
    }
  }, [error, userInfo]);

  if (userInfo === '') {
    return '';
  }

  return <Route path={path} component={component} />;
}

SecureRoute.propTypes = {
  path: PropTypes.string,
  component: PropTypes.func,
};
