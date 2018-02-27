'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "vscode-wpilibexamples" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    context.subscriptions.push(vscode.commands.registerCommand('extension.wpilibDeploy', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Deploy Click!');
    }));

    context.subscriptions.push(vscode.commands.registerCommand('extension.wpilibDebug', () => {
        // The code you place here will be executed every time your command is executed

        // Display a message box to the user
        vscode.window.showInformationMessage('Debug Click!');
    }));

    context.subscriptions.push(vscode.commands.registerCommand('extension.openTool', async () => {
        // The code you place here will be executed every time your command is executed
        let tools = ['Shuffleboard', 'Outline Viewer', 'RoboRio Imager'];

        let selection = await vscode.window.showQuickPick(tools);

        // Display a message box to the user
        vscode.window.showInformationMessage('Selected item: ' + selection);
    }));

    context.subscriptions.push(vscode.commands.registerCommand('extension.setTeamNumber', async () => {
        // The code you place here will be executed every time your command is executed
        let teamNum = await vscode.window.showInputBox({ prompt: "Please enter your team number"});

        // Display a message box to the user
        vscode.window.showInformationMessage("Changed Team Num To " + teamNum);
    }));

    context.subscriptions.push(vscode.commands.registerCommand('extension.createCommand', async() => {
        // The code you place here will be executed every time your command is executed

        let types = ['button', 'timed', 'group'];

        let typeSelection = await vscode.window.showQuickPick(types);

        let nameSelection = await vscode.window.showInputBox({prompt: "Enter a command name"});

        // Display a message box to the user
        vscode.window.showInformationMessage('New command: type = ' + typeSelection + " name = " + nameSelection);
    }));
}

// this method is called when your extension is deactivated
export function deactivate() {
}
