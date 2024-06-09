import { Dimensions } from "react-native";
import styled from "styled-components/native";

const { width: DeviceWidth } = Dimensions.get("window");

export const Jobs = styled.View`
  margin: 12px 0 16px 0;
`;

export const Job = styled.View`
  width: ${DeviceWidth * 0.32}px;
`;

export const JobWrap = styled.View`
  margin: 5px;
  padding: 12px 5px;

  height: 60px;

  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: 5px;
`;
