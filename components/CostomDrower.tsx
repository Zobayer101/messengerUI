// components/CustomDrawerContent.js
import React from 'react';
import {Button, StyleSheet, Alert, View, Text, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';

const CustomDrawerContent = () => {
  const Navigator = useNavigation();
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      {/* Drawer Header */}
      <View style={styles.ProfileSettings}>
        <Image
          source={require('./IMG/bdc718c491ff89cb6c18377c8f1026f0.jpg')}
          style={styles.profileImage}
        />
        <Text>mdzobayer</Text>
        <Text>I</Text>
      </View>
      <DrawerItem label={'First Item'} onPress={() => ''} />

      {/* Drawer Items */}
      <DrawerItem label="Home" onPress={() => Alert.alert('Home')} />
      <DrawerItem label="Settings" onPress={() => Alert.alert('Setting')} />

      {/* Logout Button or Other Actions */}
      <Button
        title="Logout"
        color="#e74c3c"
        onPress={() => Navigator.navigate('Search')}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#3498db',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  ProfileSettings: {
    width: '100%',
    height: 70,
    backgroundColor: '#f89',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CustomDrawerContent;
