import Place from "@/components/utils/Place";
import type TableType from "@/types/TableType";

const columns = ["Contest", "Place (Qual / Final)", "Team"];

const contests: {
  label: string;
  place: React.ReactNode;
  team: string;
}[] = [
  {
    label: "ISUCON 11",
    place: (
      <>
        <Place value="1st" /> / <Place value="6th" />
      </>
    ),
    team: "shallowverse",
  },
  {
    label: "ISUCON 10",
    place: (
      <>
        <Place value="2nd" /> / <Place value="9th" />
      </>
    ),
    team: "shallowverse",
  },
];

const items = contests.map((contest) => [
  contest.label,
  contest.place,
  contest.team,
]);

const data: TableType = {
  columns,
  items,
};
export default data;
