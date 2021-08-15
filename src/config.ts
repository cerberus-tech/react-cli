export interface IStylesConfig {
  modules: boolean;
  sass: boolean;
}

export interface IEnvironmentConfig {
  basePath: string;
}

export interface IConfig {
  styles: IStylesConfig;
  environment: IEnvironmentConfig;
}
