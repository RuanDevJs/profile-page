type MenuKeys =
  | "my-account"
  | "saved-beneficiary"
  | "face-id"
  | "two-factor"
  | "log-out";

interface IMenu {
  key: MenuKeys;
  icon: "Person" | "Lock" | "Security" | "LogOut";
  content: {
    title: string;
    text: string;
  };
}

const Menu: IMenu[] = [
  {
    key: "my-account",
    icon: "Person",
    content: {
      title: "My Account",
      text: "Make changes to your account",
    },
  },
  {
    key: "saved-beneficiary",
    icon: "Person",
    content: {
      title: "Saved Beneficiary",
      text: "Manage your saved account",
    },
  },
  {
    key: "face-id",
    icon: "Lock",
    content: {
      title: "Face ID / Touch ID",
      text: "Manage your device security",
    },
  },
  {
    key: "two-factor",
    icon: "Security",
    content: {
      title: "Two-Factor Authentication",
      text: "Further secure your account for safety",
    },
  },
  {
    key: "log-out",
    icon: "LogOut",
    content: {
      title: "Log out",
      text: "Further secure your account for safety",
    },
  },
];

export default Menu;
