import { TextProps } from "react-native";
import themes from "../../themes";
import * as Styled from "./styles";

interface IProps extends TextProps {
  weight?: keyof typeof themes.font;
  size?: keyof (typeof themes)["font-size"];
  colors?: keyof typeof themes.colors;
  children: React.ReactNode;
}

export default function Text({
  weight = "regular",
  size = "md",
  colors = "gray_400",
  children,
  ...props
}: IProps) {
  return (
    <Styled.Text weight={weight} size={size} colors={colors} {...props}>
      {children}
    </Styled.Text>
  );
}
