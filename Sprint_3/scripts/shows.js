"use strict";

// find and store dom elements to work with
const showsListUl = document.getElementById("showslist");

const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "b3be8c44-0cee-4119-b14a-1c9fd6205437";

function getShows(){
  axios
    .get(`${apiUrl}/showdates?api_key=${apiKey}`)
    .then(function(response){
         console.log(response);
         appendShowToDom(response.data);
    })
    .catch(function(error){
      console.log(error);
    });
}

getShows();

// create shows list item <li class=".shows__item"

function appendShowToDom(showData){
  showsListUl.innerHTML = "";  //clear HTML to avoid doubling

    for (let i = 0; i < showData.length; i++){
      const showObj = showData[i];

          //  create <li> element called showslistItem
        const showslistItemLi = document.createElement("li");
        // add the class .shows__item
        showslistItemLi.classList.add("shows__item");

          //  create <div> element called showsDivTablelistElem
        const showsDivTableListElem = document.createElement("div");
        // add the class .shows__tablelist
        showsDivTableListElem.classList.add("shows__tablelist");

        //  create <p> element and add showsDateElem
        const showsDateElem = document.createElement("p");
        showsDateElem.innerText = "DATE";
        // add the class .shows__date
        showsDateElem.classList.add("shows__date");

        //  create <h3> element and add showsDateInputElem
        const showsDateInputElem = document.createElement("h3");
        showsDateInputElem.innerText = showObj.date;
        // add the class .shows__dateinput
        showsDateInputElem.classList.add("shows__dateinput");

        //  create <p> element and add showsVenueElem
        const showsVenueElem = document.createElement("p");
        showsVenueElem.innerText = "VENUE";
        // add the class .shows__venue
        showsVenueElem.classList.add("shows__venue");

        //  create <p> element and add showsVenueInputElem
        const showsVenueInputElem = document.createElement("p");
        showsVenueInputElem.innerText = showObj.place;
        // add the class .shows__venueinput
        showsVenueInputElem.classList.add("shows__venueinput");

        //  create <p> element and add showsLocationElem
        const showsLocationElem = document.createElement("p");
        showsLocationElem.innerText = "LOCATION";
        // add the class .shows__location
        showsLocationElem.classList.add("shows__location");

        //  create <p> element and add showsLocationInputElem
        const showsLocationInputElem = document.createElement("p");
        showsLocationInputElem.innerText = showObj.location;
        // add the class .shows__locationinput
        showsLocationInputElem.classList.add("shows__locationinput");  

        // create <button> element and add showsButtonElem
        const showsButtonElem = document.createElement("button");
        showsButtonElem.innerText = "BUY TICKETS";
        // add the class .shows__button
        showsButtonElem.classList.add("shows__button"); 

        // create <hr> element called divider
        const dividerElem = document.createElement("hr");
        // add the class .shows_divider
        dividerElem.classList.add("shows_divider");

        showsDivTableListElem.appendChild(showsDateElem);  
        showsDivTableListElem.appendChild(showsDateInputElem); 
        showsDivTableListElem.appendChild(showsVenueElem); 
        showsDivTableListElem.appendChild(showsVenueInputElem); 
        showsDivTableListElem.appendChild(showsLocationElem); 
        showsDivTableListElem.appendChild(showsLocationInputElem); 
        showsDivTableListElem.appendChild(showsButtonElem); 


        showslistItemLi.appendChild(showsDivTableListElem);
        showslistItemLi.appendChild(dividerElem);

        showsListUl.appendChild(showslistItemLi);       
        
    }
}

//appendShowToDom();
  