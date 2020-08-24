import axios from 'axios';

export const fetchCategory = () => async dispatch => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(resp);
    dispatch({ type: 'FETCH_CATEGORY', payload : resp })
  }

export const fetchTag = () => async dispatch => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(resp);
    dispatch({ type: 'FETCH_TAG', payload : resp })
  }

//for scroll more

  export const fetchMoreCategory = () => async dispatch => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(resp);
    dispatch({ type: 'FETCH_MORE_CATEGORY', payload : resp })
  }

export const fetchMoreTag = () => async dispatch => {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(resp);
    dispatch({ type: 'FETCH_MORE_TAG', payload : resp })
  }