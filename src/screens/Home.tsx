import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import Card from '../components/shared/Card';
import {globalStyles} from '../globalStyles';
import {FONT, COLORS} from '../themes/themes';

export default function Home() {
  const quickActions = [
    {
      icon: require('../assets/images/icons/microphone.png'),
      title: 'Start Recording',
      to: 'Appointments',
    },
    {
      icon: require('../assets/images/icons/2User.png'),
      title: 'Patient History',
      to: 'Patient History',
    },
  ];

  const upcomingAppointments = [
    {
      id: '1',
      name: 'John Doe',
      type: 'Returning Patient',
      date: 'Mon, 24 Jul',
      time: '03:00PM - 04:00PM',
    },
    {
      id: '2',
      name: 'John Doe',
      type: 'Returning Patient',
      date: 'Mon, 24 Jul',
      time: '03:00PM - 04:00PM',
    },
    {
      id: '3',
      name: 'John Doe',
      type: 'Returning Patient',
      date: 'Mon, 24 Jul',
      time: '03:00PM - 04:00PM',
    },
  ];

  type ItemProps = {
    name: string;
    type: string;
    date: string;
    time: string;
  };

  const Item = (props: ItemProps) => (
    <Card
      type="large"
      content={
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontFamily: FONT.medium,
                fontSize: 16,
                color: COLORS.mediumGreyText,
              }}>
              {props.name}
            </Text>
            <Text
              style={{
                fontFamily: FONT.regular,
                fontSize: 14,
                color: COLORS.greyText,
              }}>
              {props.type}
            </Text>
          </View>
          <View
            style={{
              gap: 8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
              }}>
              <Image
                source={require('../assets/images/icons/calendarGrey.png')}
              />
              <Text
                style={{
                  fontFamily: FONT.medium,
                  fontSize: 14,
                  color: COLORS.greyText,
                }}>
                {props.date}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                gap: 8,
              }}>
              <Image source={require('../assets/images/icons/clockBlue.png')} />
              <Text
                style={{
                  fontFamily: FONT.medium,
                  fontSize: 14,
                  color: COLORS.primary,
                }}>
                {props.time}
              </Text>
            </View>
          </View>
        </>
      }
    />
  );

  return (
    <ScrollView>
      <View style={[globalStyles.container, {gap: 18}]}>
        <Text style={styles.headText}>Overview</Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}>
          <Card
            type="small"
            content={
              <>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'baseline',
                  }}>
                  <Text style={styles.cardHeadText}>10</Text>
                  <Text
                    style={{
                      fontFamily: FONT.bold,
                      fontSize: 16,
                      color: COLORS.primary,
                    }}>
                    min
                  </Text>
                </View>
                <Text style={styles.cardSubText}>
                  Avg Time Spent with Patient
                </Text>
              </>
            }
          />
          <Card
            type="small"
            content={
              <>
                <Text style={styles.cardHeadText}>36</Text>
                <Text style={styles.cardSubText}>Charts Generated</Text>
              </>
            }
          />
        </View>
        <Text style={styles.headText}>Quick Actions</Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch',
          }}>
          {quickActions.map((item, index) => (
            <Card
              key={index}
              type="small"
              content={
                <>
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: COLORS.primaryLight,
                    }}>
                    <Image
                      source={item.icon}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </View>
                  <Text style={styles.cardSubText}>{item.title}</Text>
                </>
              }
            />
          ))}
        </View>
        <Text style={styles.headText}>Upcoming Appointments</Text>
        <FlatList 
            data={upcomingAppointments}
            renderItem={({item}) => <Item name={item.name} type={item.type} date={item.date} time={item.time}/>}
            keyExtractor={item => item.id}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headText: {
    fontFamily: FONT.medium,
    fontSize: 14,
    color: COLORS.mediumGreyText,
  },
  cardSubText: {
    fontFamily: FONT.medium,
    fontSize: 16,
    color: COLORS.greyText,
  },
  cardHeadText: {
    fontFamily: FONT.bold,
    fontSize: 27,
    color: COLORS.primary,
  },
});
