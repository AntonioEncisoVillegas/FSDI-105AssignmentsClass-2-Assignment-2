    function display (){
    // travel the salon.
    document.getElementById('pets').innerHTML="";
    for(var i=0;i<salon.pets.length;i++){
        var aPet=salon.pets[i];

        if(aPet.service==="full"){
            aPet.price=30;
        }else if(aPet.service==="shower"){
            aPet.price=25;
        }else if(aPet.service==="nails"){
            aPet.price=15;
        }else if(aPet.service==="hair"){
            aPet.price=20;
        }

        // create a tmp
        var tmp=`
        <div id="${aPet.id}"class="pet">
         <h3> ${aPet.name}</h3>
         <p>  ${aPet.age}</p>
         <p>  ${aPet.gender}</p>
         <p>  ${aPet.breed}</p>
         <p>  ${aPet.service}</p>
         <p>  ${aPet.price}</p>
         <p>  ${aPet.ownername}</p>
         <p>  ${aPet.contactPhone}</p>
         <button onclick="deletePet(${aPet.id})"class="btn btn-danger"> Delete </button>
        </div>`;
        console.log(tmp);
        document.getElementById('pets').innerHTML+=tmp;
    }
    updteProfits();

    
}
function displayTable(aPet){
    if(aPet.service==="full"){
        aPet.price=30;
    }else if(aPet.service==="shower"){
        aPet.price=25;
    }else if(aPet.service==="nails"){
        aPet.price=15;
    }else if(aPet.service==="hair"){
        aPet.price=20;
    }
    var icon="";
    if(aPet.Type==="dog"){
        icon=" 🐕‍🦺 ";
    }else if(aPet.type==="cat"){
        icon="🐈";
    }else if(aPet.type==="bird"){
        icon="🦅";
    }else {
        icon="🐹";
    }


    // create the row

      var row=document.createElement('tr'); row.innerHTML=`
    
      <td>${aPet.name}</td>
      <td>${aPet.age}</td>
      <td>${aPet.gender}</td>
      <td>${icon}</td>
      <td>${aPet.breed}</td>
      <td>${aPet.service}</td>
      <td>${aPet.price}</td>
      <td>${aPet.ownername}</td>
      <td>${aPet.contactPhone}</td>
    

`
      
    // append the row to a table 
    document.querySelector('#petTable').appendChild(row);
    updateprofits();
}