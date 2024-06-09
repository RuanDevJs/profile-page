import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 18px;
`;

export const Picture = styled.Image`
  width: 80px;
  height: 80px;

  border-radius: 50px;
  border: 8px solid ${({ theme }) => theme.colors.gray_200};
`;

export const Info = styled.View``;
