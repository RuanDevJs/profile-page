import { Dimensions, FlatList } from "react-native";
import Text from "../../../Components/Text";
import * as Styled from "./styles";

export default function Jobs() {
  const { width: DeviceWidth } = Dimensions.get("window");

  const JOBS = [
    "Front End Developer",
    "Mobile Developer",
    "Back End Developer",
    "UI Designer",
    "UX Designer",
    "Music Student",
  ];

  return (
    <Styled.Jobs>
      <Text
        size="lg"
        weight="bold"
        colors="dark"
        style={{ textAlign: "center" }}
      >
        Jobs done
      </Text>
      <FlatList
        data={JOBS}
        keyExtractor={(_, index) => `$JOB_KEY=${index}`}
        renderItem={({ item, index }) => {
          return (
            <Styled.Job>
              <Styled.JobWrap>
                <Text
                  size="sm"
                  weight="regular"
                  colors="gray_100"
                  style={{ textAlign: "center" }}
                >
                  {item}
                </Text>
              </Styled.JobWrap>
            </Styled.Job>
          );
        }}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        decelerationRate={0}
        bounces={false}
        snapToInterval={DeviceWidth}
        showsHorizontalScrollIndicator={false}
      />
    </Styled.Jobs>
  );
}
