import ArrowDownIcon from '../Icons/ArrowDownIcon';
import style from './Select.module.css';

const Select = ({ label, className, ...props }) => (
  <label>
    {label && <div className={style.label}>{label}</div>}
    <div className={`${style.wrapper} ${className || ''}`}>
      <select {...props} className={style.select}></select>
      <ArrowDownIcon className={style.icon} />
    </div>
  </label>
);

export default Select;
