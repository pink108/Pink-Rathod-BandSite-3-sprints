"use strict";

// find and store dom elements to work with
const showsListUl = document.getElementById("showslist")

const shows = [
    {
     dates: "Mon Dec 17 2018",
     venue: "Ronald Lane",  
     location: "San Fancisco, CA"
    },
    {
      dates: "Tue Jul 18 2019",
      venue: "Pier 3 East",  
      location: "San Fancisco, CA"
     },
     {
      dates: "Fri Jul 22 2019",
      venue: "View Loungue",  
      location: "San Fancisco, CA"
     },
     {
      dates: "Sat Aug 12 2019",
      venue: "Hyatt Agency",  
      location: "San Fancisco, CA"
     },
     {
      dates: "Fri Sep 05 2019",
      venue: "Moscow Center",  
      location: "San Fancisco, CA"
     },
     {
      dates: "Wed Aug 11 2019",
      venue: "Pres Club",  
      location: "San Fancisco, CA"
     }
    
];


// create shows list item <li class=".shows__item"

function appendShow(){
  showsListUl.innerHTML = "";  //clear HTML to avoid doubling

    for (let i = 0; i < shows.length; i++){
      const showObj = shows[i];

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
        showsDateInputElem.innerText = showObj.dates;
        // add the class .shows__dateinput
        showsDateInputElem.classList.add("shows__dateinput");

        //  create <p> element and add showsVenueElem
        const showsVenueElem = document.createElement("p");
        showsVenueElem.innerText = "VENUE";
        // add the class .shows__venue
        showsVenueElem.classList.add("shows__venue");

        //  create <p> element and add showsVenueInputElem
        const showsVenueInputElem = document.createElement("p");
        showsVenueInputElem.innerText = showObj.venue;
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

appendShow();
  