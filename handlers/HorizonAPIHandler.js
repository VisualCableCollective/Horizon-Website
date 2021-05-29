import {HorizonAPIClient, HorizonAPIClientConfig, Environment} from "horizon-api-client-ts";

export default class HorizonAPIHandler {
  static Init() {
    HorizonAPIClient.Config = new HorizonAPIClientConfig(Environment.LocalDevelopment);
  }
}