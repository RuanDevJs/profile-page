import { ArrowLeft } from "phosphor-react-native";
import Text from "../../../Components/Text";
import ProfilePicture from "../../../assets/Picture.jpg";

import { useNavigation } from "@react-navigation/native";
import * as Styled from "./styles";

export default function Heading() {
  const navigate = useNavigation();

  return (
    <Styled.Container>
      <Styled.Left>
        <Styled.Icon
          activeOpacity={0.72}
          style={{ left: 0 }}
          onPress={() => navigate.navigate("Home")}
        >
          <ArrowLeft size={18} color="#EF4637" weight="bold" />
        </Styled.Icon>
        <Styled.Picture source={ProfilePicture} />
        <Text size="x_lg" weight="regular" colors="dark">
          Carlo Acutis
        </Text>
      </Styled.Left>
      <Styled.Right>
        <Styled.Icon activeOpacity={0.72} style={{ right: 0 }}>
          <Text size="x_md" weight="medium" colors="dark">
            Profile
          </Text>
        </Styled.Icon>
        <Styled.Content>
          <Styled.Wrap>
            <Text size="x_md" weight="regular" colors="dark">
              Profession
            </Text>
            <Text size="md" weight="regular" colors="orange">
              Front End Developer
            </Text>
          </Styled.Wrap>
          <Styled.Wrap>
            <Text size="x_md" weight="regular" colors="dark">
              Contact
            </Text>
            <Text size="md" weight="regular" colors="orange">
              carloacutis@gmail.com
            </Text>
          </Styled.Wrap>
          <Styled.Wrap>
            <Text size="x_md" weight="regular" colors="dark">
              Location
            </Text>
            <Text size="md" weight="regular" colors="orange">
              Heaven
            </Text>
          </Styled.Wrap>
          <Styled.Wrap>
            <Text size="x_md" weight="regular" colors="dark">
              Position
            </Text>
            <Text size="md" weight="regular" colors="orange">
              Open
            </Text>
          </Styled.Wrap>
        </Styled.Content>
      </Styled.Right>
    </Styled.Container>
  );
}
