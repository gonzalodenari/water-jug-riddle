import waterJug, { RiddleInput } from "water-jug-riddle-core";
import options from "./options";

const executeRiddle = async () => {
    const input: RiddleInput = await options.readInput();
    const response = waterJug(input);
    options.displaySolution(response);
    const again: boolean = await options.continueMessage();
    if (again) {
        executeRiddle();
    }
};

export default function run() {
    options.welcomeMessage();
    executeRiddle();
}