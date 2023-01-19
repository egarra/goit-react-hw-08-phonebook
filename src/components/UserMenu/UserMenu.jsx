import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { Div, Btn } from './UserMenu.styled';
import { selectUser } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <Div>
      <p>Welcome, {user.name}!</p>
      <Btn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Btn>
    </Div>
  );
};
