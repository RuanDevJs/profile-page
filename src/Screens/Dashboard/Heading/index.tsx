import { useTheme } from "styled-components/native";
import { Dimensions } from "react-native";

import Text from "../../../Components/Text";
import Profile from "../../../assets/Picture.jpg";

import * as Styled from "./styles";

export default function Heading() {
  const theme = useTheme();
  const { width: DeviceWidth } = Dimensions.get("window");

  return (
    <Styled.Container>
      <Styled.Row>
        <Styled.Picture source={Profile} />
        <Styled.Info>
          <Text colors="dark" size="lg" weight="regular">
            Carlo Acutis
          </Text>
          <Text colors="orange" size="md" weight="regular">
            @Blessed
          </Text>
        </Styled.Info>
      </Styled.Row>
    </Styled.Container>
  );
}
