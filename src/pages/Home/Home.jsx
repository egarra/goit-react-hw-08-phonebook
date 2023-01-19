import { Container, Text } from './Home.styled';
import { selectIsLoggedIn, selectUser } from 'redux/selectors';
import { useSelector } from 'react-redux';

export default function Home() {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Container>
      {isLoggedIn ? (
        <h1>Hello, {user.name}! Click "contacts" to see your profile!</h1>
      ) : (
        <>
          <h1>
          Welcome to contact manager page! 
        </h1>
        <Text>First time here?</Text>
        <Text>Use our registration form and become our client!</Text>
        <Text>Already our client? Then to login form!</Text>
        </>
      )}
    </Container>
  );
}
