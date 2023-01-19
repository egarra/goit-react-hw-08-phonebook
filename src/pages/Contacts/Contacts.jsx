import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { fetchContacts } from 'redux/operations';
import { selectStatus } from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

export default function Tasks() {
  const dispatch = useDispatch();
  const {status} = useSelector(state => state.contacts)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  console.log(status)
  return (
    <>
      {/* <Helmet>
        <title color='white'>Your contacts</title>
      </Helmet> */}
      {status === 'loading' && <Loader/>}
      <Form/>
      <Filter/>
      <ContactsList />
    </>
  );
}