export class Alert {
  public alertType: AlertType;
  public alertIconMessage: string;
  public alertBoxMessage: string;
  constructor(alertType, alertIconMessage, alertBoxMessage) {
    this.alertType = alertType;
    this.alertIconMessage = alertIconMessage;
    this.alertBoxMessage = alertBoxMessage;
  }
}
export enum AlertType {
  Success = 1,
  Error = 2,
  Info = 3,
  Warning = 4,
}

export class Skill {
  private id: string;
  private name: string;
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
