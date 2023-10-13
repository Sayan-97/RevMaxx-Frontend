import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import {globalStyles} from '../globalStyles';
import {COLORS, FONT} from '../themes/themes';
import Card from '../components/shared/Card';

export default function Appointments({navigation}: {navigation: any}) {
  const appointments = [
    {
      id: '1',
      name: 'John Doe',
      time: '12:00PM',
      type: 'Returning Patient',
    },
    {
      id: '2',
      name: 'John Doe',
      time: '12:00PM',
      type: 'Returning Patient',
    },
    {
      id: '3',
      name: 'John Doe',
      time: '12:00PM',
      type: 'Returning Patient',
    },
    {
      id: '4',
      name: 'John Doe',
      time: '12:00PM',
      type: 'Returning Patient',
    },
    {
      id: '5',
      name: 'John Doe',
      time: '12:00PM',
      type: 'Returning Patient',
    },
  ];

  type ItemProps = {
    name: string;
    time: string;
    type: string;
  };

  const Item = (props: ItemProps) => (
    <Card
      type="large"
      onPress={() => navigation.navigate('Recording')}
      content={
        <View style={styles.cardContent}>
          <View style={{gap: 8}}>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.type}>{props.type}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Image source={require('../assets/images/icons/clock.png')} />
            <Text style={styles.date}>{props.time}</Text>
          </View>
        </View>
      }
    />
  );

  return (
    <ScrollView>
      <View style={[globalStyles.container, {gap: 18}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.textBlue}>Thursday, July 21</Text>
          <Text style={styles.textBlue}>Today</Text>
        </View>
        <FlatList
          data={appointments}
          renderItem={({item}) => (
            <Item name={item.name} time={item.time} type={item.type} />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textBlue: {
    fontFamily: FONT.medium,
    fontSize: 14,
    color: COLORS.primary,
  },

  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: FONT.bold,
    fontSize: 16,
    color: COLORS.mediumGreyText,
  },

  type: {
    fontFamily: FONT.medium,
    fontSize: 14,
    color: COLORS.greyText,
  },

  date: {
    fontFamily: FONT.medium,
    fontSize: 14,
    color: COLORS.mediumGreyText,
  },
});
