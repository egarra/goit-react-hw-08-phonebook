import { Container } from "./Home.styled";

export default function Home() {
    return (
      <Container>
        <h1>
          Welcome to contact manager page! First time here? Use our registration form and become our client!{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </Container>
    );
  }