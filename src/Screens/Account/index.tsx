import { Platform } from "react-native";
import { useState } from "react";

import Text from "../../Components/Text";
import ProfilePicture from "../../assets/Picture.jpg";

import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import * as Styled from "./styles";

type Gender = "Male" | "Female";

export default function Account() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [genderSelected, setGenderSelected] = useState<Gender | undefined>();

  const navigate = useNavigation();
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;

  function formatPhoneNumber() {
    if (phoneNumber && phoneNumber.length) {
      const getDD = phoneNumber.slice(0, 2);
      const getPhoneNumber = phoneNumber.slice(2).slice(0, 5);
      const getEndPhoneNumber = phoneNumber.slice(7);

      setPhoneNumber(`(${getDD}) ${getPhoneNumber}-${getEndPhoneNumber}`);
    }
  }

  function handleSetGender(value: Gender) {
    if (value !== undefined && value) {
      setGenderSelected(value);
    }
  }

  function handleNavigate() {
    navigate.navigate("Home");
  }

  return (
    <Styled.Container>
      <Styled.Heading>
        <Styled.Icon onPress={handleNavigate}>
          <ArrowLeft />
        </Styled.Icon>
        <Text colors="dark" size="md" weight="medium">
          Bio-data
        </Text>
      </Styled.Heading>
      <Styled.Menu>
        <Styled.Picture source={ProfilePicture} />
        <Text colors="dark" size="x_md" weight="bold">
          Carlo Acutis
        </Text>
        <Text colors="gray_300" size="sm" weight="regular">
          carlo_acutis@gmail.com
        </Text>
      </Styled.Menu>
      <Styled.Form>
        <Styled.Input placeholder="What's your first name?" maxLength={12} />
        <Styled.Input placeholder="And your last name ?" maxLength={14} />
        <Styled.Input
          placeholder="Phone number"
          onBlur={formatPhoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
        {Platform.OS === "android" && (
          <Styled.Picker
            selectedValue={genderSelected}
            onValueChange={(itemValue) => {
              const value = itemValue as Gender;
              handleSetGender(value);
            }}
          >
            <Styled.PickerItem label="Male" value="Male" />
            <Styled.PickerItem label="Female" value="Female" />
          </Styled.Picker>
        )}

        <Styled.Input
          placeholder="What is your date of birth?"
          maxLength={14}
        />
        <Styled.Button activeOpacity={0.72}>
          <Text weight="medium" size="md" colors="gray_100">
            Update Profile
          </Text>
        </Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
}
