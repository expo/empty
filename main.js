/**
 * This is the entry point for your experience that you will run on Exponent.
 *
 * Start by looking at the render() method of the component called
 * FirstExperience. This is where the text and example components are.
 */
'use strict';

let React = require('react-native');
let {
  AppRegistry,
  Text,
  View,
} = React;

class FirstExperience extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <View style={{ flex: 1,
                     alignItems: 'center',
                     justifyContent: 'center' }}>
        <Text style={{ fontSize: 34 }}>
          ¯\_(ツ)_/¯
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('main', () => FirstExperience);
