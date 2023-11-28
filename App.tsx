import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import Home from './src/escreens/Home';
import theme from './src/theme';
import {Loading} from './src/components/loading'
import { StatusBar } from 'react-native';

import {ANDROID_CLIENT_ID} from '@env'


export default function App() {
  const [fontsLoade] = useFonts({Roboto_400Regular,Roboto_700Bold})

  if(!fontsLoade){
    return(
        <Loading/>
    );
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar  barStyle="light-content" backgroundColor="transparent" translucent />
       <Home/>
    </ThemeProvider>
    
  );
}

