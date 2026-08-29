import type { GalleryCategory } from "./gallery";

export interface CategoryInfo {
  id: GalleryCategory;
  title: string;
  description: string;
}

export const categories: CategoryInfo[] = [
  {
    id: "Duralumini & PVC",
    title: "Duralumini & PVC",
    description: "Dyer dhe dritare duralumini me precizion industrial + perde kunder insekteve.",
  },
  {
    id: "Tenda & Pergola",
    title: "Tenda & Pergola",
    description: "Tenda pergola dhe bioklimatike me material rezistent ndaj motit.",
  },
  {
    id: "Gijotina",
    title: "Gijotina",
    description: "Dritare tip gijotine, hapje vertikale.",
  },
  {
    id: "Tenda Dielli",
    title: "Tenda Dielli",
    description: "Tenda Dielli per ballkone.",
  },
  {
    id: "Vetrata",
    title: "Vetrata",
    description: "Vetrata xhami me material te sigurte dhe kualitet Europian.",
  },
  {
    id: "Kabina Dushi",
    title: "Kabina Dushi",
    description: "Kabina dushi me material te sigurte dhe kualitet Europian.",
  },
  {
    id: "Streha Xhami",
    title: "Streha Xhami",
    description: "Streha xhami me material te sigurte dhe kualitet Europian.",
  },
  {
    id: "Grila Persjane dhe rrulo",
    title: "Grila Persjane dhe rrulo",
    description: "Grila persjane dhe rrulo me material te sigurte dhe kualitet Europian.",
  },
  {
    id: "Qepena",
    title: "Qepena Automatike",
    description: "Qepena automatike me material te sigurte dhe kualitet Europian.",
  },
  {
    id: "Kangjella",
    title: "Kangjella Xhami dhe Alumini",
    description: "Kangjella me material te sigurte dhe kualitet Europian.",
  },
  {
    id: "Perde",
    title: "Perde rrulo dhe veneciane",
    description: "Perde me material te sigurte dhe kualitet Europian.",
  },
 {
    id: "Punime xhami & alumini",
    title: "Punime xhami & alumini",
    description: "Punime te tjera me xham dhe alumin",
  },
  {
    id: "Dyer me fotoelement",
    title: "Dyer me fotoelement",
    description: "Dyer me fotoelement per Markete dhe Biznese.",
  },
  {
    id: "Xhama Slide",
    title: "Xhama Slide",
    description: "Xhama slide me material te sigurte dhe kualitet Europian.",
  }
];