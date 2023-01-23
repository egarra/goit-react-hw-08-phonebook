import { useSelector } from 'react-redux';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Loader } from 'components/Loader/Loader';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { selectStatus } from 'redux/selectors';

export default function Contacts() {
  const status = useSelector(selectStatus);

  return (
    <>
      {status === 'loading' && <Loader/>}
      <Form/>
      <Filter/>
      <ContactsList />
    </>
  );
}