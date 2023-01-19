import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

export default function Tasks() {
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.contacts)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {status === 'loading' && <Loader/>}
      <Form/>
      <Filter/>
      <ContactsList />
    </>
  );
}