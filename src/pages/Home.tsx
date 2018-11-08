import * as React from "react";
import {
  StyleSheet,
  View,
  Text
} from "react-native";

class HomePage extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Text>Home page</Text></View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default HomePage;