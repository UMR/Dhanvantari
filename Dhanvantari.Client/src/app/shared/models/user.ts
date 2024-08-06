export type Status = "Active" | "InActive";
export class User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  education: string;
  team: string;
  skillIds: number[];
  id?: number;
  imgSource: string;
  status: Status;

  constructor( 
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    education: string,
    skillIds: number[],
    team: string,
    Status: Status,
    id?: number 
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.education = education;
    this.skillIds = skillIds;
    this.team = team;
    this.imgSource = "https://github.com/Genuine-Identity.png";
    this.status = Status;
  }
}