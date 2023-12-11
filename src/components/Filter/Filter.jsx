import { useDispatch } from "react-redux";
import { addFilter } from "components/redux/mySliceFilter";

const Filter = () => {

  const dispatch = useDispatch();
  const changeFilter = event => {
    const filter = event.currentTarget.value;

    dispatch(addFilter(filter));

  };
  return (
    <div>
      <h3 style={{ fontSize: 30 }}>Find contacts by name</h3>
      <input
        type="text"
        name="name"

        onChange={changeFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </div>
  );
};

export default Filter;
