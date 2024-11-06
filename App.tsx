import {NavigationContainer} from '@react-navigation/native';
import React, {createContext, useState} from 'react';
import DrowerNavigate from './components/DrowerNavigate';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from './components/Search';

import SearchBox from './components/SearchBox';
export const Dalivari = createContext({});
const App = () => {
  const [them, setThem] = useState(false);

  const Stack = createNativeStackNavigator();

  return (
    <Dalivari.Provider value={{them, setThem}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="DrowerNavigate"
            component={DrowerNavigate}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{
              // eslint-disable-next-line react/no-unstable-nested-components
              headerTitle: () => <SearchBox />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Dalivari.Provider>
  );
};

export default App;
