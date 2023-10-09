import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { globalStyles } from '../globalStyles'
import { COLORS, FONT } from '../themes/themes'
import Card from '../components/shared/Card'

export default function Appointments({ navigation }: { navigation: any }) {

    const appointments = [
        {
            name: 'John Doe',
            time: '12:00PM',
            type: 'Returning Patient',
        },
        {
            name: 'John Doe',
            time: '12:00PM',
            type: 'Returning Patient',
        },
        {
            name: 'John Doe',
            time: '12:00PM',
            type: 'Returning Patient',
        },
        {
            name: 'John Doe',
            time: '12:00PM',
            type: 'Returning Patient',
        },
        {
            name: 'John Doe',
            time: '12:00PM',
            type: 'Returning Patient',
        },
    ]

    return (
        <ScrollView>
            <View style={[globalStyles.container, { gap: 18 }]}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={styles.textBlue}>Thursday, July 21</Text>
                    <Text style={styles.textBlue}>Today</Text>
                </View>
                {appointments.map((item, index) => (
                    <Card
                        key={index}
                        type='large'
                        onPress={() => navigation.navigate('Recording')}
                        content={
                            <View style={styles.cardContent}>
                                <View style={{ gap: 8 }}>
                                    <Text style={styles.title}>{item.name}</Text>
                                    <Text style={styles.type}>{item.type}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                                    <Image 
                                        source={require('../assets/images/icons/clock.png')}
                                    />
                                    <Text style={styles.date}>{item.time}</Text>
                                </View>
                            </View>
                        }
                    />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textBlue: {
        fontFamily: FONT.medium,
        fontSize: 14,
        color: COLORS.primary
    },

    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: FONT.bold,
        fontSize: 16,
        color: COLORS.mediumGreyText
    },

    type: {
        fontFamily: FONT.medium,
        fontSize: 14,
        color: COLORS.greyText
    },

    date: {
        fontFamily: FONT.medium,
        fontSize: 14,
        color: COLORS.mediumGreyText
    },
})