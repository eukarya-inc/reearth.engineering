import defaultConfig, { type Config } from "../config-default";

const year = new Date().getFullYear();

const config: Config = {
  ...defaultConfig,
  footer: {
    content: `©︎ ${year} Eukarya Inc., All Rights Reserved.`,
  },
};

export default config;
