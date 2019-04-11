import waterJug, { RiddleInput } from "water-jug-riddle-core";
import view from "./view";

const executeRiddle = async (): Promise<any> => {
    const input: RiddleInput = await view.readInput();
    const response = waterJug(input);
    view.displaySolution(response);
    const again: boolean = await view.continueMessage();
    if (again) {
        return executeRiddle();
    }
};

export default async function run() {
    view.welcomeMessage();
    return executeRiddle();
}