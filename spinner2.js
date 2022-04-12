const spin = "|/-\\|/-\\|/-\\|";

let delay = 0;

for (let char of spin) {
  setTimeout(() => process.stdout.write('\r' + char + ' '), delay, '\n');
  delay += 100;
}