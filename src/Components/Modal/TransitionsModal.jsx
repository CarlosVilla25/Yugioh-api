import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CardMedia from '@material-ui/core/CardMedia';
import Fade from '@material-ui/core/Fade';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const TransitionsModal = ({ showModal, name, img, setOpenModal }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        BackdropProps={{
          timeout: 500
        }}
        BackdropComponent={Backdrop}
        className={classes.modal}
        closeAfterTransition
        onClose={handleClose}
        open={showModal}
      >
        <Fade in={showModal}>
          <CardMedia
            component='img'
            image={img}
            style={{ width: '40vh' }}
            title={name}
          />
        </Fade>
      </Modal>
    </div>
  );
};

export default TransitionsModal;
