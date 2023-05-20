import React from 'react';

const RootContext = React.createContext();

const RootContextProvider = ({ children }) => {
  const [fallbackMessage, setFallBackMessage] =
    React.useState('Page Not Found');
  return (
    <RootContext.Provider
      value={{
        fallbackMessage,
        setFallBackMessage,
      }}
    >
      {children}
    </RootContext.Provider>
  );
};

export { RootContext, RootContextProvider };
