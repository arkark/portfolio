import Table from "@/components/utils/Table";
import data from "@/data/index";
import Link from "@/components/utils/Link";
import Tree from "@/components/utils/Tree";
import { FaGithub, FaXTwitter, FaPenNib } from "react-icons/fa6";
import TabContent from "./TabContent";

function App() {
  return (
    <>
      <div className="mx-auto max-w-4xl p-6 ">
        <div className="tabs tabs-border justify-end items-center">
          <TabContent name="root_tab" label="About" defaultChecked>
            <h1>Ark's page</h1>
            <div className="flex flex-col sm:flex-row sm:gap-3">
              <div className="flex flex-col justify-center">
                <img
                  className="w-28 h-28 mx-3 bg-transparent spinner"
                  src={"/ark_256x256.png"}
                  alt="Ark's logo"
                />
              </div>
              <ul className="list-none pl-0">
                <li>
                  <FaGithub className="size-4 inline mr-2"></FaGithub>
                  {"GitHub: "}
                  <Link href="https://github.com/arkark">arkark</Link>
                </li>
                <li>
                  <FaXTwitter className="size-4 inline mr-2"></FaXTwitter>
                  {"X (Twitter): "}
                  <Link href="https://twitter.com/arkark_">@arkark_</Link>
                </li>
                <li>
                  <FaPenNib className="size-4 inline mr-2"></FaPenNib>
                  {"Blog: "}
                  <Link href="https://blog.arkark.dev/">XS-Spin Blog</Link>
                </li>
              </ul>
            </div>
            <h2>About</h2>
            <ul>
              <li>
                Name: <b>Takeshi Kaneko</b> / <b>Ark</b>
              </li>
              <li>
                Web security engineer and researcher based in Japan
                <ul>
                  <li>
                    {"Interests: "}
                    <b>client-side attacks</b> and <b>browser security</b>
                  </li>
                </ul>
              </li>
              <li>
                Active in CTFs as a player and challenge author
                <ul>
                  <li>
                    {"Interests: "}
                    <b>browser quirks</b>, <b>sandbox escapes</b>
                    {", and "}
                    <b>language/runtime internals</b>
                  </li>
                </ul>
              </li>
              <li>
                Other interests
                <ul>
                  <li>Algorithms and data structures</li>
                  <li>Creative coding and generative design</li>
                  <li>Algebra for computer science</li>
                </ul>
              </li>
            </ul>
          </TabContent>

          <TabContent name="root_tab" label="CTF Events">
            <h2>CTF Events</h2>
            <p className="mb-0">
              {"Repository: "}
              <Link href="https://github.com/arkark/my-ctf-challenges">
                my-ctf-challenges
              </Link>
            </p>
            <Tree {...data.activity}></Tree>
          </TabContent>

          <TabContent name="root_tab" label="Competitions">
            <h2>Capture The Flag</h2>
            <p className="mb-0">
              {"Main team: "}
              <Link href="https://ctftime.org/team/80092">./Vespiary</Link>
            </p>
            <Table {...data.ctf}></Table>

            <h2>Web Tuning Contests</h2>
            <Table {...data.isucon}></Table>
          </TabContent>

          <TabContent name="root_tab" label="Research">
            <h2>Articles</h2>
            <Tree {...data.article}></Tree>
            <p>
              <Link href="https://blog.arkark.dev/">and more...</Link>
            </p>
            <h2>Slides</h2>
            <Tree {...data.slide}></Tree>
          </TabContent>

          <TabContent name="root_tab" label="CVEs">
            <h2>CVEs</h2>
            <Table {...data.cve}></Table>
          </TabContent>

          <TabContent name="root_tab" label="Career">
            <h2>Work Experience</h2>
            <h3>Present</h3>
            <Tree {...data.career.present}></Tree>
            <h3>Past</h3>
            <Tree {...data.career.past}></Tree>
            <h3>Student Part-Time Jobs</h3>
            <Tree {...data.career.partTime}></Tree>

            <h2>Education</h2>
            <Tree {...data.education}></Tree>
          </TabContent>
        </div>
      </div>
    </>
  );
}

export default App;
