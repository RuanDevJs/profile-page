import Text from "../Text";

import Picture from "../../assets/Picture.jpg";
import * as Styled from "./styles";
import { Pencil } from "phosphor-react-native";

export default function Header() {
  return (
    <Styled.Container activeOpacity={0.72}>
      <Styled.Row>
        <Styled.Picture
          source={Picture}
          resizeMethod="resize"
          resizeMode="cover"
        />
        <Styled.Info>
          <Styled.Content>
            <Text size="md" colors="gray_100" weight="bold">
              Carlo Acutis
            </Text>
            <Text size="x_sm" colors="gray_200" weight="regular">
              @CarloAcutis
            </Text>
          </Styled.Content>
          <Styled.EditProfile activeOpacity={0.5}>
            <Pencil size={24} color="#fff" weight="duotone" />
          </Styled.EditProfile>
        </Styled.Info>
      </Styled.Row>
    </Styled.Container>
  );
}
