import { StatusBar } from 'expo-status-bar';
import backgroundImg from '../../assets/background.png'
import {Container,Title,Slogan} from '../Home/styles'
import { Button } from '../../components/Button';



export default function Home() {
  return (
    <Container source={backgroundImg}>
      <Title>
        Ingnite Flreet
      </Title>
      <Slogan>
        Gestao de uso de veiculo
      </Slogan>
      <Button title="Entrar com Google"/>

    </Container>
  );
}
