import { Alert } from "react-native";
import { useEffect, useState } from "react";
import * as LocalAuthentication from "expo-local-authentication";

export default function useLocalAuthentication() {
  const [authenticationId, setAuthenticationId] = useState(false);

  async function verifyAvaliableLocalAuthentication() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (!compatible) {
      return Alert.alert("Dispositivo não compatível com sistema biométrico!");
    }
  }

  async function handleLocalAuthentication() {
    const isBiometricenrolled = await LocalAuthentication.isEnrolledAsync();

    if (!isBiometricenrolled) {
      return Alert.alert("Biometria não encontrada!");
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: "Desbloqueie seu celular.",
      cancelLabel: "Biometria não reconhecida",
    });

    setAuthenticationId(auth.success);
  }

  useEffect(() => {
    verifyAvaliableLocalAuthentication();
  }, []);

  return { authenticationId, handleLocalAuthentication };
}
