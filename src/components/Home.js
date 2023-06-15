import { Link } from 'react-router-dom';
import React from 'react';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>This page is navigate to the ABOUT page & HEAD-TAIL pages</p>
      <p><Link to="/about">About</Link></p>
      <p><Link to="/HeadTail">Head & Tail</Link></p>
    </div>
  );
}
export default Home