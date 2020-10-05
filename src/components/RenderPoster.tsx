import React from 'react';

interface Props {
  response: any;
}
const RenderPoster = (props: Props) => {
  const { response } = props;
  const displayKeys = Object.keys(response);
  let i = displayKeys.indexOf('Ratings');
  displayKeys.splice(i, 1);

  return (
    <div style={{ marginTop: 40 }}>
      <img src={response.Poster} alt='Movie Poster' />

      <div style={{ marginTop: 20 }}>
        {displayKeys.map((value, index) => (
          <p key={value}>
            <b>{value}</b> : {response[value]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RenderPoster;
