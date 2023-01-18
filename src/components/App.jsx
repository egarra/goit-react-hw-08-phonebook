import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Contacts } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { useEffect, lazy} from 'react';
import { refreshUser } from 'redux/operations';
import { Layout } from './Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
  /* const { status } = useSelector(state => state.contacts)
  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      {status === 'loading' && <Loader/>}
      <Section title="Contacts">
        <Filter/>
      <Contacts/>
      </Section>
    </>
  ); */
};
