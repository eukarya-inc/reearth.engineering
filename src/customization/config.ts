import defaultConfig from "../config-default";
import type { Config } from "../interfaces";

const year = new Date().getFullYear();

const config: Config = {
  ...defaultConfig,
  footer: {
    content: `©︎ ${year} Eukarya Inc., All Rights Reserved.`,
  },
};

export default config;
