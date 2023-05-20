import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import actions from '../../../redux/books/actions';

export default ({ message }) => {
  const { data } = useSelector((state) => state?.Books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getBooks());
  }, []);
  return (
    <>
      <h1>{data?.data}</h1>
    </>
  );
};
