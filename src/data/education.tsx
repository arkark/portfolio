import TreeType from "@/types/TreeType";

const tree: TreeType = {
  items: [
    {
      content: (
        <>
          Master of Science: <b>Tokyo Institute of Technology</b>
        </>
      ),
      items: [
        {
          content: "Dept: Mathematical and Computing Science",
        },
        {
          content: "Apr. 2019 - Mar. 2021",
        },
      ],
    },
    {
      content: (
        <>
          Bachelor of Science: <b>Tokyo Institute of Technology</b>
        </>
      ),
      items: [
        {
          content: "Dept: Information Science",
        },
        {
          content: "Apr. 2015 - Mar. 2019",
        },
      ],
    },
  ],
};

export default tree;
