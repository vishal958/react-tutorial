import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Retrieve the initial value from local storage if it exists,
  // otherwise, use the provided initialValue
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  // Update the value in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
