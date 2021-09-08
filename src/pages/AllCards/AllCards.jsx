import { useEffect, useState, useContext } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import CardContext from '../../context/Cards/CardContext';
import Loading from '../../Components/Loading/Loading';
import ShowCard from '../../Components/ShowCards/ShowCard';
import './all-cards.css';

const AllCards = () => {

  const { cards, getCards } = useContext(CardContext);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    getCards();
  }, []);

  const cardsPerPage = 8;
  const pagesVisited = pageNumber * cardsPerPage;

  const displayCards = !cards.length ? <Loading /> : cards
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((elem) => {
      return (
        <Grid
          item
          xs={3}
          md={3}
          lg={3}
          key={elem.id}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <ShowCard
            description={elem.desc}
            id={elem.id}
            img={elem.card_images[0].image_url}
            name={elem.name}
          />
        </Grid>
      );
    });

  return (
    <>
      <Container
        className='all-card-container'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}
      >
        <Grid
          className='grid-card-container'
          container
          spacing={2}
        >
          {displayCards}
        </Grid>
        <Pagination
          siblingCount={7}
          className='pagination-container'
          count={cards ? Math.ceil(cards.length / 8) : 10}
          color='secondary'
          onChange={(_, value) => setPageNumber(value - 1)}
          variant='outlined'
          size='large'
        />
      </Container>
    </>
  );
};

export default AllCards;