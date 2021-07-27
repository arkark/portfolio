import type ContestType from "@/components/about/contest/data/ContestType";

const ctfData: { year: string; contests: ContestType[] }[] = [
  {
    year: "2022",
    contests: [
      {
        label: "zer0pts CTF 2022",
        place: "6th",
      },
    ],
  },
  {
    year: "2021",
    contests: [
      {
        label: "N1CTF 2021",
        place: "7th",
      },
      {
        label: "BSides Ahmedabad CTF 2021",
        place: "1st",
        emoji: "🥇",
      },
      {
        label: "TSG CTF 2021",
        place: "3rd",
        emoji: "🥉",
      },
      {
        label: "DownUnderCTF 2021",
        place: "2nd",
        emoji: "🥈",
      },
      {
        label: "ALLES! CTF 2021",
        place: "7th",
      },
      {
        label: "CakeCTF 2021",
        place: "2nd",
        emoji: "🥈",
      },
      {
        label: "BSides Noida CTF",
        place: "4th",
      },
      {
        label: "Circle City Con CTF 2021",
        place: "2nd",
        emoji: "🥈",
      },
      {
        label: "LINE CTF 2021",
        place: "8th",
      },
      {
        label: "Union CTF 2021",
        place: "5th",
      },
    ],
  },
  {
    year: "2020",
    contests: [
      {
        label: "SECCON 2020 Online CTF",
        place: "7th",
      },
      {
        label: "InterKosenCTF 2020",
        place: "3rd",
        emoji: "🥉",
      },
      {
        label: "TSG CTF 2020",
        place: "7th",
      },
    ],
  },
  {
    year: "2019",
    contests: [
      {
        label: "SECCON 2019 CTF",
        place: "domestic final",
      },
    ],
  },
];

export default ctfData;
