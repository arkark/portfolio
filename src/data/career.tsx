import type TreeType from "@/types/TreeType";

const career = {
  present: [
    {
      label: "GMO Cybersecurity by Ierae, Inc.",
      info: "Security Engineer (Nov. 2022 - present)",
    },
  ],
  past: [
    {
      label: "Ricerca Security, Inc.",
      info: "Security Engineer (Oct. 2021 - Sep. 2022)",
    },
    {
      label: "LY Corporation",
      info: "Data Platform Engineer (Apr. 2021 - Oct. 2022)",
    },
  ],
  partTime: [
    {
      label: "MC Digital, Inc.",
      info: "Software Engineer (Apr. 2020 - Oct. 2020)",
    },
    {
      label: "Toyokumo, Inc.",
      info: "Software Engineer (Aug. 2018 - Sep. 2019)",
    },
    {
      label: "OCTEC Inc.",
      info: "Software Engineer (Nov. 2017 - Jul. 2018)",
    },
  ],
};

const toTree = (items: { label: string; info: string }[]): TreeType => ({
  items: items.map(({ label, info }) => ({
    content: <b>{label}</b>,
    items: [
      {
        content: info,
      },
    ],
  })),
});

export default {
  present: toTree(career.present),
  past: toTree(career.past),
  partTime: toTree(career.partTime),
};
