import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/counter">CounterWithoutInput</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
