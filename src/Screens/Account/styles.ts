import { Picker as PickerComponent } from "@react-native-picker/picker";
import styled from "styled-components/native";

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  padding: 30px 32px;
  margin-top: 20px;
  background-color: #f9f9f9;
`;

export const Heading = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: center;
`;

export const Icon = styled.TouchableOpacity`
  position: absolute;
  bottom: 0px;
  left: 0;
`;

export const Menu = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`;

export const Picture = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-bottom: 5px;
`;

export const Form = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export const Input = styled.TextInput`
  padding: 16px 12px;
  background-color: ${({ theme }) => theme.colors.gray_100};
  border-radius: 4px;

  font-family: ${({ theme }) => theme["font"].regular};
  font-size: ${({ theme }) => theme["font-size"].sm}px;

  margin-bottom: 16px;
`;

export const Picker = styled(PickerComponent)`
  padding: 16px 12px;
  background-color: ${({ theme }) => theme.colors.gray_100};
  border-radius: 4px;

  font-family: ${({ theme }) => theme["font"].regular};
  font-size: ${({ theme }) => theme["font-size"].sm}px;

  margin-bottom: 16px;
`;

export const PickerItem = styled(PickerComponent.Item)`
  padding: 16px 12px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 4px;

  font-family: ${({ theme }) => theme["font"].regular};
  font-size: ${({ theme }) => theme["font-size"].sm}px;

  margin-bottom: 16px;
`;

export const Button = styled.TouchableOpacity`
  width: 280px;
  margin: 0 auto;

  padding: 20px 12px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 15px;

  margin-top: 18px;

  text-align: center;
  justify-content: center;
  align-items: center;
`;
