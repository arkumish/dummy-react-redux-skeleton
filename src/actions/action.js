import axios from 'axios';

export const fetchCategory = (limit=12,offset=0) => async dispatch => {
    const resp = await axios.get(`https://cors-anywhere.herokuapp.com/https://yourstory.com/api/v2/category/stories?brand=yourstory&slug=ys-startup&limit=${limit}&offset=${offset}`);

    console.log(resp);
    dispatch({ type: 'FETCH_CATEGORY', payload : resp })
  }

export const fetchTag = (limit=12,offset=0) => async dispatch => {
    const resp = await axios.get(`https://cors-anywhere.herokuapp.com/https://yourstory.com/api/v2/tag/stories?brand=yourstory&slug=fintech-startup&limit=${limit}&offset=${offset}`);

    console.log(resp);
    dispatch({ type: 'FETCH_TAG', payload : resp })
  }

//for scroll more

  export const fetchMoreCategory = (limit,offset) => async dispatch => {
    const resp = await axios.get(`https://yourstory.com/api/v2/category/stories?brand=yourstory&slug=ys-startup&limit=${limit}&offset=${offset}`);
    console.log(resp);
    dispatch({ type: 'FETCH_MORE_CATEGORY', payload : resp })
  }

export const fetchMoreTag = (limit,offset) => async dispatch => {
    const resp = await axios.get(`https://yourstory.com/api/v2/category/stories?brand=yourstory&slug=ys-startup&limit=${limit}&offset=${offset}`);
    console.log(resp);
    dispatch({ type: 'FETCH_MORE_TAG', payload : resp })
  }