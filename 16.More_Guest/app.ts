 let guest_list: string[] = ['Usman','Ahmed','Fawad']
for(let i=0; i<guest_list.length; i++){
   console.log(`${guest_list[i]}, is invited.`)
}
console.log(guest_list[1] + ",is not participating in the invitation.")

console.log("Now..")

guest_list[1] = "Kashan";

 let i=0;
 while(guest_list[i]){

 console.log(guest_list[i] +", Invited.");
  i++;
}
console.log("\nI found a bigger dinner table.")

guest_list.unshift('Gul_Ahmed');
guest_list.splice(1,0, "Burhan");
guest_list.push("Haider")

 guest_list;

 i=0;
 while(guest_list[i]){
console.log(guest_list[i])
  i++;
 }

