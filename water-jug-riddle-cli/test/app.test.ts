import riddleRun from "../src/cli";
import view from "../src/cli/view";
import { Action } from "water-jug-riddle-core";

view.displaySolution = jest.fn((solution) => `solution is: ${solution}`);
view.continueMessage = jest.fn().mockReturnValue(false);
view.readInput = jest.fn(() => ({
    jugX: 3,
    jugY: 5,
    measureZ: 4
}));
view.welcomeMessage = jest.fn().mockReturnValue('Welcome');

describe("Water Jug CLI Tool", () => { 
    it("should execute without crashing", async () => {
        await riddleRun();
        expect(view.readInput).toHaveBeenCalled();
        expect(view.continueMessage).toHaveBeenCalled();
        expect(view.displaySolution).toHaveBeenLastCalledWith({
            hasSolution: true,
            actions: [
                Action.Fill,
                Action.Transfer,
                Action.Empty,
                Action.Transfer,
                Action.Fill,
                Action.Transfer,
            ],
            states: [
                { x: 0, y: 5 },
                { x: 3, y: 2 },
                { x: 0, y: 2 },
                { x: 2, y: 0 },
                { x: 2, y: 5 },
                { x: 3, y: 4 },
            ]
        });
    });
});
