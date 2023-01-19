import { useDispatch } from 'react-redux';
import { InputField, Text } from './Filter.styled';
import { filterContact } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch()
  return (
    <>
      <Text>Find contacts by name</Text>
      <InputField
        placeholder="Type contact"
        type="text"
        onChange={e => {
          const action = filterContact(e.target.value);
          dispatch(action);
        }}
      />
    </>
  );
};
