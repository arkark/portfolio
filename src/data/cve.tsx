import type TableType from "@/types/TableType";
import Link from "@/components/utils/Link";

const cves: {
  cve: string;
  target: {
    label: string;
    url: string;
  };
  info?: {
    label: string;
    url: string;
  };
}[] = [
  {
    cve: "CVE-2025-53626",
    target: {
      label: "pdfme/pdfme",
      url: "https://github.com/pdfme/pdfme",
    },
    info: {
      label: "GHSA-54xv-94qv-2gfg",
      url: "https://github.com/pdfme/pdfme/security/advisories/GHSA-54xv-94qv-2gfg",
    },
  },
  {
    cve: "CVE-2025-4673",
    target: {
      label: "golang/go",
      url: "https://github.com/golang/go",
    },
    info: {
      label: "GO-2025-3751",
      url: "https://pkg.go.dev/vuln/GO-2025-3751",
    },
  },
  {
    cve: "CVE-2025-48054",
    target: {
      label: "radashi-org/radashi",
      url: "https://github.com/radashi-org/radashi",
    },
    info: {
      label: "GHSA-2xv9-ghh9-xc69",
      url: "https://github.com/radashi-org/radashi/security/advisories/GHSA-2xv9-ghh9-xc69",
    },
  },
  {
    cve: "CVE-2025-24959",
    target: {
      label: "google/zx",
      url: "https://github.com/google/zx",
    },
    info: {
      label: "GHSA-qwp8-x4ff-5h87",
      url: "https://github.com/google/zx/security/advisories/GHSA-qwp8-x4ff-5h87",
    },
  },
  {
    cve: "CVE-2024-39610",
    target: {
      label: "unclebob/fitnesse",
      url: "https://github.com/unclebob/fitnesse",
    },
    info: {
      label: "JVN#36791327",
      url: "https://jvn.jp/en/jp/JVN36791327/index.html",
    },
  },
  {
    cve: "CVE-2024-42499",
    target: {
      label: "unclebob/fitnesse",
      url: "https://github.com/unclebob/fitnesse",
    },
    info: {
      label: "JVN#36791327",
      url: "https://jvn.jp/en/jp/JVN36791327/index.html",
    },
  },
  {
    cve: "CVE-2024-45047",
    target: {
      label: "sveltejs/svelte",
      url: "https://github.com/sveltejs/svelte",
    },
    info: {
      label: "GHSA-8266-84wp-wv5c",
      url: "https://github.com/sveltejs/svelte/security/advisories/GHSA-8266-84wp-wv5c",
    },
  },
  {
    cve: "CVE-2024-41677",
    target: {
      label: "QwikDev/qwik",
      url: "https://github.com/QwikDev/qwik",
    },
    info: {
      label: "GHSA-2rwj-7xq8-4gx4",
      url: "https://github.com/QwikDev/qwik/security/advisories/GHSA-2rwj-7xq8-4gx4",
    },
  },
  {
    cve: "CVE-2024-27306",
    target: {
      label: "aio-libs/aiohttp",
      url: "https://github.com/aio-libs/aiohttp",
    },
    info: {
      label: "GHSA-7gpw-8wmc-pm8g",
      url: "https://github.com/advisories/GHSA-7gpw-8wmc-pm8g",
    },
  },
  {
    cve: "CVE-2023-51651",
    target: {
      label: "aws/aws-sdk-php",
      url: "https://github.com/aws/aws-sdk-php",
    },
    info: {
      label: "GHSA-557v-xcg6-rm5m",
      url: "https://github.com/aws/aws-sdk-php/security/advisories/GHSA-557v-xcg6-rm5m",
    },
  },
  {
    cve: "CVE-2023-39319",
    target: {
      label: "golang/go",
      url: "https://github.com/golang/go",
    },
    info: {
      label: "GO-2023-2043",
      url: "https://pkg.go.dev/vuln/GO-2023-2043",
    },
  },
  {
    cve: "CVE-2023-39318",
    target: {
      label: "golang/go",
      url: "https://github.com/golang/go",
    },
    info: {
      label: "GO-2023-2041",
      url: "https://pkg.go.dev/vuln/GO-2023-2041",
    },
  },
  {
    cve: "CVE-2023-32314",
    target: {
      label: "patriksimek/vm2",
      url: "https://github.com/patriksimek/vm2",
    },
    info: {
      label: "GHSA-whpj-8f3w-67p5",
      url: "https://github.com/patriksimek/vm2/security/advisories/GHSA-whpj-8f3w-67p5",
    },
  },
  {
    cve: "CVE-2023-32313",
    target: {
      label: "patriksimek/vm2",
      url: "https://github.com/patriksimek/vm2",
    },
    info: {
      label: "GHSA-p5gc-c584-jj6v",
      url: "https://github.com/patriksimek/vm2/security/advisories/GHSA-p5gc-c584-jj6v",
    },
  },
];

const items = cves.map(({ cve, target, info }) => [
  cve,
  <Link href={target.url}>{target.label}</Link>,
  info ? <Link href={info.url}>{info.label}</Link> : "",
]);

const data: TableType = { items };

export default data;
