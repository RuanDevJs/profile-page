import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 14px 16px;
  background-color: ${({ theme }) => theme.colors.blue};
  border-radius: 8px;
  margin-top: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Picture = styled.Image`
  width: 50px;
  height: 50px;

  border-radius: 50px;
  object-fit: cover;

  border: 2px solid ${({ theme }) => theme.colors.gray_100};
`;

export const Info = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Content = styled.View``;

export const EditProfile = styled.TouchableOpacity``;
