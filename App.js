import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Image,ImageBackground } from 'react-native';

class HomeScreen extends React.Component {
  render() {
    let fondoHome={uri: 'http://quizupso.pansyequitysa.netdna-cdn.com/q/wp-content/uploads/2017/03/13-11.jpg'};
    return ( 
      <ImageBackground source={fondoHome} style={{width: '100%', height: '100%'}}>
        <View source={fondoHome} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Text>Home Screen</Text>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />

        </View>
      </ImageBackground>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
});

export default createAppContainer(RootStack);
