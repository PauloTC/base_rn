import React, { Component } from 'react';
import  {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

class About extends Component {
    handlePress = () => {
        this.props.navigation.navigate('Profile', {
            name: 'PauloTejada',
            age: '28'
        })
    }
    render() {
        return(
            <View  style={styles.container} >
                <Text>About</Text>
                <Button
                    onPress= { this.handlePress }
                    title= " Ir al profile " />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default About