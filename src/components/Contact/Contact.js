import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import css from './Contact.module.css';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <>
      <div className={css.container}>
          <span className={css.icon}> <FaUserAlt className={css.icon_svg} /> </span>
          <p className={css.name}>{name}:</p>
          <p className={css.number}>{number}</p>
          <button className={css.button} type="button" onClick={() => onDelete(id)}> <FaTrashAlt className={css.button_icon} /></button>
      </div>
    </>
  )
}