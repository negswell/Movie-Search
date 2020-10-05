import React, { Component } from 'react';
import MovieRequest from './MovieRequest';
// const axios = window.axios;

interface State {
  movie: string;
  year: number;
  responseData: any;
}
interface Props {}

class MovieForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { movie: '', year: 0, responseData: '' };
  }

  HandleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    this.setState(
      {
        year: (e.target as HTMLFormElement).year.value,
        movie: (e.target as HTMLFormElement).movie.value,
      },
      () => console.log(this.state)
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.HandleFormSubmit(e)}>
          <div className='form-group col-md-auto'>
            <label htmlFor='movieName'>Enter Movie Name </label>
            <input
              type='text'
              className='form-control'
              id='movieName'
              name='movie'
            ></input>
          </div>
          <div className='form-group col-md-auto'>
            <label htmlFor='movieYear'>Enter Year</label>
            <input
              type='number'
              className='form-control'
              id='movieYear'
              name='year'
            ></input>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
        {this.state.movie.length > 0 ? (
          <MovieRequest movie={this.state.movie} year={this.state.year} />
        ) : null}
      </div>
    );
  }
}

export default MovieForm;
