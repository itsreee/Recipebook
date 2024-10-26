
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRecipe } from '../Redux/Slices/recipieSlice';

const Header = ({ insideHome }) => {
  const dispatch = useDispatch();

  return (
    <nav className="d-flex flex-wrap bg-primary fixed w-100 p-3">
      <Link className="text-white text-decoration-none fs-5 me-auto" to="/">
        <i className="fa-solid fa-utensils me-1"></i>
        RecipieBook
      </Link>
      {insideHome && (
        <div className="flex-grow-1 d-flex justify-content-end">
          <input
            onChange={e => dispatch(searchRecipe(e.target.value.toLowerCase()))}
            className="rounded p-2"
            type="text"
            placeholder="Search Recipe"
            style={{ width: '300px' }}
          />
        </div>
      )}
    </nav>
  );
};

export default Header;
