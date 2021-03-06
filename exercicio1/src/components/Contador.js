import react, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

export default class Contador extends Component {
  state = {
    numero: this.props.numeroInicial,
  };

  constructor(props) {
    super(props);

    this.maisUm = this.maisUm.bind(this);
  }

  maisUm() {
    this.setState({numero: this.state.numero + 1});
  }

  limpar = () => {
    this.setState({numero: 0});
  };

  render() {
    return (
      <View>
        <Text style={{fontSize: 30}}>{}</Text>
        <TouchableHighlight
          onPress={() => this.maisUm()}
          onLongPress={this.limpar}>
          <Text>Incrementar/Zerar</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
