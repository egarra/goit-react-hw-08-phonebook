import { Container } from "./Home.styled";
import { useAuth } from 'hooks/useAuth';

export default function Home() {
  const { isLoggedIn } = useAuth();
    return (
      <Container>
        {isLoggedIn ? <h1>
          Hello! Click to contacts to see your profile!
        </h1> : <h1>Welcome to contact manager page! First time here? Use our registration form and become our client! Already our client? Then to login form!</h1>}
      </Container>
    );
  }