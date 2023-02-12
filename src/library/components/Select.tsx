import { View, Text, StyleSheet, Image, Dimensions, Platform, StyleProp, ViewStyle, TextStyle } from 'react-native';
import React, { ReactNode, useCallback } from 'react';
import DropDownPicker from './SelectDropdown/SelectDropdown';
import { AppConstants, ColorConstants,Colors,StringConstants } from '../constants';
import images from '../resources/images';
import DimensionsValue from '../utils/DimensionsValue';
const { width } = Dimensions.get('window');


type Props = {
  onChange: (value: any, id: any, index: any, data: any) => void,
  value?: string
  title?: string
  disabled?: boolean,
  renderRightLabelItem?: boolean,
  keyItem?: string,
  data?: any
  isMandatory?: boolean,
  ExtraLabelText?: string,
  renderExtraItem?: () => ReactNode
  containerStyle?: StyleProp<ViewStyle>
  titleStyle?: StyleProp<TextStyle>,
  placeHolder?: string,
  hideLabel?: boolean,
  customDropDownButtonStyle?: Object,

}

const Select = ({
  onChange,
  value,
  title,
  disabled,
  renderRightLabelItem,
  keyItem = 'title',
  data = [],
  isMandatory,
  ExtraLabelText,
  renderExtraItem,
  containerStyle,
  titleStyle,
  placeHolder,
  hideLabel = false,
  customDropDownButtonStyle = {},
  ...props
}: Props) => {
  const IS_DISABLED = disabled || !data.length
  const renderIcon = (isOpened: boolean) => (
    <Image
      source={images.IC_DROPDOWN}
      style={[styles.imageDrop, isOpened && styles.imageDropDownRotate, IS_DISABLED && { opacity: 0.6 }]}
    />
  );

  const dropdownBtnStyle = useCallback(() => {
    let customStyle = {}
    if (IS_DISABLED) {
      customStyle = styles.disabledDropDown
    }
    return { ...styles.dropdownBtnStyle, ...customStyle, ...customDropDownButtonStyle }
  }, [IS_DISABLED])


  return (
    <View style={[styles.viewTextInput, containerStyle]}>
      {!hideLabel && <View style={{ flexDirection: 'row' }}>
        {title && <Text style={[styles.textLabel, titleStyle]}>
          {title}
          {isMandatory && <Text style={{ color: Colors.RED }}> *</Text>}
          {ExtraLabelText && <Text style={{ color: Colors.TAB_ITEM }}>{" "}{ExtraLabelText}</Text>}
        </Text>}
        {renderExtraItem && renderExtraItem()}
      </View>}

      <DropDownPicker
        {...props}
        //@ts-ignore
        disabled={IS_DISABLED}
        data={data}
        onSelect={(e: any, index: number) => onChange(e[keyItem], e.id, index, e)}
        renderCustomizedButtonChild={(selectedItem: any, index: number) => {
          return (
            <View>
              {value ? <Text style={[styles.dropdownBtnTxtStyle, IS_DISABLED && { opacity: 0.7 }]}>
                {value}
              </Text> :
                <Text style={[styles.dropdownBtnTxtStyle, { color: Colors.FEILD_PLACEHOLDER }]}>{placeHolder || StringConstants.SELECT}</Text>}
            </View>
          );
        }}
        renderCustomizedRowChild={(item: any, index: number) => {
          return (
            <View style={styles.dropdownDropdownStyleRow}>
              <Text style={styles.dropdownRowTxtStyle}>{item[keyItem]}</Text>
            </View>
          );
        }}
        buttonStyle={dropdownBtnStyle()}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        renderDropdownIcon={renderIcon}
        dropdownStyle={styles.dropdownDropdownStyle}
        dropdownOverlayColor={Colors.TRANSPARENT}
        rowStyle={styles.dropDownRowStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewTextInput: {
    alignSelf: 'center',
  },
  imageDrop: {
    resizeMode: 'contain',
    alignSelf: 'center',
    height: DimensionsValue.VALUE_16,
    width: DimensionsValue.VALUE_16
  },
  dropdownBtnStyle: {
    width: '100%',
    height: width / 8.16,
    marginTop: width / 75,
    marginBottom: width / 75,
    backgroundColor: Colors.TAB_BACKGROUND,
    borderRadius: DimensionsValue.VALUE_10,
    borderWidth: 1,
    borderColor: '#DFDFDF',
    paddingHorizontal: width / 37.5
  },
  dropdownBtnTxtStyle: {
    fontSize: DimensionsValue.VALUE_16,
    color: Colors.BLACK,
    textAlign: 'left',
  },
  dropdownDropdownStyle: {
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    paddingLeft: DimensionsValue.VALUE_16,
    borderRadius: DimensionsValue.VALUE_10,
    // paddingRight: DimensionsValue.VALUE_16,
    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowColor: 'rgba(0, 0, 0, 1.0)',
        shadowOpacity: 0.54,
        shadowOffset: { width: 0, height: 2 },
      },
      android: {
        elevation: 2,
      },
    }),
  },
  dropdownDropdownStyleRow: {
    paddingRight: DimensionsValue.VALUE_16,
  },
  dropdownRowTxtStyle: {
    color: Colors.BLACK,
    textAlign: 'left',
    fontSize: DimensionsValue.VALUE_14,
  },
  textLabel: {
    color: Colors.BLACK,
    fontSize: DimensionsValue.VALUE_16,
    alignSelf: 'flex-start',
    marginBottom: 3,
  },
  imageDropDownRotate: {
    transform: [{ rotate: '180 deg' }]
  },
  dropDownRowStyle: {
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0'
  },
  disabledDropDown: {
    backgroundColor: Colors.DFDFDF
  }
});

export default Select;
