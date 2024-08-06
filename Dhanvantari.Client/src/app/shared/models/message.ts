type MessageType = 'Junk' | 'Starred' | 'Trash';
type Status = 'Active' | 'InActive';
type InBoxComponentType = 'Junk' | 'Starred' | 'Trash' | 'Sent';
export interface Message {
  id: number;
  from: string;
  fromName: string;
  to: string;
  toName: string;
  subject: string;
  body: string;
  fromTeam: string;
  toTeam: string;
  time: any;
  type: MessageType;
  toType: MessageType;
  fromType: MessageType;
  suggestion: string;
  imgSource: string;
  toStatus: Status;
  fromStatus: Status;
  // InBoxComponentType: InBoxComponentType;
  // hour: number;
}
