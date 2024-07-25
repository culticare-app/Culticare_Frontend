import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/Homepage/HomePage';
import Login from './pages/Login/Login';
import Nav from './components/Nav';
import Join from './pages/Join/Join';
import Comm from './pages/Community/Comm';
import CommSearch from './pages/Community/CommSearch';
import Info from './pages/Info/Info';
import Mypage from './pages/Mypage/Mypage';
import MypageMemeber from './pages/Mypage/MypageMemeber';
import CommPost from './pages/Community/CommPost';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Mypage">
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Nav" component={Nav} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Join" component={Join} />

        <Stack.Screen name="Community" component={Comm} />
        <Stack.Screen name="CommunityPost" component={CommPost} />
        <Stack.Screen name="CommunitySearch" component={CommSearch} />

        <Stack.Screen name="Mypage" component={Mypage} />
        <Stack.Screen name="MemberInfo" component={MypageMemeber} />
        <Stack.Screen name="MypageShare" component={Mypage} />

        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
