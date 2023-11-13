import Link from "@/components/utils/Link";

const cveData: { label: React.ReactNode; info: React.ReactNode }[] = [
  {
    label: (
      <Link href="https://nvd.nist.gov/vuln/detail/CVE-2023-39319" isExternal>
        CVE-2023-39319
      </Link>
    ),
    info: (
      <Link href="https://github.com/golang/go" isExternal>
        golang/go
      </Link>
    ),
  },
  {
    label: (
      <Link href="https://nvd.nist.gov/vuln/detail/CVE-2023-39318" isExternal>
        CVE-2023-39318
      </Link>
    ),
    info: (
      <Link href="https://github.com/golang/go" isExternal>
        golang/go
      </Link>
    ),
  },
  {
    label: (
      <Link href="https://nvd.nist.gov/vuln/detail/CVE-2023-32314" isExternal>
        CVE-2023-32314
      </Link>
    ),
    info: (
      <Link href="https://github.com/patriksimek/vm2" isExternal>
        patriksimek/vm2
      </Link>
    ),
  },
  {
    label: (
      <Link href="https://nvd.nist.gov/vuln/detail/CVE-2023-32313" isExternal>
        CVE-2023-32313
      </Link>
    ),
    info: (
      <Link href="https://github.com/patriksimek/vm2" isExternal>
        patriksimek/vm2
      </Link>
    ),
  },
];

export default cveData;
