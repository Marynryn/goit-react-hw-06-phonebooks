
import Form from '../components/Form/Form';
import Filter from './Filter/Filter';
import { ListContacts } from './ListContacts/ListContacts';



export function App() {
  return (
    <div
      style={{
        padding: 50,
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1 style={{ fontSize: 48 }}>Phonebook</h1>
      <Form />
      <h2 style={{ fontSize: 46 }}>Contacts</h2>
      <Filter />
      <ListContacts />
    </div>
  );
}

