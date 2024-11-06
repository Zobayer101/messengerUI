// components/CustomDrawerContent.js
import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Settings from 'react-native-vector-icons/AntDesign';
import Stor from 'react-native-vector-icons/FontAwesome5';
import Comments from 'react-native-vector-icons/FontAwesome';
import People from 'react-native-vector-icons/MaterialIcons';
import Plus from 'react-native-vector-icons/AntDesign';

const CustomDrawerContent = () => {
  const Navigator = useNavigation();
  return (
    <DrawerContentScrollView contentContainerStyle={styles.container}>
      {/* Drawer Header */}

      <View style={styles.ProfileSettings}>
        <View style={styles.ProfileCover}>
          <Image
            source={require('./IMG/bdc718c491ff89cb6c18377c8f1026f0.jpg')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.NameSection}>
          <Text style={styles.textSize}>mdzobayer</Text>
        </View>
        <TouchableOpacity style={styles.iCon}>
          <Settings name="setting" size={20} color={'#222'} />
        </TouchableOpacity>
      </View>

      {/* Drawer Header */}

      <View style={styles.ProfileSettings}>
        <View style={styles.ProfileCover}>
          <Comments name="comment" size={20} color={'#222'} />
        </View>
        <View style={styles.NameSection}>
          <Text style={styles.textSize}>Chats</Text>
        </View>
        <TouchableOpacity style={styles.iCon} />
      </View>

      {/* Drawer Header */}

      <View style={styles.ProfileSettings}>
        <View style={styles.ProfileCover}>
          <Stor name="store" size={20} color={'#222'} />
        </View>
        <View style={styles.NameSection}>
          <Text style={styles.textSize}>Marketplace</Text>
        </View>
        <TouchableOpacity style={styles.iCon} />
      </View>

      {/* Drawer Header */}

      <View style={styles.ProfileSettings}>
        <View style={styles.ProfileCover}>
          <Comments name="commenting" size={20} color={'#222'} />
        </View>
        <View style={styles.NameSection}>
          <Text style={styles.textSize}>Message requests</Text>
        </View>
        <TouchableOpacity style={styles.iCon} />
      </View>

      {/* Drawer Header */}

      <View style={styles.ProfileSettings}>
        <View style={styles.ProfileCover}>
          <Comments name="archive" size={20} color={'#222'} />
        </View>
        <View style={styles.NameSection}>
          <Text style={styles.textSize}>Archive</Text>
        </View>
        <TouchableOpacity style={styles.iCon} />
      </View>

      <View>
        <Text style={styles.simpleText}>More</Text>
      </View>
      {/* Drawer Header */}

      <View style={styles.ProfileSettings}>
        <View style={styles.ProfileCover}>
          <People name="people" size={20} color={'#222'} />
        </View>
        <View style={styles.NameSection}>
          <Text style={styles.textSize}>Archive</Text>
        </View>
        <TouchableOpacity style={styles.iCon} />
      </View>

      <View>
        <Text style={styles.simpleText}>Communities</Text>
      </View>
      {/* Drawer Header */}

      <View style={styles.ProfileSettings}>
        <View style={styles.ProfileCover}>
          <Plus name="plus" size={20} color={'#222'} />
        </View>
        <View style={styles.NameSection}>
          <Text style={styles.textSize}>Archive</Text>
        </View>
        <TouchableOpacity style={styles.iCon} />
      </View>

      {/* <View style={styles.ProfileSettings}>
        
        <Text>mdzobayer</Text>
      </View> */}

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
    // backgroundColor: '#f89',
    flexDirection: 'row',
  },
  ProfileCover: {
    width: 65,
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  iCon: {
    width: 50,
    height: '100%',

    alignItems: 'center',
    justifyContent: 'center',
  },
  NameSection: {
    height: '100%',
    width: 160,
    justifyContent: 'center',
  },
  textSize: {
    fontSize: 17,
    fontWeight: '500',
  },
  simpleText: {
    fontSize: 17,
    marginLeft: 18,
  },
});

export default CustomDrawerContent;
