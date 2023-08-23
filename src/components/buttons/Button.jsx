import { KIND_CLASSNAMES } from '../../constants/buttonClassnames';
import style from './Button.module.css';

const Button = ({ kind = 'secondary', className, ...props }) => {
  return (
    <button
      {...props}
      className={`${style.button} ${KIND_CLASSNAMES[kind]} ${className}`}
    ></button>
  );
};

export default Button;
