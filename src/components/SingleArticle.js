import React from 'react';
import { Link } from 'react-router-dom';
import Data from '../data';

function SingleArticle(props) {
  var { slug } = props.match.params;
  var eachdata = Data.filter((each) => {
    return each.slug === slug;
  });

  return (
    <>
      <div className="w-full">
        {eachdata.map((article) => (
          <div mt-6 py-4>
            <h2 className="text-2xl">{article.title}</h2>
            <h2 className="text-2xl">{article.author}</h2>
            <h3 className="text-2xl">{article.slug}</h3>
            <Link to="/articles">
              <button className="py-2 px-3 border mt-6 rounded-md">Back</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default SingleArticle;
