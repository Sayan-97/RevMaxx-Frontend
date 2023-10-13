import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import Card from '../components/shared/Card';

export default function Patients() {

    const patients = [
        {
            id: '1',
            img: require('../assets/images/imgs/avatar.jpg'),
            name: 'John Doe',
            age: '23',
            sex: 'Male',
            visits: '12'
        },
        {
            id: '2',
            img: require('../assets/images/imgs/avatar.jpg'),
            name: 'John Doe',
            age: '23',
            sex: 'Male',
            visits: '12'
        },
        {
            id: '3',
            img: require('../assets/images/imgs/avatar.jpg'),
            name: 'John Doe',
            age: '23',
            sex: 'Male',
            visits: '12'
        },
        {
            id: '4',
            img: require('../assets/images/imgs/avatar.jpg'),
            name: 'John Doe',
            age: '23',
            sex: 'Male',
            visits: '12'
        },
    ]

    type ItemProps = {
        img: any;
        name: string;
        age: string;
        sex: string;
        visits: string;
    }

    const Item = (props: ItemProps) => (
        <Card 
            type="large"
            content={
                <View>
                    <Image 
                        source={props.img}
                        alt='img'
                    />
                    <View>
                        <Text>{props.name}</Text>
                        <View>
                            <Text>Age: {props.age}</Text>
                            <Text>Sex: {props.sex}</Text>
                            <Text>Visits: {props.visits}</Text>
                        </View>
                    </View>
                </View>
              }
        />
    )

    return (
        <View>
            <FlatList 
                data={patients}
                renderItem={({item}) => <Item img={item.img} name={item.name} age={item.age} sex={item.sex} visits={item.visits}/>}
                keyExtractor={item => item.id}
            />
        </View>
    )
}