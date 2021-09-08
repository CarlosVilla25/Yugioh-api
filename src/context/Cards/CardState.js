import { useReducer } from 'react';
import CardContext from './CardContext';
import CardReducer from './CardReducer';
const axios = require('axios').default;

const CardState = (props) => {

  const initialState = {
    cards: [],
    selectedCard: ''
  };

  const [state, dispatch] = useReducer(CardReducer, initialState);

  const getCards = async () => {
    try {
      const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php');
      dispatch({
        type: 'GET_CARDS',
        payload: response.data.data
      });
    } catch (error) { console.warn(error) }
  };

  const getOneCard = async (card) => {
    try {
      const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${card}`);
      dispatch({
        type: 'GET_ONE_CARD',
        payload: response.data.data
      });
    } catch (error) { console.warn(error) }
  };

  return (
    <CardContext.Provider value={{
      cards: state.cards,
      selectedCard: state.selectedCard,
      getCards,
      getOneCard
    }}>
      {props.children}
    </CardContext.Provider>
  );
};

export default CardState;
