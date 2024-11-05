import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './CostomDrower';
import Chats from './Chats';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Bar from 'react-native-vector-icons/FontAwesome5';

const DrowerNavigate = () => {
  const Drower = createDrawerNavigator();
  return (
    <Drower.Navigator drawerContent={CustomDrawerContent}>
      <Drower.Screen
        name="Chats"
        component={Chats}
        options={{
          title: 'Chats',
          headerTintColor: '#30d',
          // eslint-disable-next-line react/no-unstable-nested-components
          headerRight: () => {
            return (
              <TouchableOpacity style={style.Icons}>
                <Bar name="pen" color={'#404'} size={20} />
              </TouchableOpacity>
            );
          },
        }}
      />
    </Drower.Navigator>
  );
};

const style = StyleSheet.create({
  Icons: {
    paddingRight: 25,
  },
});

export default DrowerNavigate;
