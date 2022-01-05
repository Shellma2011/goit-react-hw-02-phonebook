import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // contacts: [],
    // name: '',
    // number: '',
  };

  // formSubmitHandler = data => console.log(data);
  // handleNumberChange = e => {
  //   this.setState({ number: e.target.value });
  // };

  addContact = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { filter } = this.state;
    // const newContacts = this.addContact();

    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        {/* <h1>Phonebook</h1> */}
        <ContactForm onSubmit={this.addContact} />
        {/* <h2>Contacts</h2> */}
        <Filter value={filter} onChange={this.changeFilter} />
        {/* <label>
          Фильтр по имени
          <input type="text" value={filter} onChange={this.changeFilter} />
        </label> */}

        {/* <ContactList items={contacts} /> */}
        <ContactList items={visibleContacts} onDeleteContact={this.deleteContact} />
        {/* <ul>
          {this.state.contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{number}</p>
            </li>
          ))}
        </ul> */}
      </div>
    );
  }
}

export default App;
