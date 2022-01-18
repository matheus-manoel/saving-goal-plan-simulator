import { Container } from './styles';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';

export default function Header(): JSX.Element {
  return (
    <Container>
      <Logo />
    </Container>
  );
}
