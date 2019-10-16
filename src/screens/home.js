import React, { Component } from 'react';
import  {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

class Home extends Component {
    handlePress = () => {
        this.props.navigation.navigate('Login')
    }
    render() {
        return(
            <View  style={styles.container} >
                <Text>Home</Text>
                <Button
                    onPress={ this.handlePress }
                    title= " Ir al login " />
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

export default Home