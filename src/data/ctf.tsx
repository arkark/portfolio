import Place from "@/components/utils/Place";
import type ContestType from "@/types/ContestType";
import type TableType from "@/types/TableType";

const columns = ["Contest", "Place", "Team"];

const contests: ContestType[] = [
  {
    label: "jailCTF 2024",
    place: "3rd",
    team: "./Vespiary",
  },
  {
    label: "corCTF 2024",
    place: "4th",
    team: "./Vespiary",
  },
  {
    label: "LINE CTF 2024",
    place: "2nd",
    team: "ierae",
  },
  {
    label: "TSG CTF 2023",
    place: "1st",
    team: "./Vespiary",
  },
  {
    label: "SEETF 2023",
    place: "3rd",
    team: "./Vespiary",
  },
  {
    label: "TJCTF 2023",
    place: "1st",
    team: "./Vespiary",
  },
  {
    label: "BSides Algiers 2023",
    place: "3rd",
    team: "./Vespiary",
  },
  {
    label: "hxp CTF 2022",
    place: "5th",
    team: "./Vespiary",
  },
  {
    label: "WeCTF 2022",
    place: "2nd",
    team: "hogehogeErs",
  },
  {
    label: "CrewCTF 2022",
    place: "5th",
    team: "./Vespiary",
  },
  {
    label: "zer0pts CTF 2022",
    place: "6th",
    team: "./Vespiary",
  },
  {
    label: "BSides Ahmedabad CTF 2021",
    place: "1st",
    team: "./Vespiary",
  },
  {
    label: "TSG CTF 2021",
    place: "3rd",
    team: "./Vespiary",
  },
  {
    label: "DownUnderCTF 2021",
    place: "2nd",
    team: "./Vespiary",
  },
  {
    label: "CakeCTF 2021",
    place: "2nd",
    team: "./Vespiary",
  },
  {
    label: "BSides Noida CTF",
    place: "4th",
    team: "./Vespiary",
  },
  {
    label: "Circle City Con CTF 2021",
    place: "2nd",
    team: "./Vespiary",
  },
  {
    label: "Union CTF 2021",
    place: "5th",
    team: "./Vespiary",
  },
  {
    label: "SECCON 2020 Online CTF",
    place: "7th",
    team: "./Vespiary",
  },
  {
    label: "InterKosenCTF 2020",
    place: "3rd",
    team: "./Vespiary",
  },
  {
    label: "TSG CTF 2020",
    place: "7th",
    team: "./Vespiary",
  },
  {
    label: "SECCON 2019 CTF",
    place: "domestic final",
    team: "./Vespiary",
  },
];

const items = contests.map((contest) => [
  contest.label,
  <Place value={contest.place}></Place>,
  contest.team,
]);

const data: TableType = {
  columns,
  items,
};
export default data;
