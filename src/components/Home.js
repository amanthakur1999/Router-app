import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="w-full">
      <Link to="/articles" exact>
        <h2 className="border py-1  w-3/12 text-center my-6 rounded-lg bg-green-400 text-white font-bold">
          Articles
        </h2>
      </Link>
    </div>
  );
}

export default Home;
