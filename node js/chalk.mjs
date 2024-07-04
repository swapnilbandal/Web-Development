import chalk from 'chalk'
console.log(chalk.bold.red('Hello'))
console.log(chalk.underline.green('Hello'))
console.log(chalk.underline.italic.green('Hello Everyone'))
let errorMsg=chalk.bold.black
let successMsg=chalk.bold.green

console.log(errorMsg('You have to practice more'))
console.log(successMsg('You have to practice more'),errorMsg('new'))