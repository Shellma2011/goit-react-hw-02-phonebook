import React from 'react';

// export default function ContactList = ({ contacts }) => (
//   <ul>
//     {contacts.map(({ id, name, number }) => (
//       <li key={id}>
//         <p>{name}</p>
//         <p>{number}</p>
//       </li>
//     ))}
//   </ul>
// );

// export default ContactList;
//-------
export default function ContactList({ items, onDeleteContact }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <p>{item.name + ':'}</p>
          <p>{item.number}</p>
          <button type="button" onClick={() => onDeleteContact(item.id)}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
