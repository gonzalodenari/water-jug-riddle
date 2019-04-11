import { RiddleInput, RiddleResponse, IState, Action } from "water-jug-riddle-core";
import reader, { Question } from "./io/input";
import { println, print, Color, getColorAsString } from "./io/output";

const welcomeMessage = () => {
    print("WELCOME TO THE WATER JUG RIDDLE CLI TOOL", Color.Cyan);
    println("Please enter X-gallon, Y-gallon, and Z-Measure values to continue:\n", Color.Cyan);
};

const readInput = async (): Promise<RiddleInput> => {
    const questions: Question[] = [{
            name: "X",
            message: "What's the value for Jug X?",
        },
        {
            name: "Y",
            message: "What's the value for Jug Y?",
        },
        {
            name: "Z",
            message: "What's the value for Measure Z?",
        }
    ];
    const answer: any = await reader.readQuestions(questions);
    return {
        jugX: answer.X,
        jugY: answer.Y,
        measureZ: answer.Z
    };
};

const continueMessage = async (): Promise<boolean> => {
    const response: boolean = await reader.confirm({
        name: "continue",
        message: "Do you want to continue playing with the tool?",
    });
    println("");
    return response;
};

const getActionColor = (action: Action) => {
    if (action == Action.Fill) {
        return getColorAsString(Color.Green);
    } else if (action == Action.Transfer) {
        return getColorAsString(Color.Yellow);
    } else {
        return getColorAsString(Color.Red);
    }
};

const displaySolution = (response: RiddleResponse) => {
    if (!response.hasSolution) {
        println("\nThere is no solution for these inputs!");
    } else {
        println(`\nSolution found after ${response.actions.length} steps:`);
        response.states.forEach((state: IState, index: number) => {
            const action = (response.actions[index] == 0) ? "Fill" : (response.actions[index] == 1) ? "Transfer" : "Empty";
            const actionColor = getActionColor(response.actions[index]);
            print(`\t${index + 1}) jugX = ${state.x}, jugY = ${state.y} \t\t ${actionColor}<- ${action} ${getColorAsString(Color.White)}`);
        });
        println("");
    }
};

export default {
    readInput,
    welcomeMessage,
    continueMessage,
    displaySolution
};
