import { NavigationLink, NavWrapper} from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <NavWrapper>
      <NavigationLink to="/register">
        Register
      </NavigationLink>
      <NavigationLink to="/login">
        Log In
      </NavigationLink>
    </NavWrapper>
  );
};
