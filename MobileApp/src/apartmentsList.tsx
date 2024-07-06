/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Image} from 'react-native';
import { apartment } from '../types';

function ApartmentsList(): React.JSX.Element {
  const [apartments, setApartments] = useState<apartment[]>([]);
  useEffect(() => {
    fetch('http://localhost:3001/apartments')
    .then((response) => response.json())
    .then((apts) => setApartments(apts))
    .catch(() => setApartments([]));
  }, []);
  return (
    <View style={styles.sectionContainer}>
      <Text>Apartments</Text>
      <ScrollView>
        {apartments.map((aprtmnt, index) =>
          <View key={index}>
            <Image source={{uri: aprtmnt.images[0]}} style={styles.image} />
            <Text>{aprtmnt.name}</Text>
            <Text>{aprtmnt.size}</Text>
            <Text>{aprtmnt.price}</Text>
            <Text>{aprtmnt.location}</Text>
            <Text>{aprtmnt.bedrooms}</Text>
            <Text>{aprtmnt.bathrooms}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {},
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default ApartmentsList;
