import inquirer from "inquirer";

const read = async (questions: any) => {
    return inquirer.prompt(questions);
};

export default {
    read
};