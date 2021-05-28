export default class Config {
  static isAppInDevelopmentMode = true;
    static prodAPIServer = "";
    static localAPIDevServer = "http://computer.local:8000";

    static getAPIServerURL(){
        if(this.isAppInDevelopmentMode){
            return this.localAPIDevServer;
        }else{
            return this.prodAPIServer;
        }
    }
}