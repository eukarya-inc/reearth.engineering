import defaultConfig, { type Config } from "../config-default";

const year = new Date().getFullYear();

const config: Config = {
  ...defaultConfig,
  og: {
    ...defaultConfig.og,
    imagePadding: 50,
  },
  footer: {
    content: `©︎ ${year} Eukarya Inc., All Rights Reserved.`,
  },
};

export default config;
