// Sherbimet e biznesit — shto/hiq objekte per te perditesuar seksionin "Sherbimet".
import { DoorOpen, AppWindow, Building2, Layers, Shield, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const services: Service[] = [
  {
    title: "Dyer Duralumini",
    description:
      "Dyer hyrjeje, dyer te brendshme dhe dyer industriale nga duralumini — te forta, te sigurta, me izolim optimal.",
    icon: DoorOpen,
  },
  {
    title: "Dritare PVC",
    description:
      "Dritare PVC me xham dyfish, izolim termik dhe akustik te larte. Modele te ndryshme sipas ambientit.",
    icon: AppWindow,
  },
  {
    title: "Fasada & Vitrina",
    description:
      "Fasada nga duralumini per biznese, vitrina dyqanesh dhe struktura xhami me profil te holle.",
    icon: Building2,
  },
  {
    title: "Rrethim Xhami",
    description:
      "Parmakë ballkoni me xham, ndarje ambientesh dhe kabina dushi me profile duralumini.",
    icon: Layers,
  },
  {
    title: "Grila & Siguri",
    description:
      "Grila metalike, dyer sigurie dhe struktura mbrojtese te punuara sipas madhesise se ambientit.",
    icon: Shield,
  },
  {
    title: "Riparim & Mirembajtje",
    description:
      "Sherbim per riparimin e dyerve, dritareve dhe strukturave ekzistuese duralumini ose PVC.",
    icon: Wrench,
  },
];
