import React, { useState, useEffect } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=99beb82d683c4cc1a2381c083bf3e0fe&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(50);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `Navee news - ${props.category}`;
    updateNews();
  }, [page]);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  return (
    <>
      <h1 className="text-center text-danger">Live Now</h1>
      {loading && <Spinner />}
      <div className="container mt-3">
        <div className="row">
          {!loading && articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItems
                title={element.title}
                description={element.description}
                url={element.urlToImage}
                LinkUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            className="btn btn-success"
            disabled={page <= 1}
            onClick={handlePrev}
          >
            &laquo; Prev
          </button>
          <button
            className="btn btn-success"
            disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
            onClick={handleNext}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country: 'in',
  pageSize: 30,
  category: 'general',
};

News.propTypes = {
  country: PropTypes.string.isRequired,
  pageSize: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
