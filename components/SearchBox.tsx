import React, {useEffect, useRef} from 'react';
import {TextInput} from 'react-native';

const SearchBox = () => {
  const textInputRef = useRef<TextInput>(null);
  useEffect(() => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  }, []);
  return (
    <TextInput
      ref={textInputRef}
      selectionColor={'#00f220'}
      //style={style.TextInput}
      placeholder={'Search...'}
      placeholderTextColor={'#f0f'}

      //value={search}
      //onChange={e => setSearch(e.nativeEvent.text)}
    />
  );
};

export default SearchBox;
