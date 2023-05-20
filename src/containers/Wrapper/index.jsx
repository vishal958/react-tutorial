import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Counter from '../Counter/CounterWithoutInput';
import SharedNavCounterLayout from '../Counter/SharedNavCounterLayout';
import NotFound from '../NotFound';

const Wrapper = React.memo(() => {
  return (
    <Routes>
      {/* <Route path="/" element={<Counter />} /> */}
      <Route path="/counter" element={<SharedNavCounterLayout />}>
        <Route index element={<Counter />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
});

export default Wrapper;
