import React, { useState } from 'react';
import './Pagination.css';
import RenderModal from './RenderModal';

interface Props {
  response: any;
}

const Pagination = (props: Props) => {
  const [pageNumber, setPage] = useState<Number>(1);
  const pageSize = 4;

  const { response } = props;
  const displayKeys = Object.keys(response);
  let i = displayKeys.indexOf('Ratings');
  displayKeys.splice(i, 1);

  const indexOfLastPost = (pageNumber as number) * pageSize;
  const indexOfFirstPost = indexOfLastPost - pageSize;
  const currentPosts = displayKeys.slice(indexOfFirstPost, indexOfLastPost);

  let pageNumbers = [];
  for (let x = 1; x <= Math.ceil(displayKeys.length / pageSize); x++) {
    pageNumbers.push(x);
  }

  const paginate = (page: Number) => setPage(page);
  return (
    <div>
      <ul className='list-group' style={{ marginTop: 20 }}>
        {currentPosts.map((value) => (
          <li key={value} className='list-group-item'>
            <b>{value}</b> : {response[value]}{' '}
          </li>
        ))}
      </ul>

      <div className='container' style={{ marginTop: 10 }}>
        <nav>
          <ul className='pagination justify-content-center'>
            {pageNumbers.map((value) => (
              <li key={value} className='page-item'>
                <a
                  href='!#'
                  onClick={() => paginate(value)}
                  className='page-link'
                >
                  {value}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <RenderModal response={response} />;
      </div>
    </div>
  );
};

export default Pagination;
