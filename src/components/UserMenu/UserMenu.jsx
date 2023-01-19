import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';
import { useAuth } from '../../hooks/useAuth';
import { Div, Btn } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Div>
      <p>Welcome, {user.name}!</p>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </Div>
  );
};
