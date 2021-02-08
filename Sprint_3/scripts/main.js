"use strict";

// find and store DOM elements to work with
const commentUl = document.getElementById("commentlist");
const commentForm = document.querySelector(".comments__form");

const apiUrl = "https://project-1-api.herokuapp.com";
const apiKey = "b3be8c44-0cee-4119-b14a-1c9fd6205437";

// attach an event listener to the comment form
commentForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    const user_name =  event.target.user_name.value;
    const comment_description = event.target.comment_description.value;
  //call a function and send the user_name and comment_description 
  if (user_name !== "" && comment_description !== "") {
    newPost(user_name, comment_description);
    event.target.reset(); // reset the form inputs, empty form inputs
  } else {
    alert("please enter a name and comment");
  }
}

function getComments(){
  axios
    .get(`${apiUrl}/comments?api_key=${apiKey}`)
    .then(function(response){
         console.log(response);
         appendToDom(response.data);
    })
    .catch(function(error){
      console.log(error);
    });
}

getComments();

function newPost(name, comment){
  axios
    .post(`${apiUrl}/comments?api_key=${apiKey}`,{
      name: name,
      comment: comment
    })
    .then(function(response){
      console.log(response);
      getComments();
    })
    .catch(function(error){
      console.log(error);
    });
}


function appendToDom(commentData){
  commentUl.innerHTML = "";  //clear HTML to avoid doubling
  // sort comments here
  const sortedComments = commentData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
  sortedComments.forEach(function(commentObj){

     //  create <div> element called commentDivItem
     const commentDivItemElem = document.createElement("div");
     // add the class .commentlist__container
     commentDivItemElem.classList.add("commentlist__container");

     // create <hr> element called divider
     const dividerElem = document.createElement("hr");
     // add the class .commentlist__divider
     dividerElem.classList.add("commentlist__divider");

     commentDivItemElem.appendChild(dividerElem);

     //  create <li> element called commentlistItem
     const commentlistLi = document.createElement("li");
     // add the class .commentlist__item
     commentlistLi.classList.add("commentlist__item");

     // create <img> element called commentlistImage
     const commentlistImageElem = document.createElement("img");
     commentlistImageElem.setAttribute("src", "./assets/images/User-image.png");
     // add the class .commentlist__userimage
     commentlistImageElem.classList.add("commentlist__userimage");

     commentlistLi.appendChild(commentlistImageElem);

     //  create <div> element called commentDivGroup
     const commentDivGroupElem = document.createElement("div");
     // add the class .commentlist__group
     commentDivGroupElem.classList.add("commentlist__group");

      //  create <div> element called commentDivCommentGroup
      const commentDivCommentGroupElem = document.createElement("div");
      // add the class .commentlist__commentgroup
      commentDivCommentGroupElem.classList.add("commentlist__commentgroup");

     //  create <p> element and add user name
     const commentUserNameElem = document.createElement("p");
     // add the class .commentlist__username
     commentUserNameElem.classList.add("commentlist__username");
     commentUserNameElem.innerText = commentObj.name;

     //  create <p> element and add timestamp
     const commentTimestampElem = document.createElement("p");
     // add the class .commentlist__timestamp
     commentTimestampElem.classList.add("commentlist__timestamp");
     commentTimestampElem.innerText = new Date(commentObj.timestamp).toLocaleDateString();

     commentDivCommentGroupElem.appendChild(commentUserNameElem);
     commentDivCommentGroupElem.appendChild(commentTimestampElem);

     //  create <p> element and add usercomment
     const commentUserCommentElem = document.createElement("p");
     // add the class .commentlist__usercomment
     commentUserCommentElem.classList.add("commentlist__usercomment");
     commentUserCommentElem.innerText = commentObj.comment;

     commentDivGroupElem.appendChild(commentDivCommentGroupElem);
     commentDivGroupElem.appendChild(commentUserCommentElem);

     commentlistLi.appendChild(commentDivGroupElem);

     commentDivItemElem.appendChild(commentlistLi);

     commentUl.appendChild(commentDivItemElem);

  });      
}


