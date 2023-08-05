import style from './IconButton.module.css';

const CLASSNAMES = {
  regular: style.regular,
  error: style.error,
};

const IconButton = ({ kind = 'regular', icon: Icon, className, ...props }) => {
  const kindClassName = CLASSNAMES[kind];

  return (
    <button
      {...props}
      className={`${style.button} ${kindClassName} ${className}`}
    >
      <Icon className={style.icon}></Icon>
    </button>
  );
};

export default IconButton;
