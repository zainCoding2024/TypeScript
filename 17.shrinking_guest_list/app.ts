let guest:string[] = ['Zahid','Anwar','Jawaid']

for(let i=0; i<guest.length; i++){
    guest[i]
  console.log(guest[i])
}

for(let i=0; i<guest.length; i++){
    if(guest[i] === 'Anwar'){
console.log(`\n Absent Guest...${guest[i]}`)
const Absent = guest[i];
    guest[i] = 'Iqbal';
console.log(`${Absent}, is replaced by ${guest[i]}.`)
    }
}
console.log(`\n Our new guest list...`)
for(let i=0; i<guest.length; i++){
    console.log(guest[i]+", is invited")
}

console.log(`\nI found a bigger dinner table.`)
guest.unshift("Daniyal")
guest.splice(2,0,"Waqar");
guest.push("Samad")


for(let i=0; i<guest.length; i++){
    console.log(guest[i]+ ",is invited.")
}

console.log(`\nI can invite only two people.`)

while(guest.length>2){
  let remGuest =  guest.pop()
  if(remGuest){
    console.log(`Sorry! ${remGuest}, you are no longer invited to dinner.`)
  }
}

for(let i=0; i<guest.length; i++){
    console.log(guest[i]+", is invited.")
}

guest.splice(0,2);

console.log(guest);