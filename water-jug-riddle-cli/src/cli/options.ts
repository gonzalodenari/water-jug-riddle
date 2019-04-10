import { RiddleInput, RiddleResponse, IState, Action } from "water-jug-riddle-core";
import reader from "./reader";

// colors
const green = "\x1b[32m";
const cyan = "\x1b[36m";
const white = "\x1b[37m";
const red = "\x1b[31m";
const yellow = "\x1b[33m";
const magenta = "\x1b[35m";

const welcomeMessage = () => {
    const message = `WELCOME TO THE WATER JUG RIDDLE CLI TOOL\n\ Please enter X-gallon, Y-gallon, and Z-Measure values to continue:\n\n`;
    console.log(cyan, message);
};

const readInput = async (): Promise<RiddleInput> => {
    const questions = [{
            type: "input",
            name: "X",
            message: "What's the value for Jug X?",
        },
        {
            type: "input",
            name: "Y",
            message: "What's the value for Jug Y?",
        },
        {
            type: "input",
            name: "Z",
            message: "What's the value for Measure Z?",
        }
    ];
    const answer: any = await reader.read(questions);
    return {
        jugX: answer.X,
        jugY: answer.Y,
        measureZ: answer.Z
    };
};

const continueMessage = async (): Promise<boolean> => {
    const questions = [{
        type: "confirm",
        name: "continue",
        message: "Do you want to continue playing with the tool?",
    }];
    const response: any = await reader.read(questions);
    console.log("\n");
    return response.continue;
};

const getActionColor = (action: Action) => {
    if (action == Action.Fill) {
        return green;
    } else if (action == Action.Transfer) {
        return yellow;
    } else {
        return red;
    }
};

const displaySolution = (response: RiddleResponse) => {
    if (!response.hasSolution) {
        console.log("\nThere is no solution for these inputs!\n");
    } else {
        console.log(`\nSolution found after ${response.actions.length} steps:\n`);
        response.states.forEach((state: IState, index: number) => {
            const action = (response.actions[index] == 0) ? "Fill" : (response.actions[index] == 1) ? "Transfer" : "Empty";
            const actionColor = getActionColor(response.actions[index]);
            console.log(`\t${index + 1}) jugX = ${state.x}, jugY = ${state.y} \t ${actionColor}<- ${action} ${white}`);
        });
        console.log("\n\n");
    }
};

export default {
    readInput,
    welcomeMessage,
    continueMessage,
    displaySolution
};
