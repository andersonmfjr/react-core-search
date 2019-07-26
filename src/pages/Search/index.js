import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

import queryString from 'querystring';

import Header from '../../components/Header';
import TotalHits from '../../components/TotalHits';
import Loading from '../../components/Loading';
import Article from '../../components/Article';

import api from '../../config/api';

import { Container, Articles, PaginateContainer } from './styles';

export default function Search({ history, location: { search } }) {
  const [searchQuery, setSearchQuery] = useState(
    queryString.parse(search)['?q']
  );
  const [results, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(null);
  const [pages, setPages] = useState(null);
  const [activePage, setActivePage] = useState(1);

  const handleSearchQuery = useCallback(
    e => {
      setSearchQuery(e.target.value);
    },
    [searchQuery]
  );

  const fetchData = async (page = 1) => {
    try {
      setActivePage(page - 1);
      const pageSize = 10;
      setLoading(true);

      const query = queryString
        .stringify(queryString.parse(searchQuery))
        .replace('%3Fq=', '');

      const response = await api.get(
        `/${query}?page=${page}&pageSize=${pageSize}&apiKey=SmXOBkHGEQ72bVZRhfM9NTgw3njI1KFP`
      );

      setResult(response.data.data);
      setTotalHits(response.data.totalHits);
      setPages(Math.ceil(response.data.totalHits / pageSize));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handlePageClick = data => {
    const { selected } = data;
    fetchData(selected + 1);
  };

  const getQuery = () => {
    if (searchQuery.length > 0) {
      history.replace({ search: `?q=${searchQuery}` });
      fetchData();
    } else {
      alert('Please fill the field.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderData = () => {
    if (loading) {
      return <Loading />;
    }

    return (
      <>
        <TotalHits results={totalHits} />
        <Articles>
          {results.map(result => (
            <Article
              key={result._id}
              id={result._id}
              title={result._source.title}
              description={result._source.description}
              type={result._type}
              authors={result._source.authors}
              urls={result._source.urls}
            />
          ))}
        </Articles>
        <PaginateContainer>
          <ReactPaginate
            pageCount={pages}
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel="..."
            breakClassName="break-me"
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            forcePage={activePage}
            onPageChange={handlePageClick}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
          />
        </PaginateContainer>
      </>
    );
  };

  return (
    <>
      <Header
        searchQuery={searchQuery}
        handleSearchQuery={handleSearchQuery}
        search={getQuery}
      />
      <Container>{renderData()}</Container>
    </>
  );
}

Search.defaultProps = {
  location: {
    search: '',
  },
};

Search.propTypes = {
  history: PropTypes.shape().isRequired,
  location: PropTypes.shape({ search: PropTypes.string }),
};
