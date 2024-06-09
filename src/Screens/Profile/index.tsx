import { FlatList } from "react-native";
import Heading from "./Heading";

import { Dimensions } from "react-native";

import Text from "../../Components/Text";
import Jobs from "./Jobs";

import * as Styled from "./styles";

export default function Profile() {
  const { width: DeviceWidth } = Dimensions.get("window");

  return (
    <Styled.Container>
      <Heading />
      <Jobs />
      <Styled.Background>
        <Styled.Ratting>
          <Styled.RattingWrap>
            <Text weight="medium" colors="gray_100" style={{ fontSize: 25 }}>
              4.3
            </Text>
            <Text weight="regular" colors="gray_200" size="sm">
              Average Rating
            </Text>
          </Styled.RattingWrap>
          <Styled.RattingWrap>
            <Text weight="medium" colors="gray_100" style={{ fontSize: 25 }}>
              37
            </Text>
            <Text weight="regular" colors="gray_200" size="sm">
              Jobs Completed
            </Text>
          </Styled.RattingWrap>
          <Styled.RattingWrap>
            <Text weight="regular" colors="gray_200" size="x_sm">
              pay range
            </Text>
            <Text weight="medium" colors="gray_100" style={{ fontSize: 25 }}>
              150k - 200k
            </Text>
            <Text weight="regular" colors="gray_200" size="sm">
              (negotiable)
            </Text>
          </Styled.RattingWrap>
          <Styled.RattingWrap style={{ flex: 1 }}>
            <Text weight="medium" colors="gray_100" style={{ fontSize: 32 }}>
              02
            </Text>
            <Text weight="regular" colors="gray_200" size="x_sm">
              ongoing
            </Text>
          </Styled.RattingWrap>
          <Styled.Footer>
            <Text size="md" colors="gray_100" weight="medium">
              Availability
            </Text>
            <Text size="sm" colors="gray_200" weight="regular">
              Excellent
            </Text>
          </Styled.Footer>
          <Styled.Footer>
            <Text size="md" colors="gray_100" weight="medium">
              Service
            </Text>
            <Text size="sm" colors="gray_200" weight="regular">
              Good
            </Text>
          </Styled.Footer>
          <Styled.Footer>
            <Text size="md" colors="gray_100" weight="medium">
              Quality
            </Text>
            <Text size="sm" colors="gray_200" weight="regular">
              Good
            </Text>
          </Styled.Footer>
        </Styled.Ratting>
      </Styled.Background>
    </Styled.Container>
  );
}
