import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDelete }) => {
    return (
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    );
};