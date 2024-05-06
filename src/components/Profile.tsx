import Table from "@/components/utils/Table";
import data from "@/data/index";
import Link from "@/components/utils/Link";
import Tree from "@/components/utils/Tree";
import { FaGithub, FaXTwitter, FaPenNib, FaLinkedin } from "react-icons/fa6";
import BioIcon from "@/components/BioIcon";

const Profile: React.FC = () => {
  return (
    <div className="prose max-w-full">
      <h1 className="my-4 text-center">Ark's page</h1>
      <div className="flex justify-center">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col justify-center">
            <BioIcon className="w-36 h-36 bg-transparent ml-2 mt-4"></BioIcon>
          </div>
          <div className="flex flex-col justify-center">
            <ul className="list-none my-2 pl-0">
              <li>
                <FaGithub className="size-4 inline mr-2"></FaGithub>
                {"GitHub: "}
                <Link href="https://github.com/arkark">arkark</Link>
              </li>
              <li className="sm:ml-[.8rem]">
                <FaXTwitter className="size-4 inline mr-2"></FaXTwitter>
                {"X (Twitter): "}
                <Link href="https://twitter.com/arkark_">@arkark_</Link>
              </li>
              <li className="sm:ml-[.8rem]">
                <FaPenNib className="size-4 inline mr-2"></FaPenNib>
                {"Blog: "}
                <Link href="https://blog.arkark.dev/">XS-Spin Blog</Link>
              </li>
              <li>
                <FaLinkedin className="size-4 inline mr-2"></FaLinkedin>
                {"LinkedIn: "}
                <Link href="https://www.linkedin.com/in/4rk">link</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul>
          <li>
            Name: <b>Takeshi Kaneko</b>
          </li>
          <li>
            Currently working as a web security engineer/researcher in Japan.
          </li>
        </ul>
      </div>

      <h2>Interests</h2>
      <ul>
        <li>Web Security / Web Exploitation</li>
        <li>Algorithms / Data Structures</li>
        <li>Creative Coding / Generative Design</li>
        <li>Mathematics / Algebra for Computer Science</li>
      </ul>

      <h2>Activities</h2>
      <Tree {...data.activity}></Tree>

      <h2>CVE</h2>
      <Table {...data.cve}></Table>

      <h2>Contests</h2>
      <h3>Capture The Flag</h3>
      <p className="mb-0">
        {"Main team: "}
        <Link href="https://ctftime.org/team/80092">./Vespiary</Link>
      </p>
      <Table {...data.ctf}></Table>
      <h3>Web Tuning Contests</h3>
      <Table {...data.isucon}></Table>
      <h3>Competitive Programming</h3>
      <p className="mb-0">
        {"AtCoder: "}
        <Link href="https://atcoder.jp/users/arkark">
          <span className="text-blue-700 hover:text-blue-900">1900+</span>
        </Link>
      </p>
      <Table {...data.compro}></Table>
      <h3>Heuristic Contests</h3>
      <Table {...data.marathon}></Table>

      <h2>Education</h2>
      <Tree {...data.education}></Tree>

      <h2>Work Experience</h2>
      <h3>Present</h3>
      <Tree {...data.career.present}></Tree>
      <h3>Past</h3>
      <Tree {...data.career.past}></Tree>
      <h3>Student Part-Time Jobs</h3>
      <Tree {...data.career.partTime}></Tree>
    </div>
  );
};

export default Profile;
