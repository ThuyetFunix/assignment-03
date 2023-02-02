// Regex validate email
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Get email
let email = document.getElementById('email');
// Get validate message
let message = document.querySelector('.message');

// Add event for submit button
document.getElementById('btn-submit').addEventListener('click', function(event) {
  let emailValue = email.value;
  // Check email empty
  if (emailValue === '') {
    message.innerText = 'Bạn chưa nhập email!';
    return;
  }

  let isEmailValid = regex.test(emailValue);
  // Check email valid
  if (isEmailValid) {
    document.querySelector('.info').style.display = 'block';
    document.querySelector('.form').style.display = 'none';
  } else {
    message.innerText = 'Email chưa đúng định dạng!';
  }
});


// Get all cateogry element
let categoriesElm = document.querySelectorAll('.category-detail')
// Get all button view (more, less) element
let btnView = document.querySelectorAll('.btn-view')

// Loop through each button
for (let index = 0; index < btnView.length; index++) {
  // Add event when click button view
  btnView[index].addEventListener('click', function(e) {
    categoriesElm[index].style.display = categoriesElm[index].style.display === 'block' ? 'none' : 'block';
    btnView[index].innerText = categoriesElm[index].style.display === 'block' ? 'View less' : 'View more';
  })  
}