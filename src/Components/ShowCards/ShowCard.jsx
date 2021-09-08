import CardMedia from '@material-ui/core/CardMedia';
import { useState } from 'react';
import TransitionsModal from '../Modal/TransitionsModal';
import './ShowCards.css';

const ShowCard = ({
  img,
  name
}) => {

  const [openModal, setOpenModal] = useState(false);

  const showOneCard = () => {
    setOpenModal(true);
  }

  return (
    <>
      <TransitionsModal
        img={img}
        name={name}
        setOpenModal={setOpenModal}
        showModal={openModal}
      />
      <CardMedia
        className='card-yugi-img'
        component='img'
        image={img}
        onClick={showOneCard}
        style={{ width: '70%' }}
        title={name}
      />
    </>
  );
};

export default ShowCard;
