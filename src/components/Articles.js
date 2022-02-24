import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Data from '../data';

class Articles extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          {Data.map((article) => (
            <li key={article.title} className="p-2 border">
              <NavLink to={`/article/${article.slug}`}>
                <h3>{article.title}</h3>
              </NavLink>
            </li>
          ))}
          <Link to="/">
            <button className="border mt-6 bg-black text-white rounded-md py-1 px-4">
              back
            </button>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Articles;
