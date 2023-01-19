import { NavigationLink } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn)
  return (
    <nav>
      <NavigationLink to="/">
        Home
      </NavigationLink>
      {isLoggedIn && (
        <NavigationLink to="/contacts">
          Contacts
        </NavigationLink>
      )}
    </nav>
  );
};