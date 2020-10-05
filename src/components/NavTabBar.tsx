import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTab1, changeTab2 } from '../redux/tabs/tabAction';

interface RootState {
  tab: number;
}
const NavTabBar = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav className='navbar navbar-light bg-light'>
        <h5>Tabs</h5>
        <button
          className='btn btn-outline-success my-2 my-sm-0'
          type='button'
          onClick={() => dispatch(changeTab1())}
        >
          Tab 1
        </button>
        <button
          className='btn btn-outline-success my-2 my-sm-0'
          type='button'
          onClick={() => dispatch(changeTab2())}
        >
          Tab 2
        </button>
      </nav>
    </div>
  );
};

export default NavTabBar;
