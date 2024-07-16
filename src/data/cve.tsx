import type TableType from "@/types/TableType";
import Link from "@/components/utils/Link";

const cves: {
  cve: string;
  cveUrl: string;
  target: string;
  targetUrl: string;
}[] = [
  {
    cve: "CVE-2024-27306",
    cveUrl: "https://nvd.nist.gov/vuln/detail/CVE-2024-27306",
    target: "aio-libs/aiohttp",
    targetUrl: "https://github.com/aio-libs/aiohttp",
  },
  {
    cve: "CVE-2023-51651",
    cveUrl: "https://nvd.nist.gov/vuln/detail/CVE-2023-51651",
    target: "aws/aws-sdk-php",
    targetUrl: "https://github.com/aws/aws-sdk-php",
  },
  {
    cve: "CVE-2023-39319",
    cveUrl: "https://nvd.nist.gov/vuln/detail/CVE-2023-39319",
    target: "golang/go",
    targetUrl: "https://github.com/golang/go",
  },
  {
    cve: "CVE-2023-39318",
    cveUrl: "https://nvd.nist.gov/vuln/detail/CVE-2023-39318",
    target: "golang/go",
    targetUrl: "https://github.com/golang/go",
  },
  {
    cve: "CVE-2023-32314",
    cveUrl: "https://nvd.nist.gov/vuln/detail/CVE-2023-32314",
    target: "patriksimek/vm2",
    targetUrl: "https://github.com/patriksimek/vm2",
  },
  {
    cve: "CVE-2023-32313",
    cveUrl: "https://nvd.nist.gov/vuln/detail/CVE-2023-32313",
    target: "patriksimek/vm2",
    targetUrl: "https://github.com/patriksimek/vm2",
  },
];

const items = cves.map(({ cve, cveUrl, target, targetUrl }) => [
  <Link href={cveUrl}>{cve}</Link>,
  <Link href={targetUrl}>{target}</Link>,
]);

const data: TableType = { items };

export default data;
