import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import RenderPoster from './RenderPoster';
import Pagination from './Pagination';

const axios = (window as any).axios;

interface Props {
  movie: string;
  year: number;
}

interface RootState {
  tab: number;
}

const MovieRequest = (props: Props) => {
  const [response, setResponse] = useState({ info: '' });
  const { movie, year } = props;
  const key = '9817c415';
  const currentTab = useSelector((state: RootState) => state.tab);
  // console.log('current tab is', currentTab);
  console.log(movie, year);
  var renderDisplay;
  if (currentTab === 1) {
    renderDisplay = (
      <div>
        <Pagination response={response.info} />
      </div>
    );
  } else {
    renderDisplay = <RenderPoster response={response.info} />;
  }

  useEffect(() => {
    const apiUrl = `http://www.omdbapi.com/?t=${movie}&y=${year}&apikey=${key}`;
    if (movie && year) {
      axios
        .get(apiUrl)
        .then((res: any) => setResponse({ ...response, info: res.data }))
        .catch((error: any) => console.log(error));
    }
  }, [movie, year]);

  return <div>{renderDisplay}</div>;
};

export default MovieRequest;
