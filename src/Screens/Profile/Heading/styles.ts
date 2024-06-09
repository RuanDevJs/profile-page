import { Picker as PickerComponent } from "@react-native-picker/picker";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${Dimensions.get("window").height * 0.45}px;
  flex-direction: row;
`;

export const Left = styled.View`
  width: ${Dimensions.get("window").width * 0.5}px;
  height: 100%;

  background-color: rgba(239, 70, 55, 0.1);
  padding: 32px 12px;

  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Picture = styled.Image`
  width: 120px;
  height: 120px;

  border-radius: 100px;
  border: 8px solid #fff;

  margin-bottom: 16px;
`;

export const Right = styled.View`
  position: relative;

  width: ${Dimensions.get("window").width * 0.5}px;
  height: 100%;
`;

export const Content = styled.View`
  height: 100%;
  justify-content: center;

  margin-top: 20px;
  margin-left: 15px;
`;

export const Wrap = styled.View`
  margin-bottom: 4px;
`;

export const Icon = styled.TouchableOpacity`
  position: absolute;
  flex: 1;
  top: 30px;
  margin-left: 12px;
  margin-right: 12px;

  align-items: center;
  justify-content: center;
`;
