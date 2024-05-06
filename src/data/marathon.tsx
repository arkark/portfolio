import Place from "@/components/utils/Place";
import type ContestType from "@/types/ContestType";
import type TableType from "@/types/TableType";

const columns = ["Contest", "Place"];

const contests: ContestType[] = [
  {
    label: "ハル研究所 プログラミングコンテスト2020",
    place: "9th",
  },
  {
    label: "ハル研究所 プログラミングコンテスト2019",
    place: "9th",
  },
  {
    label: "ハル研究所 プログラミングコンテスト2018",
    place: "23rd",
  },
  {
    label: "第2回 RCO日本橋ハーフマラソン",
    place: "final",
  },
  {
    label: "ハル研究所 プログラミングコンテスト2017",
    place: "7th",
  },
];

const items = contests.map((contest) => [
  contest.label,
  <Place value={contest.place}></Place>,
]);

const data: TableType = {
  columns,
  items,
};
export default data;
