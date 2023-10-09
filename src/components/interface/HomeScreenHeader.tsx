import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONT } from '../../themes/themes'
import { globalStyles } from '../../globalStyles'
// import { useAuth0 } from 'react-native-auth0';

export default function HomeScreenHeader(): JSX.Element {

    // const { clearSession, user } = useAuth0();

    // const logout = async () => {
    //     await clearSession();
    // }

    return (
        <View
            style={[globalStyles.container ,{
                backgroundColor: COLORS.white,
                elevation: 1,
                gap: 16
            }]}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    gap: 8
                }}>
                    <Text 
                        style={{
                            fontFamily: FONT.medium,
                            fontSize: 18,
                            color: COLORS.black
                        }}
                    >
                        Good Morning
                    </Text>
                    <Text style={{
                        fontFamily: FONT.regular,
                        fontSize: 16,
                        color: COLORS.greyText
                    }}>
                        {/* Dr. {user?.user_id} */}
                        Dr. Sayan
                    </Text>
                </View>
                <TouchableOpacity 
                    // onPress={logout}
                    style={{
                        backgroundColor: COLORS.primaryLight,
                        width: 40,
                        height: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 40
                    }}
                >
                    <Image
                        source={require('../../assets/images/icons/Notification.png')}
                    />
                </TouchableOpacity>
            </View>
            <TextInput

                placeholder='Search for patients, appointments'
                style={{
                    backgroundColor: '#F7F9FB',
                    borderRadius: 8,
                    padding: 12,
                    fontFamily: FONT.regular,
                    fontSize: 14
                }}
            />
        </View>
    )
}