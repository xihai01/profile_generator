const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

//variables
let name = '';
let hobby = '';
let music = '';
let meal = '';
let food = '';
let sport = '';
let superpower = '';

//open a new interface
const rl = readline.createInterface({ input, output });
rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  //assign answer to name
  name = answer;
  rl.close();
  //open a new interface for the next question
  const r2 = readline.createInterface({ input, output });
  r2.question('What is an activity you like doing? ', (answer) => {
    hobby = answer;
    r2.close();
    //open a new terminal for the next question
    const r3 = readline.createInterface({ input, output });
    r3.question('What do you listen to while doing that? ', (answer) => {
      music = answer;
      r3.close();
      //open a new terminal
      const r4 = readline.createInterface({ input, output });
      r4.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
        meal = answer;
        r4.close();
        //open a new terminal
        const r5 = readline.createInterface({ input, output });
        r5.question('What is your favourite thing to eat for that meal? ', (answer) => {
          food = answer;
          r5.close();
          //open a new terminal
          const r6 = readline.createInterface({ input, output });
          r6.question('Which sport is your absolute favourite? ', (answer) => {
            sport = answer;
            r6.close();
            //open a new terminal
            const r7 = readline.createInterface({ input, output });
            r7.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              superpower = answer;
              r7.close();
              //open a new interface to output generated profile
              const r8 = readline.createInterface({ input, output });
              r8.question('Type enter to view your user generated profile:', (answer) => {
                let output = `${name} loves listening to ${music} while ${hobby}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`;
                console.log(output);
                r8.close();
              });
            });
          });
        });
      });
    })
  });
});