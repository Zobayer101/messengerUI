import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Bar from 'react-native-vector-icons/EvilIcons';
import Column from 'react-native-vector-icons/Feather';
import Messages from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
// let color = '#0f0';
const Chats = () => {
  const Navigate = useNavigation();
  return (
    <>
      <ScrollView>
        <View style={style.OuterSherchBOx}>
          <TouchableOpacity
            style={style.SearchBOx}
            onPress={() => Navigate.navigate('Search')}>
            <Bar
              name="search"
              size={30}
              color={'#0ff'}
              style={style.IcontStyle}
            />
            <Text style={style.SearchText}>Search</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          style={style.HorizontalScroll}>
          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/bdc718c491ff89cb6c18377c8f1026f0.jpg')}
              style={style.horigantolImage}
            />

            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/44809dcc8ed40597f38745eca105fe96.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/50212ecbcae1942649a2ca6a4d4b4557.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/62277cefa90db6e155a681c9efec3b01.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/716d33430d082387f90c710858c31b2c.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/799f924fe2b05170a34c343ad17e9f63.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/8732316b1d28765a89ce2bc8f4c9b080.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/89a9120e742f71e6020a891b79cb66a6.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/91fdd7ef0d64349739fd1530031e52e4.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/99b339856cd8412cd7cde514c233c65c.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/a32e77151aeee3b7bded901777d1f0d6.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/a5bb6528f574791d43b64421cfc3273d.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/b577b10700d89ee75aaaaac3438764ae.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/bc10803c8ee610fb68010ccd45a8d5d3.jpg')}
              style={style.horigantolImage}
            />
            <View style={style.Active} />
            <Text>Your note</Text>
          </TouchableOpacity>

          {/* Scroll image Item */}
          <TouchableOpacity style={style.horizontalItem}>
            <Image
              source={require('./IMG/ef079145fad8ae3daca0c906fbe9f3e0.jpg')}
              style={style.horigantolImage}
            />
            <Text>Your note</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Name chat Items */}

        <View style={style.ChatList}>
          <Image
            source={require('./IMG/716d33430d082387f90c710858c31b2c.jpg')}
            style={[style.ItemImage]}
          />
          <View style={style.ActiveChat} />
          <View style={style.ItemBoxName}>
            <Text style={style.ItemName}>Batchan</Text>
            <Text>date time 9:10</Text>
          </View>
        </View>

        {/* Name chat Items */}
        <View style={style.ChatList}>
          <Image
            source={require('./IMG/44809dcc8ed40597f38745eca105fe96.jpg')}
            style={[style.ItemImage]}
          />
          <View style={style.ActiveChat} />
          <View style={style.ItemBoxName}>
            <Text style={style.ItemName}>Image</Text>
            <Text>date time 9:10</Text>
          </View>
        </View>

        {/* Name chat Items */}
        <View style={style.ChatList}>
          <Image
            source={require('./IMG/50212ecbcae1942649a2ca6a4d4b4557.jpg')}
            style={[style.ItemImage]}
          />
          <View style={style.ActiveChat} />
          <View style={style.ItemBoxName}>
            <Text style={style.ItemName}>Image</Text>
            <Text>date time 9:10</Text>
          </View>
        </View>

        {/* Name chat Items */}
        <View style={style.ChatList}>
          <Image
            source={require('./IMG/62277cefa90db6e155a681c9efec3b01.jpg')}
            style={[style.ItemImage]}
          />
          <View style={style.ActiveChat} />
          <View style={style.ItemBoxName}>
            <Text style={style.ItemName}>Image</Text>
            <Text>date time 9:10</Text>
          </View>
        </View>

        {/* Name chat Items */}
        <View style={style.ChatList}>
          <Image
            source={require('./IMG/716d33430d082387f90c710858c31b2c.jpg')}
            style={[style.ItemImage]}
          />
          <View style={style.ActiveChat} />
          <View style={style.ItemBoxName}>
            <Text style={style.ItemName}>Image</Text>
            <Text>date time 9:10</Text>
          </View>
        </View>

        {/* Name chat Items */}
        <View style={style.ChatList}>
          <Image
            source={require('./IMG/8732316b1d28765a89ce2bc8f4c9b080.jpg')}
            style={[style.ItemImage]}
          />
          <View style={style.ActiveChat} />
          <View style={style.ItemBoxName}>
            <Text style={style.ItemName}>Image</Text>
            <Text>date time 9:10</Text>
          </View>
        </View>
        {/* Name chat Items */}
        <View style={style.ChatList}>
          <Image
            source={require('./IMG/89a9120e742f71e6020a891b79cb66a6.jpg')}
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
        {/* Name chat Items */}
        <View style={style.ChatList}>
          <Image
            source={require('./IMG/eee06c20dfac271312893c3e550c0a37.jpg')}
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
            source={require('./IMG/c4e367e981d8f573b76cc8597b715a7a.jpg')}
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
            source={require('./IMG/716d33430d082387f90c710858c31b2c.jpg')}
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
            source={require('./IMG/c3b924d5206e183f2bce0078386592ad.jpg')}
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
            source={require('./IMG/bdc718c491ff89cb6c18377c8f1026f0.jpg')}
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
            source={require('./IMG/62277cefa90db6e155a681c9efec3b01.jpg')}
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
            source={require('./IMG/716d33430d082387f90c710858c31b2c.jpg')}
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
            source={require('./IMG/716d33430d082387f90c710858c31b2c.jpg')}
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
            source={require('./IMG/716d33430d082387f90c710858c31b2c.jpg')}
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
            source={require('./IMG/716d33430d082387f90c710858c31b2c.jpg')}
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
            source={require('./IMG/716d33430d082387f90c710858c31b2c.jpg')}
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
            source={require('./IMG/716d33430d082387f90c710858c31b2c.jpg')}
            style={[style.ItemImage]}
          />
          <View style={style.ItemBoxName}>
            <Text style={style.ItemName}>Image</Text>
            <Text>date time 9:10</Text>
          </View>
        </View>
      </ScrollView>
      <View style={style.Fotter}>
        <TouchableOpacity>
          <Messages name="comments" size={25} color={'#888'} />
          <Text>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.FotterAligin}>
          <Column name="columns" size={25} color={'#888'} />
          <Text> Stories</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  Texts: {
    color: '#f0f',
  },
  OuterSherchBOx: {
    width: '100%',
    height: 70,

    alignItems: 'center',
    justifyContent: 'center',
  },
  SearchBOx: {
    width: '90%',
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 20,
    flexDirection: 'row',
  },

  SearchText: {
    fontSize: 18,
    textAlignVertical: 'center',
  },
  IcontStyle: {
    paddingLeft: 10,
    textAlignVertical: 'center',
  },
  HorizontalScroll: {
    height: 100,
  },
  horizontalItem: {
    width: 110,
    height: '100%',
    //backgroundColor: '#4f4',
    //marginLeft: 8,
    alignItems: 'center',
  },
  horigantolImage: {
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
  },
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
  Fotter: {
    width: '100%',
    height: 65,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  FotterAligin: {
    alignItems: 'center',
  },
  Active: {
    position: 'absolute',
    width: 20,
    height: 20,
    backgroundColor: '#0f0',
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 3,
    transform: [{translateX: 30}, {translateY: 50}],
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
export default Chats;
