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
    name: "active logins",
    path: "/active-logins",
    icon: Bitcoin,
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
