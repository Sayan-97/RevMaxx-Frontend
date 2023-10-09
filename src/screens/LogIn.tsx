import { View, Text, Image } from 'react-native'
import Button from '../components/shared/Button'
import { FONT, COLORS } from '../themes/themes'
// import { useAuth0 } from 'react-native-auth0';

export default function LogIn() {

    // const { authorize } = useAuth0();
    // const onAuth0Login = async () => {
    //     try {
    //         await authorize();
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    return (
        <>
            <View
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12
                }}
            >
                <Image
                    source={require('../assets/images/imgs/rmlogo.png')}
                />
                <Image
                    source={require('../assets/images/imgs/RevMaxx.png')}
                />
                <Text
                    style={{
                        fontFamily: FONT.medium,
                        fontSize: 16,
                        color: '#787878'
                    }}
                >
                    Digital Care. Superpowered.
                </Text>
            </View>
            <View style={{
                alignItems: 'center',
                gap: 24,
                width: '100%'
            }}>
                <Text style={{
                    fontFamily: FONT.bold,
                    fontSize: 24,
                    color: COLORS.primary
                }}>
                    Welcome To RevMaxx
                </Text>
                {/* <View style={{
                    width: '100%',
                    gap: 12
                }}>
                    <TextInput
                        textContentType={'emailAddress'}
                        placeholder={'Enter your email'}
                        placeholderTextColor='#909090'
                        style={styles.inputStyle}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        textContentType={'password'}
                        secureTextEntry={true}
                        placeholder={'Enter your password'}
                        placeholderTextColor='#909090'
                        style={styles.inputStyle}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View> */}
                {/* Login */}
                <Button
                    name={`Log In`}
                    type={'primary'}
                    // onPress={onAuth0Login}
                />
                {/* <TouchableHighlight onPress={onPress} style={styles.drchronoButton}>
                    <Text style={styles.drchronoButtonText}>Login with Dr.Chrono</Text>
                </TouchableHighlight> */}
            </View>
        </>
    )
}