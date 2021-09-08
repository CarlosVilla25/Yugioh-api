import React, { useContext, useEffect, useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button';
import CardContext from '../../context/Cards/CardContext'
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/container';
import TextField from '@material-ui/core/TextField';
import TransitionsModal from '../../Components/Modal/TransitionsModal';
import './search.css';

const Search = () => {
  const [cardImg, setCardImg] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [searchCard, setSearchCard] = useState(null);
  const { cards, getCards } = useContext(CardContext);

  useEffect(() => {
    getCards();
  }, [])

  const showOneCard = (value) => {
    const findCard = cards.find((ele) => ele.name === value);
    setCardImg(findCard.card_images[0].image_url);
    setOpenModal(true);
  }

  const handleChange = (e, newValue) => {
    setSearchCard(newValue);
  }

  const handleClick = () => {
    if (!searchCard) {
      setOpenAlert(true);
      setTimeout(() => {
        setOpenAlert(false)
      }, 3000);
    } else {
      showOneCard(searchCard.name);
    }
  }

  return (
    <>
      <Container className='search-container'>
        <TransitionsModal
          img={cardImg}
          setOpenModal={setOpenModal}
          showModal={openModal}
        />
        <Autocomplete
          className='search-container-autocomplete'
          id='combo-box-demo'
          getOptionLabel={({ name }) => name}
          options={cards}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} className='search-container-textfields' label='Cards' color='primary' variant='outlined' margin='dense' />}
          style={{ marginBottom: '30px' }}
          value={searchCard}
        />
        <Button
          className='search-button'
          color='primary'
          onClick={handleClick}
          variant='contained'
        >
          Search
        </Button>
        <Collapse in={openAlert} className='search-container-collapse'>
          <Alert severity='warning'>
            Please enter a valid name
          </Alert>
        </Collapse>
      </Container>
    </>
  );
}

export default Search;
