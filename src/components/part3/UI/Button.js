import classes from '../css/Button.module.css';

/* 재사용 가능한 버튼 */
const Button = props => {
  return (
    <button className={classes.button} type={props.type || 'button'}
    onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
