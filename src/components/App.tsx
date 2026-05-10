import Table from "@/components/utils/Table";
import data from "@/data/index";
import Link from "@/components/utils/Link";
import Tree from "@/components/utils/Tree";
import { FaGithub, FaXTwitter, FaPenNib } from "react-icons/fa6";
import TabContent from "./TabContent";

function App() {
  return (
    <>
      <div className="mx-auto max-w-3xl p-3 sm:p-6">
        <div className="tabs tabs-border justify-end items-center">
          <TabContent name="root_tab" label="About" defaultChecked>
            <h2>Ark's page</h2>
            <div className="flex flex-col sm:flex-row sm:gap-3 mb-3">
              <div className="flex flex-col justify-center mx-4">
                <img
                  className="w-28 h-28 bg-transparent spinner"
                  src={"/ark_256x256.png"}
                  alt="Ark's logo"
                />
              </div>
              <div className="flex flex-col justify-center gap-0.5 my-4">
                <div>
                  <FaGithub className="size-4 inline mr-2"></FaGithub>
                  {"GitHub: "}
                  <Link href="https://github.com/arkark">arkark</Link>
                </div>
                <div>
                  <FaXTwitter className="size-4 inline mr-2"></FaXTwitter>
                  {"X (Twitter): "}
                  <Link href="https://x.com/arkark_">@arkark_</Link>
                </div>
                <div>
                  <FaPenNib className="size-4 inline mr-2"></FaPenNib>
                  {"Blog: "}
                  <Link href="https://blog.arkark.dev/">XS-Spin Blog</Link>
                </div>
              </div>
            </div>
            <h3>About</h3>
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
            <h3>CTF Events</h3>
            <p className="mb-0">
              {"Repository: "}
              <Link href="https://github.com/arkark/my-ctf-challenges">
                my-ctf-challenges
              </Link>
            </p>
            <Tree {...data.activity}></Tree>
          </TabContent>

          <TabContent name="root_tab" label="Competitions">
            <h3>Capture The Flag</h3>
            <p className="mb-0">
              {"Main team: "}
              <Link href="https://ctftime.org/team/80092">./Vespiary</Link>
            </p>
            <Table {...data.ctf}></Table>

            <h3>Web Tuning Contests</h3>
            <Table {...data.isucon}></Table>
          </TabContent>

          <TabContent name="root_tab" label="Research">
            <h3>Articles</h3>
            <Tree {...data.article}></Tree>
            <p>
              <Link href="https://blog.arkark.dev/">and more...</Link>
            </p>
            <h3>Slides</h3>
            <Tree {...data.slide}></Tree>
          </TabContent>

          <TabContent name="root_tab" label="CVEs">
            <h3>CVEs</h3>
            <Table {...data.cve}></Table>
          </TabContent>

          <TabContent name="root_tab" label="Career">
            <h3>Work Experience</h3>
            <h4>Present</h4>
            <Tree {...data.career.present}></Tree>
            <h4>Past</h4>
            <Tree {...data.career.past}></Tree>
            <h4>Student Part-Time Jobs</h4>
            <Tree {...data.career.partTime}></Tree>

            <h3>Education</h3>
            <Tree {...data.education}></Tree>
          </TabContent>
        </div>
      </div>
    </>
  );
}

export default App;
