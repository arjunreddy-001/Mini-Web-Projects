const LOGO = document.querySelectorAll(`#logo > path`);

console.log(LOGO);

for (let i = 0; i < LOGO.length; i++) {
  console.log(`Letter ${i} is ${LOGO[i].getTotalLength()}`);
}
