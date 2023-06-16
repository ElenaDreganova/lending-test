 /* When the user clicks on the button, 
 toggle between hiding and showing the dropdown content */
 function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
 }

 // Close the dropdown if the user clicks outside of it
 window.onclick = function(e) {
  if (!e.target.matches('#dropbtn')) {
     var myDropdown = document.getElementById("myDropdown");
       if (myDropdown.classList.contains('show')) {
         myDropdown.classList.remove('show');
       }
   }
 }




//   filter

const list = document.querySelector('.recommend-filter');
      items = document.querySelectorAll('.blocks-item');
      listItems = document.querySelectorAll('.btn-filter');

function filter() {
  list.addEventListener('click', event => {
    const targetId = event.target.dataset.id;
    const target = event.target;


    if(target.classList.contains('btn-filter')) {

    listItems.forEach(listItem => listItem.classList.remove('active'))
    target.classList.add('active')
  }
          switch(targetId) {
          case 'house': 
            getItems(targetId);
            break
          case 'villa':
            getItems(targetId);
            break

          case 'apartment':
            getItems(targetId);
            break
          }
  })
}

 filter();

function getItems(className) {
  items.forEach(item => {
            if(item.classList.contains(className)) {
              item.style.display = 'block'
            } else {
              item.style.display = 'none'

            }
            })
}

//slider

var ul = document.querySelector('.blocks-row');
document.querySelector('.prev').addEventListener('click', function() {
  ul.insertBefore(ul.lastElementChild, ul.firstElementChild);
});
document.querySelector('.next').addEventListener('click', function() {
  ul.appendChild(ul.firstElementChild);
});





// email validation
const email = document.getElementById("mail");

  email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an e-mail address!");
    } else {
      email.setCustomValidity("");
    }
  });




