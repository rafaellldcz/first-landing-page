export const iconNames = [
  "sparkles",
  "shield",
  "chart",
  "rocket",
  "clock",
  "layers",
  "target",
  "users",
  "workflow",
  "check",
  "message",
  "star",
  "mail",
  "phone",
  "map",
  "instagram",
  "linkedin",
  "youtube",
] as const;

export type IconName = (typeof iconNames)[number];

