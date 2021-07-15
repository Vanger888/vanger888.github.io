const experienceContainer = document.getElementById('experience');

console.log(experienceContainer);
if (!experienceContainer) {
  return;
}

const experienceStartDate = new Date('2019-04-20T08:00:00').getTime();
const dateNow = new Date().getTime();
const difference = dateNow - experienceStartDate;

let seconds = Math.floor(difference / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
let months = Math.floor(days / 30);
let years = Math.floor(days / 365);

seconds %= 60;
minutes %= 60;
hours %= 24;
days %= 30;
months %= 12;

const experience = `Experience - ${years} years, ${months} months and ${days} days`;

console.log(experience);

experienceContainer.innerHTML = experience;
