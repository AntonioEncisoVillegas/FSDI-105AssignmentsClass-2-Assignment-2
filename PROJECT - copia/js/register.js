const salon={
    name:"The Fashon Pet",
    address:{
        street:"Av.university",
        number:"212-k",
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}
//var salonName=saon.name;
//var salonNumber=salon.address.number;

var {name,address:{street,number}}=salon;// object destructuring

document.getElementById('footer-info').innerHTML=`
     <p> ${name} ${street} ${number}</p>`;

function displayText(){
    for(var i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].petName);
    }
}
var counter=0;
// CREATE THE OBJET CONSTRUCTOR 
class Pet{
    constructor(name,age,gender,type,breed,service,ownerName,contactPhone){
     this.name=name;
     this.age=age;
     this.gender=gender;
     this.type=type;
     this.breed=breed;
     this.service=service;
     this.ownerName=ownerName;
     this.contactPhone=contactPhone;
     this.price=0;
     this.idcounter++;
    }
}

// CREATE THE REGISTER FUNCTION
//read from the inputs and store the information into vars 
var inputName = document.getElementById('petName');
var inputAge = document.getElementById('petAge');
var inputGender = document.getElementById('petGender');
var inputType = document.getElementById('petType');
var inputBreed = document.getElementById('petService');
var inputBreed = document.getElementById('petBreed');
var imputService = document.getElementById('ownerName');
var imputOwner = document.getElementById('ownerName');
var inputPhone = document.getElementById('ownerPhone');   

//create pets name

function register(){
      //create a generic objet and pass the info of the vars 
      var thePet = new Pet(imputName.value,
        inputAge.value,
        inputGender.value,
        inputType.value,
        inputBreed.value,
        inputService.value,
        inputOwner.value,
        inputPhone.value);
    console.log(thePet);
    // push the objet into the array
    salon.pets.push(thePet); 
    // clear the inputs  
    //displayTable(thePet);
    display();
    clear();
   
}
function clear(){
    inputName.value="";
    inputAge.value="";
    inputBreed.value="";
    inputGender.value="";
    inputOwner.value="";
    inputPhone.value="";

}

function updteProfits(){
    var profit=0;
    for(var i=0;i<salon.pets.length;i++){
        profit=profit+salon.pets[i].price;
    }
    document.getElementById('profits').innerHTML=`Profits = $${profit}.00`;
}
function deletePet(petId){
    // select the card with the pet 
    var card=$('#'+petId);
    console.log('delete pet'+ petId);

    //search the pet in the array
    var indexDelete;
    for(var i=0;i<salon.pets.length;i++){
        var selected=salon.pets[i];
        if(selected.id===petId){
            indexDelete=i;
        }
    }

    //delete the pet from the array 
    salon.pets.splice(indexDelete,1);
    // delete the pet from the html
    $('#'+petId).remove();
}
function searchPet(){
    // add the search input, and searche button

    // get te value from the input 
    var ss=$('#petsearch').val();
    // searc the pet on the array
    salon.pets.forEach(aPet=>{
        if(aPet.name.toloweCase().includes(ss.toloweCase())||
        aPet.service.toloweCase().inclueds(ss.toloweCase())
        ){
           $('#'+ aPet.id).removeClass('unactive');
        }else{
            $('#'+ aPet.id).addClass('unactive');
            //alert('That pet does not exist ');
        }
    });
    // change the css to display the result 
}
function init(){
    console.log("Executed"); 
    //create 3 pets 
    var pet1= new Pet("scooby",50,"male","dog","Dane","Hair", "Shaggy","5555555");
    var pet2= new Pet("scrappy ",50,"male","dog","mixed","full", "Shaggy","5555555");
    var pet3= new Pet("Tweety Bird  ",70,"male","mixed","bird","Dane","Full service", "Shaggy","8888-888-888");
    salon.pets.push(pet1);
    salon.pets.push(pet2);
    salon.pets.push(pet3);
    display();
    ///hook events
    $('#register-btn').on('click',register);
    $('#search-btn').on('click',searchPet);
    //hook events
    $('#register-btn').on('click',register)
    $('#search-btn').on('click',searchPet);
    $('#ownerPhone').keypress(function(e) 
    {
    console.log(e.key);
    if(e.key==="Enter")
    {
       register();
    }
   });
  $('#searchPEt').on('keyup',searchPet);
}

window.onload=init;