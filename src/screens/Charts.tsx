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
  const charts = [
    {
      id: '1',
      name: 'John Doe',
      time: '12:00PM',
      date: 'Mon, 24 Jul',
      disease: 'Gastro Infection',
      billed: true,
      code: 'S06.0X0A SO1.81XA',
    },
    {
      id: '2',
      name: 'John Doe',
      time: '12:00PM',
      date: 'Mon, 24 Jul',
      disease: 'Gastro Infection',
      billed: true,
      code: 'S06.0X0A SO1.81XA',
    },
    {
      id: '3',
      name: 'John Doe',
      time: '12:00PM',
      date: 'Mon, 24 Jul',
      disease: 'Gastro Infection',
      billed: true,
      code: 'S06.0X0A SO1.81XA',
    },
    {
      id: '4',
      name: 'John Doe',
      time: '12:00PM',
      date: 'Mon, 24 Jul',
      disease: 'Gastro Infection',
      billed: true,
      code: 'S06.0X0A SO1.81XA',
    },
  ];

  type ItemProps = {
    name: string;
    time: string;
    date: string;
    disease: string;
    billed: boolean;
    code: string;
  };

  const Item = (props: ItemProps) => (
    <Card
      type="large"
      // onPress={() => navigation.navigate('Recording')}
      content={
        <View style={styles.cardContent}>
          <View style={{gap: 16}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}>
              <Image source={require('../assets/images/icons/patient.png')} />
              <Text style={styles.title}>{props.name}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}>
              <Image
                source={require('../assets/images/icons/calendarGrey.png')}
              />
              <Text style={styles.textGrey}>{props.date}</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
              }}>
              <Image source={require('../assets/images/icons/clockGrey.png')} />
              <Text style={styles.textGrey}>{props.time}</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Text style={styles.textGrey}>
              {props.billed ? 'Billed' : 'Not Billed'}
            </Text>
            <View
              style={{
                alignItems: 'flex-end',
                gap: 6,
              }}>
              <Text style={styles.textGrey}>{props.disease}</Text>
              <Text style={styles.textCode}>{props.code}</Text>
            </View>
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
          data={charts}
          renderItem={({item}) => (
            <Item
              name={item.name}
              time={item.time}
              date={item.date}
              disease={item.disease}
              billed={item.billed}
              code={item.code}
            />
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

  textGrey: {
    fontFamily: FONT.medium,
    fontSize: 16,
    color: COLORS.greyText,
  },

  textCode: {
    fontFamily: FONT.medium,
    fontSize: 16,
    color: COLORS.primary,
  },
});
