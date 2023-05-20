import React, { useContext } from 'react';
import NotFound from '../components/NotFound';
import { RootContext } from '../../context/Context';

export default () => {
  const { fallbackMessage } = useContext(RootContext);
  return <NotFound message={fallbackMessage} />;
};
