const versionData: Version = {
  version: "0.1.5a",
  lastUpdated: "15/4/24",
};

export default versionData;

export interface Version {
  version: string;
  lastUpdated?: string;
  link?: string;
  commit?: string;
}

export const versions: Version[] = [
  versionData,
  {
    version: "0.1.5",
    lastUpdated: "13/4/24",
    commit:
      "https://github.com/p55d2k/zk-website/commit/58619c0bde2aaebc2e87cf993ea229a60fa7d3b7",
    link: "https://cc68ce92.zk-website-cwo.pages.dev/",
  },
  {
    version: "0.1.4a",
    lastUpdated: "12/4/2024",
    commit:
      "https://github.com/p55d2k/zk-website/commit/d2f1b15a3e719710303578f943d187a303182858",
    link: "https://d1ccc8de.zk-website-cwo.pages.dev/",
  },
  {
    version: "0.1.4",
    lastUpdated: "11/4/2024",
    commit:
      "https://github.com/p55d2k/zk-website/commit/2ea1cd1de4a8a485c034828250da27da03454594",
    link: "https://3c812285.zk-website-cwo.pages.dev/",
  },
  {
    version: "0.1.3",
    lastUpdated: "10/4/2024",
    commit:
      "https://github.com/p55d2k/zk-website/commit/f4056d012529973392f84ef7e787d32b9a7d15c3",
    link: "https://d243fd6b.zk-website-cwo.pages.dev/",
  },
  {
    version: "0.1.2a",
    lastUpdated: "9/4/2024",
    commit:
      "https://github.com/p55d2k/zk-website/commit/9a61952a1d170307b210a33cf70dcc6f5c9aaf15",
    link: "https://963f8fc3.zk-website-cwo.pages.dev/",
  },
  {
    version: "0.1.2",
    lastUpdated: "9/4/2024",
    commit:
      "https://github.com/p55d2k/zk-website/commit/99d3964a6f0bf664c6a9e84c458220549e0f43fc",
    link: "https://c3a3ab2e.zk-website-cwo.pages.dev/",
  },
  {
    version: "0.1.1",
    commit:
      "https://github.com/p55d2k/zk-website/commit/7f1ad2fa2efc3b451753d2cc44fba2a8088d8c61",
    link: "https://97b976e3.zk-website-cwo.pages.dev/",
  },
];
