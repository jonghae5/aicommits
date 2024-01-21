import { dim } from "kolorist";
import { version } from "../../package.json";

export class KnownError extends Error {}

const indent = "    ";

export const handleCliError = (error: any) => {
	if (error instanceof Error && !(error instanceof KnownError)) {
		if (error.stack) {
			console.error(dim(error.stack.split("\n").slice(1).join("\n")));
		}
		console.error(`\n${indent}${dim(`aicommits v${version}`)}`);
		console.error(`\n${indent} Data Adoption팀 오종해에게 문의해주세요. 🔨`);
		console.error(`${indent}jonghae5@sk.com`);
	}
};

export const handleCommitError = (error: any) => {
	if (error instanceof Error && !(error instanceof KnownError)) {
		if (error.stack) {
			console.error(dim(error.stack.split("\n").slice(1).join("\n")));
		}
		console.error(`\n${indent}${dim(`aicommits v${version}`)}`);
		console;
		console.error(`\n${indent} 🔥 An error occurred while committing.`);
		console.error(
			`${indent} 🚨 Please check if there are any errors in your pre-commit.`
		);
	}
};
