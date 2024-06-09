import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";

interface IProps {
  iconName: keyof typeof AntDesign.glyphMap;
  size: number;
  color: string;
  focused?: boolean;
}

export default function Icon({ iconName, size, color, focused }: IProps) {
  const theme = useTheme();
  return <AntDesign name={iconName} size={size} color={color} />;
}
