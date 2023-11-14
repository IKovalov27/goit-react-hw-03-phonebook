import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired,
    };
  
    state = {
      name: '',
      number: '',
    };
  
    handleChange = e => {
      const { name, value } = e.currentTarget;
      this.setState({ [name]: value });
    };

    reset = () => {
      this.setState({ name: '', number: '' });
    };  
  
    handleSubmit = event => {
        event.preventDefault();
    
        const { onSubmit, isNameHas } = this.props;
        const { name } = this.state;
    
        if (isNameHas(name)) {
          alert(`${name} is already in contacts.`);
          return;
        }
    
        const data = {
          ...this.state,
        };
    
        onSubmit(data);
    
        this.reset();
    };
    
  
    render() {
      const { name, number } = this.state;
  
      return (
        <form className={css.form} onSubmit={this.handleSubmit}>
          <label className={css.label}>
            <span className={css.title}>Name</span>
            <input
              className={css.input}
              onChange={this.handleChange}
              type="text"
              name="name"
              value={name}
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
          </label>
          <label className={css.label}>
            <span className={css.title}>Number</span>
            <input
              className={css.input}
              onChange={this.handleChange}
              type="tel"
              name="number"
              value={number}
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              required
            />
          </label>
          <button className={css.button} type="submit">Add contact</button>
        </form>
      );
    }
}