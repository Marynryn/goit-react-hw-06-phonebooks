import css from '../Contact/Contact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/mySlice';

const Contact = () => {
  const contacts = useSelector(state => state.myValue.contacts);
  const myFilter = useSelector(state => state.myFilter.filter)
  console.log(myFilter)
  const dispatch = useDispatch()
  const formatNumber = number => {
    return number.replace(/(\d{3})(\d{2})(\d{2})/, `$1-$2-$3`);
  };

  const visibleContacts = () => {
    const normalizeFilter = myFilter.toLowerCase()
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
  }
  const filterName = visibleContacts();
  return (
    <ul className={css.list}>
      {filterName.map((contact, id) => (
        <li key={id} className={css.contact}>
          {contact.name}: {formatNumber(contact.number)}{' '}
          <button
            type="button"
            className={css.button_delete}
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
};
export default Contact;
