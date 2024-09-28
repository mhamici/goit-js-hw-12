import axios from 'axios';

export const returnPromise = (q, page) => {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '46086824-2983fdd94aba44351510a0e76',
      q,
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: '15',
    },
  });
};