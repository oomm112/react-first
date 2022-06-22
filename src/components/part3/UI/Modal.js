import Card from './Card';
import Button from './Button';
import classes from '../css/Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop = props => {
  return <div className={classes.backdrop} onClick={props.onConfirm}/>;
}

const ModalOverlay = props => {
  return(
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Ok</Button>
      </footer>
    </Card>
  );
}

function Modal(props){
  return(
    <>
    //portal 사용하여 root가아닌 최상단에 띄움  ReactDOM
      {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <ModalOverlay onConfirm={props.onConfirm}
        title={props.title} message={props.message}
        />, document.getElementById('modal-overlay'))}
    </>
  );
}

export default Modal;
