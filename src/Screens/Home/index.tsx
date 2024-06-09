import { FlatList, Switch, View } from "react-native";
import { useEffect, useState } from "react";

import Header from "../../Components/Heading";

import Text from "../../Components/Text";
import Menu from "../../services/Menu";

import {
  Bell,
  BellRinging,
  CaretRight,
  Heart,
  Lock,
  ShieldCheck,
  SignOut,
  User,
  Warning,
} from "phosphor-react-native";
import useLocalAuthentication from "../../hooks/useLocalAuthentication";

import { useTheme } from "styled-components/native";
import * as Styled from "./styles";

export default function Home() {
  const [active, setActive] = useState(false);
  const { authenticationId, handleLocalAuthentication } =
    useLocalAuthentication();

  const theme = useTheme();

  useEffect(() => {
    if (active) {
      handleLocalAuthentication();
    }

    authenticationId === false && setActive(false);
  }, [active]);

  return (
    <Styled.Container>
      <Styled.Heading>
        <Text colors="dark" size="lg" weight="bold">
          Profile
        </Text>
        <Header />
      </Styled.Heading>
      <Styled.Menu>
        <FlatList
          data={Menu}
          keyExtractor={(item) => item.key}
          renderItem={({ item, index }) => {
            return (
              <Styled.Background
                style={{
                  borderTopLeftRadius: index === 0 ? 12 : 0,
                  borderTopRightRadius: index === 0 ? 12 : 0,
                  borderBottomLeftRadius: Menu.length - 1 === index ? 12 : 0,
                  borderBottomRightRadius: Menu.length - 1 === index ? 12 : 0,
                }}
              >
                <Styled.Wrap activeOpacity={0.5}>
                  <Styled.Icon>
                    {item.icon === "Person" && <User color="#0601B4" />}
                    {item.icon === "Lock" && <Lock color="#0601B4" />}
                    {item.icon === "Security" && (
                      <ShieldCheck color="#0601B4" />
                    )}
                    {item.icon === "LogOut" && <SignOut color="#0601B4" />}
                  </Styled.Icon>
                  <Styled.Info>
                    <Styled.Content>
                      <Text weight="medium" size="md" colors="dark">
                        {item.content.title}
                      </Text>
                      <Text weight="regular" size="x_sm" colors="gray_300">
                        {item.content.title}
                      </Text>
                    </Styled.Content>
                    <Styled.Icons>
                      {item.key === "my-account" && (
                        <Warning color="#EC5865" size={18} weight="fill" />
                      )}
                      {item.key === "face-id" && (
                        <Switch
                          onValueChange={(value) => setActive(value)}
                          value={active}
                          thumbColor={
                            active ? theme.colors.blue : theme.colors.gray_300
                          }
                          trackColor={{
                            true: theme.colors.blue,
                            false: theme.colors.gray_300,
                          }}
                        />
                      )}
                      <CaretRight />
                    </Styled.Icons>
                  </Styled.Info>
                </Styled.Wrap>
              </Styled.Background>
            );
          }}
          ListFooterComponent={({ item }) => {
            return (
              <Styled.Footer>
                <Styled.FooterHeading>
                  <Text weight="medium" size="lg" colors="dark">
                    More
                  </Text>
                </Styled.FooterHeading>
                <Styled.Background>
                  <Styled.Wrap>
                    <Styled.Icon>
                      <Bell color="#0601B4" />
                    </Styled.Icon>
                    <Styled.Info>
                      <Text weight="medium" size="md" colors="dark">
                        Help & Support
                      </Text>
                    </Styled.Info>
                  </Styled.Wrap>
                </Styled.Background>
                <Styled.Background>
                  <Styled.Wrap>
                    <Styled.Icon>
                      <Heart color="#0601B4" />
                    </Styled.Icon>
                    <Styled.Info>
                      <Text weight="medium" size="md" colors="dark">
                        About App
                      </Text>
                    </Styled.Info>
                  </Styled.Wrap>
                </Styled.Background>
              </Styled.Footer>
            );
          }}
          showsVerticalScrollIndicator={false}
        />
      </Styled.Menu>
    </Styled.Container>
  );
}
