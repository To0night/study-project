import react, {Component,useImperativeHandle} from 'react';
import {Text} from 'react-native';
class son extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name:'子组件'
    }
  }
  add(){
    this.setState({
        name:123
    })
  }
  render() {
    return <Text>{this.state.name}</Text>;
  }
}

export default son
