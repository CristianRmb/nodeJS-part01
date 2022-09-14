function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

/*
Create a getResults function that uses async and await.
Inside of the function, call the luckyDraw function for each of the players:
Tina, Jorge, Julien
Log out the resolved value for each promise and handle any promise rejections.
 */

async function getResult() {
  try {
    const Tina = await luckyDraw("Tina");
    console.log(Tina);
    const Jorge = await luckyDraw("Jorge");
    console.log(Jorge);
    const Julien = await luckyDraw("Julien");
    console.log(Julien);
  } catch (error) {
    console.error(error);
  }
}

getResult();
