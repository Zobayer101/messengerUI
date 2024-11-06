import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const Search = () => {
  return (
    <ScrollView>
      {/* Name chat Items */}
      <View style={style.ChatList}>
        <Image
          source={require('./IMG/44809dcc8ed40597f38745eca105fe96.jpg')}
          style={[style.ItemImage]}
        />
        <View style={style.ActiveChat} />
        <View style={style.ItemBoxName}>
          <Text style={style.ItemName}>Image</Text>
        </View>
      </View>
      {/* Name chat Items */}
      <View style={style.ChatList}>
        <Image
          source={require('./IMG/a5bb6528f574791d43b64421cfc3273d.jpg')}
          style={[style.ItemImage]}
        />
        <View style={style.ItemBoxName}>
          <Text style={style.ItemName}>Image</Text>
          <Text>date time 9:10</Text>
        </View>
      </View>
      {/* Name chat Items */}
      <View style={style.ChatList}>
        <Image
          source={require('./IMG/fed2158f63d75762c81723f9b0ccb2a0.jpg')}
          style={[style.ItemImage]}
        />
        <View style={style.ItemBoxName}>
          <Text style={style.ItemName}>Image</Text>
          <Text>date time 9:10</Text>
        </View>
      </View>
      {/* Name chat Items */}
      <View style={style.ChatList}>
        <Image
          source={require('./IMG/f83c29bb540e872ce9d983a0f8e47a1b.jpg')}
          style={[style.ItemImage]}
        />
        <View style={style.ItemBoxName}>
          <Text style={style.ItemName}>Image</Text>
          <Text>date time 9:10</Text>
        </View>
      </View>
      {/* Name chat Items */}
      <View style={style.ChatList}>
        <Image
          source={require('./IMG/f4e9074aa5764258d8d11878204c22e0.jpg')}
          style={[style.ItemImage]}
        />
        <View style={style.ItemBoxName}>
          <Text style={style.ItemName}>Image</Text>
          <Text>date time 9:10</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  ChatList: {
    width: '100%',
    height: 80,
    // backgroundColor: '#3d8',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ItemImage: {
    marginLeft: 16,
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
  },
  ItemBoxName: {
    marginLeft: 10,
    height: '90%',
    width: '75%',
    // backgroundColor: '#09f',
    justifyContent: 'center',
  },
  ItemName: {
    fontSize: 18,
    fontWeight: '500',
  },
  ActiveChat: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: '#0f0',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 3,
    zIndex: 1,
    transform: [{translateX: 70}, {translateY: 17}],
  },
});

export default Search;
