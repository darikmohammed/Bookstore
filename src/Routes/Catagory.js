import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoryStatus } from '../redux/categories/categories';
import Nav from '../Components/Nav';
import './Styles/Category.css';

function Catagory() {
  const value = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const handleStatusClick = () => {
    dispatch(categoryStatus());
  };
  return (
    <div>
      <Nav />
      <div className="body-container">
        <button type="button" className="btn" onClick={handleStatusClick}>
          Check Status
        </button>
        <h2 className="category">{value}</h2>
      </div>
    </div>
  );
}

export default Catagory;
