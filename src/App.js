import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/Homepage/HomePage';
import Login from './pages/Login/Login';
import Nav from './components/Nav';
import Join from './pages/Join/Join';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Join">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Nav" component={Nav} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Join" component={Join} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;