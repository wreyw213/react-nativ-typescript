import React, { FC, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Platform, StyleProp, ViewStyle, TextStyle } from 'react-native';
import moment from 'moment';
import DateTimePickerModal, { ReactNativeModalDateTimePickerProps } from 'react-native-modal-datetime-picker';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import DimensionsValue from '../utils/DimensionsValue';
import { ColorConstants, Colors } from '../constants';
const { width } = Dimensions.get('window');


interface Props {
  style?: StyleProp<ViewStyle>,
  onChange?: ((date: Date) => void) | ((event: DateTimePickerEvent, date?: Date) => void),
  onChangeDate?: ((date: Date) => void)
  placeHolder?: string,
  value?: Date,
  title?: string,
  titleStyle?: StyleProp<TextStyle>,
  isMandatory?: boolean,
  containerStyle?: StyleProp<ViewStyle>,
}

type DateTimePicker = Omit<ReactNativeModalDateTimePickerProps, "onConfirm" | "onCancel">

const DateField: FC<Props & DateTimePicker> = ({
  style,
  onChangeDate,
  placeHolder,
  value,
  title,
  titleStyle,
  isMandatory,
  containerStyle,
  onChange,
  ...props
}) => {
  const [showDateModal, setShowDateModal] = useState(false);

  const hideDatePicker = () => {
    setShowDateModal(false);
  };
  const showDatePicker = () => {
    setShowDateModal(true);
  };
  return (
    <View style={[styles.fieldContainer, containerStyle]}>
      {title && <Text style={[styles.textLabel, titleStyle]}>{title}{isMandatory && <Text style={{ color: Colors.RED }}> *</Text>}</Text>}

      <TouchableOpacity
        style={[styles.viewDate, style]}
        onPress={showDatePicker}
      >
        <Text style={value ? styles.textDate : styles.placeHolderStyle}>
          {value ? moment(value).format('DD/MM/YYYY') : placeHolder}
        </Text>
      </TouchableOpacity>
      {showDateModal && (
        <DateTimePickerModal
          {...props}
          testID="dateTimePicker"
          isVisible={true}
          date={(value && new Date(value)) || new Date()}
          mode={'date'}
          onConfirm={(date:any) => {
            setShowDateModal(false);
            onChange && onChange(date);
            onChangeDate && onChangeDate(date)
          }}
          onCancel={hideDatePicker}
          minimumDate={new Date(1950, 0, 1)}
        />
      )}
    </View>
  );
};

export default DateField;
const styles = StyleSheet.create({
  viewDate: {
    width:DimensionsValue.VALUE_295,
    height:  width / 8.16,
    paddingStart: width / 37.5,
    paddingEnd: width / 37.5,
    marginTop: width / 75,
    marginBottom: width / 75,
    borderRadius: DimensionsValue.VALUE_10,
    backgroundColor: Colors.TAB_BACKGROUND,
    borderWidth: 1,
    borderColor: '#DFDFDF',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  fieldContainer: {
    width: DimensionsValue.VALUE_295,
    alignSelf: 'center',
  },
  textDate: {
    fontSize: DimensionsValue.TEXT_M,
    color: Colors.BLACK,
  },
  textLabel: {
    color: Colors.BLACK,
    fontSize: DimensionsValue.VALUE_16,
    alignSelf: 'flex-start',
    marginBottom: 3,
  },
  placeHolderStyle: {
    fontSize: DimensionsValue.TEXT_M,
    color: Colors.FEILD_PLACEHOLDER,
  },
});
