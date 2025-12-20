import { Partner } from "@/lib/type";

export const partners: Partner[] = [
  {
    id: "1",
    name: "TechCorp Solutions",
    logo: "/images/partners/techcorp.png",
    description: "Leading technology solutions provider supporting open source innovation.",
    website: "https://techcorp.example.com",
    type: "sponsor",
    tier: "platinum",
  },
  {
    id: "2",
    name: "CloudBase Inc",
    logo: "/images/partners/cloudbase.png",
    description: "Cloud infrastructure partner providing hosting and deployment solutions.",
    website: "https://cloudbase.example.com",
    type: "partner",
    tier: "gold",
  },
  {
    id: "3",
    name: "DevTools Pro",
    logo: "/images/partners/devtools.png",
    description: "Developer tools and IDE provider supporting our community.",
    website: "https://devtools.example.com",
    type: "sponsor",
    tier: "gold",
  },
  {
    id: "4",
    name: "OpenSource Foundation",
    logo: "/images/partners/osf.png",
    description: "Non-profit organization promoting open source software worldwide.",
    website: "https://osf.example.com",
    type: "partner",
    tier: "silver",
  },
  {
    id: "5",
    name: "CodeAcademy",
    logo: "/images/partners/codeacademy.png",
    description: "Education partner providing learning resources for our community.",
    website: "https://codeacademy.example.com",
    type: "supporter",
    tier: "silver",
  },
  {
    id: "6",
    name: "Design Studio",
    logo: "/images/partners/designstudio.png",
    description: "Creative agency helping with design and branding initiatives.",
    website: "https://designstudio.example.com",
    type: "supporter",
    tier: "bronze",
  },
];

export const partnerTiers = ["all", "platinum", "gold", "silver", "bronze"] as const;
export const partnerTypes = ["all", "sponsor", "partner", "supporter"] as const;