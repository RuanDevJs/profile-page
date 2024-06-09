import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 32px 14px 8px 14px;
`;

export const Heading = styled.View``;

export const Menu = styled.View`
  flex: 1;
  width: 100%;

  padding: 10px 5px 0 5px;
  margin-top: 16px;

  border-radius: 5px;
`;

export const Background = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_100};
  padding-left: 16px;
  padding-top: 8px;
`;

export const Wrap = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const Info = styled.View`
  padding: 12px 4px;

  flex: 1;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View``;

export const Icons = styled.View`
  padding-right: 8px;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Icon = styled.View`
  padding: 8px;
  background: #f2f2f2;
  border-radius: 50px;

  margin-right: 8px;
`;

export const Footer = styled.View`
  margin-top: 12px;
`;

export const FooterHeading = styled.View`
  margin-bottom: 8px;
`;
