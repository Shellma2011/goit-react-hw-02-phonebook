// import { number } from 'prop-types';
import React, { Component } from 'react';
import shortid from 'shortid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();

  handleChange = e => {
    const { name, number, value } = e.currentTarget;
    this.setState({
      [name]: value,
      [number]: value,
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    console.log(this.state.name);
    console.log(this.state.number);
    console.log(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label htmlFor={this.nameInputId}>
          Имя
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>

        <label htmlFor={this.telInputId}>
          Телефон
          <input
            id={this.telInputId}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit">Добавить контакт</button>
      </form>
    );
  }
}

export default ContactForm;
