let Pname= document.getElementById('name');
let dob= document.getElementById('dob');
let button= document.getElementById('button')
let outputName= document.getElementById('outputName');
let outAge= document.getElementById('outputAge')
const display3 =document.getElementById('display');
display3.style.display='none';

button.addEventListener('click',function(){
   let Name= Pname.value;
   let Dob= dob.value
   function Person(name, dob) {
      this.Name = name;
      this.dateOfBirth= new Date(dob);
      this.calculateAge= function(){
         const difference= Date.now() - this.dateOfBirth.getTime();
         const ageDate= new Date(difference);
         return ageDate.getUTCFullYear() - 1970;
   
      }

   }
   const hussain = new Person("imran",'5 june 2010')
   const newperosn= new Person(Name, Dob)
    display3.style.display="block";
   
   outputName.textContent= Name;
   outAge.textContent=newperosn.calculateAge()
})



