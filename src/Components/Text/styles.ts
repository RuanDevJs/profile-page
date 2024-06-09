import styled from "styled-components/native";
import themes from "../../themes";

interface IProps {
  weight: keyof typeof themes.font;
  size: keyof (typeof themes)["font-size"];
  colors: keyof typeof themes.colors;
}

export const Text = styled.Text<IProps>`
  font-family: ${({ theme, weight }) => theme.font[weight]};
  font-size: ${({ theme, size }) => theme["font-size"][size]}px;
  color: ${({ theme, colors }) => theme.colors[colors]};
`;
