import yugiImg from '../../img/yugi.png';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
      <h1>Yugioh<br />Api</h1>
      <img src={yugiImg} alt='yugioh api' />
    </div>
  );
};

export default Home;
