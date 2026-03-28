export interface ServiceConfig {
  apiPort: number;
  webPort: number;
}

export const defaultConfig: ServiceConfig = {
  apiPort: 4000,
  webPort: 3000,
};
