import Place from "@/components/utils/Place";
import type ContestType from "@/types/ContestType";
import type TableType from "@/types/TableType";

const columns = ["Contest", "Place"];

const contests: ContestType[] = [
  {
    label: "第一回日本最強プログラマー学生選手権",
    place: "final",
  },
  {
    label: "Battle Conference U30 #2019 PROGRAMMING BATTLE",
    place: "3rd",
  },
  {
    label: "DISCO presents ディスカバリーチャンネル コードコンテスト2019",
    place: "final",
  },
  {
    label: "CODE FESTIVAL 2018",
    place: "THANKS final",
  },
  {
    label: "第4回 ドワンゴからの挑戦状",
    place: "final",
  },
  {
    label: "CODE FESTIVAL 2017",
    place: "THANKS final",
  },
  {
    label: "CODE FESTIVAL 2016",
    place: "final",
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
