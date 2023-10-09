import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../globalStyles'
import { COLORS, FONT } from '../themes/themes'
import Card from '../components/shared/Card';

export default function Recording({ navigation }: { navigation: any }) {

    const [startRecord, setStartRecord] = useState(false);
    const [recording, setRecoding] = useState(false);

    return (
        <View style={[globalStyles.container, { gap: 18, alignItems: 'center', justifyContent: 'space-between', height: '100%', paddingVertical: 60 }]}>
            {!recording ? (
                <View style={{
                    width: '80%',
                    marginVertical: 'auto',
                    gap: 8,
                }}>
                    <Text style={styles.title}>Press the Button to Start Recording</Text>
                    <Text style={styles.des}>Speak naturally with your patients.</Text>
                </View>
            ) : (
                <Card
                    type='large'
                    content={
                        <View style={{
                            gap: 20
                        }}>
                            <Text style={{
                                fontFamily: FONT.medium,
                                fontSize: 18,
                                color: COLORS.primary,
                            }}>Live Transcription</Text>
                            <Text style={{
                                fontFamily: FONT.regular,
                                fontSize: 16,
                                color: COLORS.mediumGreyText,
                            }}>Example Text</Text>
                        </View>
                    }
                />
            )}

            <View style={{
                gap: 26,
                alignItems: 'center'
            }}>

                {startRecord && (
                    <>
                        <View style={{
                            alignItems: 'center',
                            gap: 4,
                        }}>
                            <Text style={[styles.textRecord, { fontSize: 24 }]}>00:01</Text>
                            <Text style={styles.textRecord}>Recoding</Text>
                        </View>

                        <Image
                            source={require('../assets/images/imgs/record.png')}
                        />
                    </>
                )}

                {/* Record Button */}
                {!startRecord ? (
                    <TouchableOpacity onPress={() => setStartRecord(true)} style={{
                        backgroundColor: COLORS.primaryLight,
                        padding: 12,
                        borderRadius: 999
                    }}>
                        <View style={{
                            backgroundColor: COLORS.primary,
                            padding: 40,
                            borderRadius: 999
                        }}>
                            <View style={{
                                backgroundColor: COLORS.white,
                                padding: 12,
                                borderRadius: 999
                            }}></View>
                        </View>
                    </TouchableOpacity>
                ) : (
                    !recording ? (
                        <TouchableOpacity onPress={() => setRecoding(true)} style={{
                            backgroundColor: COLORS.primaryLight,
                            padding: 12,
                            borderRadius: 999
                        }}>
                            <View style={{
                                backgroundColor: COLORS.red,
                                padding: 40,
                                borderRadius: 999
                            }}>
                                <View style={{
                                    backgroundColor: COLORS.white,
                                    padding: 12,
                                    borderRadius: 999
                                }}></View>
                            </View>
                        </TouchableOpacity>
                    ) : (
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 40
                        }}>

                            <TouchableOpacity onPress={() => { setStartRecord(false), setRecoding(false) }} style={{
                                backgroundColor: COLORS.primary,
                                padding: 12,
                                borderRadius: 99
                            }}>
                                <Image
                                    source={require('../assets/images/icons/trash.png')}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('SoapNote')} style={{
                                backgroundColor: COLORS.primaryLight,
                                padding: 12,
                                borderRadius: 999
                            }}>
                                <View style={{
                                    backgroundColor: COLORS.red,
                                    padding: 40,
                                    borderRadius: 999
                                }}>
                                    <View style={{
                                        backgroundColor: COLORS.white,
                                        padding: 12,
                                        borderRadius: 4
                                    }}></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('SoapNote')} style={{
                                backgroundColor: COLORS.primary,
                                padding: 12,
                                borderRadius: 99
                            }}>
                                <Image
                                    source={require('../assets/images/icons/scribe.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: FONT.bold,
        fontSize: 20,
        color: COLORS.mediumGreyText,
        textAlign: 'center'
    },
    des: {
        fontFamily: FONT.regular,
        fontSize: 14,
        color: COLORS.greyText,
        textAlign: 'center'
    },
    textRecord: {
        fontFamily: FONT.bold,
        fontSize: 16,
        color: COLORS.primary,
        textAlign: 'center'
    }
})