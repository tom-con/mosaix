$().ready(() => {

let themNames = $(".spriteName");
console.log(themNames);
for (let i = 0; i < themNames.length; i++) {
  $(themNames[i]).text(`${$(themNames[i]).text().substring(0,6)}...`);
}

})
