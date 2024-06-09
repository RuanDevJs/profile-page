import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  position: relative;
`;

export const Heading = styled.View`
  justify-content: space-between;
  align-items: center;

  flex-direction: row;
  padding: 32px 18px;
`;

export const Boxes = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 32px;
  margin-left: 12px;
`;

export const Box = styled.View`
  background-color: #fdedeb;
  padding: 32px;
  border-radius: 15px;
`;

export const Wrap = styled.View`
  padding: 4px 0;
`;

export const Card = styled(Animated.View)`
  padding: 32px 0 0;
  background-color: ${({ theme }) => theme.colors.orange};

  width: 320px;
  height: 320px;

  border-radius: 8px;
  margin: 32px auto;

  align-items: center;
`;

export const CardFooter = styled.View`
  width: 100%;
  height: 100px;

  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.gray_100};

  border-top-right-radius: 0;
  border-top-right-radius: 0;

  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const CardFooterContainer = styled.View`
  padding: 8px 16px 12px 16px;

  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Houses = styled(Animated.View)`
  padding: 8px 16px 12px 32px;

  align-items: flex-start;
  justify-content: center;
`;

export const House = styled.View`
  padding: 20px 16px;
  margin-top: 8px;

  background-color: ${({ theme }) => theme.colors.gray_100};
  margin-right: 8px;

  align-items: center;
  justify-content: center;

  border-radius: 5px;
`;

export const AddButton = styled.View`
  width: 50px;
  height: 50px;

  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.orange};

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 50px;

  justify-content: center;
  align-items: center;
`;

export const Services = styled(Animated.View)`
  width: 100%;
  height: 100%;

  position: absolute;
  top: -80px;

  justify-content: center;
  align-items: center;
`;

export const Service = styled.View`
  width: 80%;
  height: 70px;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.orange};

  justify-content: center;
  align-items: center;

  margin-top: 12px;
`;
