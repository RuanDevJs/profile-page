import { Dimensions, FlatList } from "react-native";

import { List, Plus } from "phosphor-react-native";
import { useTheme } from "styled-components/native";

import Heading from "./Heading";
import Text from "../../Components/Text";

import ImageUser from "../../assets/User image.jpg";

import { GestureDetector, Gesture } from "react-native-gesture-handler";
import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
} from "react-native-reanimated";
import * as Styled from "./styles";

export default function Dashboard() {
  const theme = useTheme();
  const translateY = useSharedValue(0);
  const contextTranslateY = useSharedValue(0);
  const HOUSES = ["Tabi Lateef", "Queen Needle", "Joan Blessing"];

  const { width: DeviceWidth } = Dimensions.get("window");
  const gestureHandler = Gesture.Pan()
    .onStart(() => {
      contextTranslateY.value = translateY.value;
    })
    .onChange(({ translationY }) => {
      translateY.value = translationY + contextTranslateY.value;

      /* Limit to Scroll Up */
      if (translateY.value <= 0) {
        return (translateY.value = 0);
      }

      /* Limit to Scroll Down */
      if (translateY.value >= DeviceWidth * 0.62) {
        return (translateY.value = DeviceWidth * 0.62);
      }
    })
    .onEnd(({ translationY }) => {});

  const rAnimatedCardStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(translateY.value),
        },
      ],
    };
  }, []);

  const rAnimatedHouseStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translateY.value, [0, DeviceWidth * 0.62], [1, 0]),
      transform: [
        {
          translateY: withSpring(
            interpolate(translateY.value, [0, DeviceWidth * 0.62], [0, 200])
          ),
        },
      ],
    };
  }, []);

  const rAnimatedService = useAnimatedStyle(() => {
    return {
      opacity: interpolate(translateY.value, [0, DeviceWidth * 0.62], [0, 1]),
      transform: [
        {
          translateY: withSpring(
            interpolate(translateY.value, [0, DeviceWidth * 0.62], [-20, 0])
          ),
        },
      ],
    };
  }, []);

  return (
    <Styled.Container>
      <Styled.Heading>
        <Text colors="dark" size="lg" weight="bold">
          Profile
        </Text>
        <List size={22} weight="bold" color={theme.colors.orange} />
      </Styled.Heading>
      <Heading />
      {/* <Styled.Boxes>
        <Styled.Box>
          <Styled.Wrap>
            <Text colors="dark" size="sm" weight="medium">
              Wallet Balance:
            </Text>
            <Text colors="orange" size="lg" weight="bold">
              $5046.57
            </Text>
          </Styled.Wrap>
          <Styled.Wrap>
            <Text colors="dark" size="sm" weight="medium">
              Total Service
            </Text>
            <Text
              colors="orange"
              size="lg"
              weight="bold"
              style={{ textAlign: "center" }}
            >
              24
            </Text>
          </Styled.Wrap>
        </Styled.Box>
        <Styled.Box style={{ backgroundColor: theme.colors.orange }}>
          <Styled.Wrap style={{ alignItems: "flex-end" }}>
            <Text colors="gray_200" size="sm" weight="regular">
              Master Card{" "}
            </Text>
          </Styled.Wrap>
          <Styled.Wrap>
            <Text colors="gray_100" size="x_md" weight="bold">
              5999-XXXX
            </Text>
            <Text colors="gray_100" size="x_md" weight="bold">
              Carlo Acutis
            </Text>
          </Styled.Wrap>
        </Styled.Box>
      </Styled.Boxes> */}
      <Styled.Services style={rAnimatedService}>
        <Styled.Service>
          <Text colors="gray_100" size="x_md" weight="bold">
            Electrical
          </Text>
        </Styled.Service>
        <Styled.Service>
          <Text colors="gray_100" size="x_md" weight="bold">
            Others
          </Text>
        </Styled.Service>
      </Styled.Services>
      <GestureDetector gesture={gestureHandler}>
        <Styled.Card style={rAnimatedCardStyle}>
          <Text colors="gray_100" size="x_lg" weight="bold">
            Wallet Balance:
          </Text>
          <Text
            colors="gray_100"
            size="lg"
            weight="regular"
            style={{ marginVertical: 8 }}
          >
            $5046.57
          </Text>
          <Text
            colors="gray_100"
            size="lg"
            weight="bold"
            style={{ marginVertical: 8, textTransform: "capitalize" }}
          >
            Total Services:
          </Text>
          <Text
            colors="gray_100"
            size="x_md"
            weight="medium"
            style={{ marginVertical: 8 }}
          >
            24
          </Text>
          <Styled.CardFooter>
            <Styled.CardFooterContainer>
              <Text
                colors="gray_300"
                size="sm"
                weight="medium"
                style={{ paddingVertical: 2 }}
              >
                Master Card
              </Text>
              <Text colors="orange" size="sm" weight="medium">
                5999-XXXX
              </Text>
              <Text
                colors="dark"
                size="x_md"
                weight="bold"
                style={{ paddingVertical: 8 }}
              >
                Carlo Acutis
              </Text>
            </Styled.CardFooterContainer>
          </Styled.CardFooter>
        </Styled.Card>
      </GestureDetector>
      <Styled.Houses style={rAnimatedHouseStyle}>
        <Text colors="dark" size="lg" weight="regular">
          Houses
        </Text>
        <FlatList
          data={HOUSES}
          keyExtractor={(key) => `$key=${key}`}
          ListHeaderComponent={() => {
            return (
              <Styled.House>
                <Styled.AddButton>
                  <Plus size={18} color={theme.colors.gray_100} />
                </Styled.AddButton>
                <Text
                  size="sm"
                  weight="medium"
                  colors="dark"
                  style={{ marginVertical: 5, textAlign: "center" }}
                >
                  Add {"\n"} Workers
                </Text>
              </Styled.House>
            );
          }}
          renderItem={({ item }) => {
            return (
              <Styled.House>
                <Styled.Image
                  source={ImageUser}
                  resizeMethod="resize"
                  resizeMode="cover"
                />
                <Text
                  size="sm"
                  weight="medium"
                  colors="dark"
                  style={{ marginVertical: 5, textAlign: "center", width: 55 }}
                >
                  {item}
                </Text>
              </Styled.House>
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </Styled.Houses>
    </Styled.Container>
  );
}
