'use strict';
import * as vscode from 'vscode';

export class RioLog {

  private terminal : vscode.Terminal | undefined;

  public connect(teamNumber : string, pathToJar: string) {

    if (this.terminal !== undefined) {
      this.terminal.dispose();
    }

    this.terminal = vscode.window.createTerminal("RioLog", pathToJar, [teamNumber]);

    this.terminal.show();
  }

  dispose() {
    if (this.terminal !== undefined) {
      this.terminal.dispose();
      this.terminal = undefined;
    }
  }


}
