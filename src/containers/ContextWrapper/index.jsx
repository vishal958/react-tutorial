import React from 'react';
import { RootContextProvider } from '../../context/Context';
import Wrapper from '../Wrapper';

const ContextWrapper = () => {
  return (
    <RootContextProvider>
      <Wrapper />
    </RootContextProvider>
  );
};

export default ContextWrapper;
