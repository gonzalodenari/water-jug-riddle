import inquirer from "inquirer";

export interface Question {
    name: string;
    message: string;
}

const readQuestions = async (questions: Question[]): Promise<{}> => {
    return inquirer.prompt(questions.map((q: Question) => ({ ...q, type: "input" })));
};

const confirm = async (question: Question): Promise<boolean> => {
    const ans: any = await inquirer.prompt([ { ...question, type: "confirm" } ]);
    return ans[question.name];
};

export default {
    readQuestions,
    confirm
};