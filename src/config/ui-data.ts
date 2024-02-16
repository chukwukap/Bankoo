import {
  SaveIcon,
  CreditCardIcon,
  HandCoinsIcon,
  ServerIcon,
  PictureInPicture,
  Settings2Icon,
  LucideHome,
  User2Icon,
  Bitcoin,
} from "lucide-react";

export const sidebarNavItems = [
  {
    name: "home",
    path: "/home",
    icon: LucideHome,
  },
  {
    name: "transactions",
    path: "/transactions",
    icon: Bitcoin,
  },
  {
    name: "accounts",
    path: "/accounts",
    icon: User2Icon,
  },
  {
    name: "investments",
    path: "/investments",
    icon: SaveIcon,
  },
  {
    name: "credit cards",
    path: "/credit-cards",
    icon: CreditCardIcon,
  },
  {
    name: "loans",
    path: "/loans",
    icon: HandCoinsIcon,
  },
  {
    name: "services",
    path: "/services",
    icon: ServerIcon,
  },
  {
    name: "my privileges",
    path: "/privileges",
    icon: PictureInPicture,
  },
  {
    name: "settings",
    path: "/settings",
    icon: Settings2Icon,
  },
];

export const txTypes = [
  {
    method: "paypal",
    icon: "/assets/icons/paypal-payment.svg",
  },
  {
    method: "card",
    icon: "/assets/icons/card.svg",
  },
  {
    method: "bank",
    icon: "/assets/icons/bank.svg",
  },
];
