let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
  console.log('Jon attack is greater');
} else if (jamieLannisterAttack > jonSnowAttack) {
  console.log('Jamie attack is greater');
} else {
  console.log('Both attacks are equal');
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack) {
  console.log('Jon has been slain');
} else {
  jonSnowHealth = jonSnowHealth - jonSnowAttack;
  console.log(`Jon Snow's remaining health is ${jonSnowHealth}`);
}

jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
  console.log('Jon has been slain');
} else {
  jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense);
}

if (jonSnowHealth<= 50){
    jonSnowHealth+=50
} else {
    jonSnowHealth=100
}
console.log(jonSnowHealth)

let coinLandsHeads = false

if (coinLandsHeads === true ){
    console.log('the fight contonues')
}else {
    console.log('jon runs away')
}

for(let i =0;i<=6;i++) {
    jonSnowHealth= (jamieLannisterAttack-jonSnowDefense)
    console.log('jon snows health is ${jonsnowhealth}') 
}

for(let i =0;i<=5;i++) {
 if (jonSnowHealth<=0){
    console.log('jon snow has been slain')
 }   else {
    jonSnowHealth -= (jamieLannisterAttack- jonSnowDefense)
    console.log('jon snows health is now ${jonSnowHealth}')
 }
}