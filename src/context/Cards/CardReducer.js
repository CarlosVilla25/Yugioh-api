import { GET_CARDS, GET_ONE_CARD } from '../types';

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'GET_CARDS':
      return {
        ...state,
        cards: payload
      };
    case 'GET_ONE_CARD':
      return {
        ...state,
        selectedCard: payload
      };
    default:
      return state;
  };
};
