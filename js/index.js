// Iteration 1: Names and Input
let driver="Manuel";
let navigator="Pepe";

console.log("The driver's name is", driver)
console.log("The navigator's name is", navigator)

// Iteration 2: Conditionals
if(driver.length>navigator.length) console.log("The driver has the longest name, it has",driver.length,"characters");
else if(driver.length<navigator.length) console.log("The navigator has the longest name, it has",navigator.length,"characters");
else console.log("Wow, you both have equally long names,",driver.length,"characters!");

// Iteration 3: Loops
let longdriver="";
for (let index = 0; index < driver.length; index++) 
{
    longdriver+=driver[index] + " ";
}
console.log(longdriver);

let longRnavigator="";
for (let index = navigator.length; index > 0; index--) 
{
    longRnavigator+=navigator[index-1] + " ";
}
console.log(longRnavigator);

if(driver.localeCompare(navigator)<0) console.log("The driver's name goes first.");
else if(driver.localeCompare(navigator)>0) console.log("Yo, the navigator goes first definitely.");
else console.log("What?! You both have the same name?");

//Bonus 1
let words=0;
let lorems="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non libero vitae dolor interdum fermentum et eget libero. Nam nisi ex, vestibulum non egestas non, pharetra in ante. Quisque et eros non ligula pulvinar ultricies. Donec massa lorem, blandit ac consectetur sit amet, dictum vel tellus. In at neque lacus. Integer sed sodales quam. Donec convallis maximus dignissim. Donec ac leo a odio sodales vestibulum. Vestibulum tincidunt leo non leo gravida vestibulum. Maecenas venenatis diam purus, non porttitor mauris vulputate quis. Pellentesque ante sapien, rhoncus nec purus placerat, congue porta lectus. Pellentesque ut est id dolor ullamcorper vehicula. Proin vehicula quam at metus posuere sagittis dignissim sed mi. Praesent volutpat vitae sapien et egestas. Duis euismod pellentesque est, non semper erat tempus at. Donec risus eros, fermentum vel lorem id, auctor consequat turpis. Integer molestie est vel metus pulvinar convallis. Vivamus id lacus nisl. Nam metus risus, imperdiet nec ex id, euismod gravida tellus. Sed vel erat sed felis placerat interdum consectetur id sem. Maecenas porttitor ex sit amet euismod lobortis. Nam porta volutpat augue vel posuere. Nam commodo elit odio. Donec sed tortor maximus, lobortis mauris nec, fringilla ex. Suspendisse mollis sem a commodo imperdiet. Aliquam maximus leo sit amet est lacinia commodo. In vel sem erat. Nam nisi mauris, vulputate eu tristique id, dignissim in magna. Morbi eu dolor aliquam, lobortis urna ac, mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras pulvinar et augue non rhoncus. Fusce volutpat sem sit amet urna ullamcorper feugiat. Duis quis cursus mi. Fusce vulputate sollicitudin turpis, ac pellentesque dolor imperdiet rhoncus. Aenean venenatis tortor turpis, nec maximus risus rhoncus nec.";
for (let index = 0; index < lorems.length; index++) 
    if(lorems[index]==" ") words++;
words+=1;
console.log(words, "words.");

// No se pq en el repl.it no me iba el substring, así que me he patillado esto un poco
let ets=0;
for (let index = 0; index < lorems.length-1; index++) 
    if(lorems[index]=="e"&& lorems[index+1]=="t") ets++; 
console.log(ets, "ETs");

//Bonus 2
// A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
let pospal="put it up"; //pospal=posible palindrome
pospal=pospal.toLowerCase();


function ispalyndrome(pal)
{
    let result=0;
    let validchars="abcdefghijklmnñopqrstuvwxyz1234567890";
    let cleanstring="";

    for (let index = 0; index < pal.length; index++) 
        if(validchars.includes(pal[index])) cleanstring+=pal[index];

    for (let index = 0; index < cleanstring.length; index++)  
        if(cleanstring[index]!=cleanstring[cleanstring.length-1-index]) result++;
    if(result==0) return true;
    else return false;
}

if(ispalyndrome(pospal)) console.log("Palyndrome detected!", pospal);
else console.log("No palyndrome detected, sorry...")

