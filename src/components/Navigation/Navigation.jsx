import { NavigationLink } from './Navigation.styled';
import { useAuth } from '../../hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
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