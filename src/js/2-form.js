const formData = { email: "", message: "" }

const FORM_KEY = "feedback-form-state";

const feedbackForm = document.querySelector(".feedback-form");

populateForm();

feedbackForm.addEventListener('input', feedbackFormInput);
feedbackForm.addEventListener('submit', feedbackFormSubmit);


function feedbackFormInput(event) {
  
  formData.email = event.currentTarget.email.value;
  formData.message = event.currentTarget.message.value;

  try {
      localStorage.setItem(FORM_KEY, JSON.stringify(formData).trim());
  } catch (error) {
      console.log(err);
      return;
  }
} 

function feedbackFormSubmit(event) {
  
  event.preventDefault();
  
  if (!formData.email || !formData.message) {
      return console.log("Fill please all fields");
  }

  console.dir(formData);
  
  localStorage.removeItem(FORM_KEY);
  
  event.currentTarget.reset();
}

function populateForm() {
    let dataFromStorage = {};
     try {
        dataFromStorage = JSON.parse(localStorage.getItem(FORM_KEY))
    } catch (error) {
        console.log(err);
        return;
     }
    
    if (!dataFromStorage) { 
        return;
    }

    for (const key in dataFromStorage) { 
        feedbackForm.elements[key].value = dataFromStorage[key];
    }
 }