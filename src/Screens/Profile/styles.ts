import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Background = styled.View`
  position: relative;

  height: 100%;
  background: rgba(239, 70, 55, 0.1);

  margin-top: 30px;
`;

export const Ratting = styled.View`
  position: absolute;
  top: -30px;

  flex: 1;
  width: 95%;
  height: 100%;

  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.orange};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const RattingWrap = styled.View`
  padding: 8px 18px;
`;

export const Footer = styled.View`
  padding: 8px 18px;
`;
