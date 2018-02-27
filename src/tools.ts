'use strict';

class WpiTool {
  public toolName : string;

  public toolStartCommand : string;

  constructor(name: string, command: string) {
    this.toolName = name;
    this.toolStartCommand = command;
  }
}

export class WPILibTools {

  private toolList : WpiTool[] = [
    new WpiTool('Shuffleboard' , 'sb'),
    new WpiTool('Shuffleboard' , 'sb'),
    new WpiTool('Shuffleboard' , 'sb'),
    new WpiTool('RoboRio Imager' , 'sb'),
  ];

  public getToolList(): string[] {
    let retArr = new Array<string>();
    for (let t of this.toolList) {
      retArr.push(t.toolName);
    }
    return retArr;
  }

}
