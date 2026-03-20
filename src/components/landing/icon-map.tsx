import {
  BarChart3,
  CheckCircle2,
  Clock3,
  Instagram,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  MessageSquareQuote,
  Phone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  Workflow,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import type { IconName } from "@/lib/icon-names";

const iconMap: Record<IconName, LucideIcon> = {
  sparkles: Sparkles,
  shield: ShieldCheck,
  chart: BarChart3,
  rocket: Rocket,
  clock: Clock3,
  layers: Layers3,
  target: Target,
  users: Users,
  workflow: Workflow,
  check: CheckCircle2,
  message: MessageSquareQuote,
  star: Star,
  mail: Mail,
  phone: Phone,
  map: MapPin,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

export function getIcon(name: IconName): LucideIcon {
  return iconMap[name];
}

