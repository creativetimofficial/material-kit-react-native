import React from 'react';
import { StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Block, Text, Icon,theme } from 'galio-framework';

export default class DropDown extends React.Component {
  state = {
    value: 1,
  }

  handleOnSelect = (index, value) => {
    const { onSelect } = this.props;

    this.setState({ value: value });
    onSelect && onSelect(index, value);
  }

  render() {
    const { onSelect, style, ...props } = this.props;
    return (
      <ModalDropdown
        style={[styles.qty, style]}
        onSelect={this.handleOnSelect}
        dropdownStyle={styles.dropdown}
        dropdownTextStyle={{paddingLeft:16, fontSize:12}}
        {...props}>
        <Block flex row middle space="between">
          <Text size={12}>{this.state.value}</Text>
          <Icon name="angle-down" family="font-awesome" size={11} />
        </Block>
      </ModalDropdown>
    )
  }
}

const styles = StyleSheet.create({
  qty: {
    width: 100,
    backgroundColor: '#DCDCDC',
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom:9.5,
    borderRadius: 3,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  dropdown: {
    marginTop: 8,
    marginLeft: -16,
    width: 100,
  },
});
