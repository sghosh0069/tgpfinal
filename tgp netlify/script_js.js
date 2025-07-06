// Google Apps Script Web App URL
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwmGHP2nXTpyaweYoFKE6lrsrnWx-3dNc2NajQxBQmK75pnMeGcdtY5fZxJrRegzrhTdw/exec';

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
  // Handle material selection and gold purity subsection
  document.getElementById("material").addEventListener("change", function() {
    const goldPuritySection = document.getElementById("goldPuritySection");
    const goldPurity = document.getElementById("goldPurity");
    
    if (this.value === "Gold") {
      goldPuritySection.classList.remove("hidden");
      goldPurity.required = true;
    } else {
      goldPuritySection.classList.add("hidden");
      goldPurity.required = false;
      goldPurity.value = "";
      document.getElementById("customPuritySection").classList.add("hidden");
      document.getElementById("customPurity").value = "";
    }
  });

  // Handle custom purity input
  document.getElementById("goldPurity").addEventListener("change", function() {
    const customPuritySection = document.getElementById("customPuritySection");
    const customPurity = document.getElementById("customPurity");
    
    if (this.value === "Other") {
      customPuritySection.classList.remove("hidden");
      customPurity.required = true;
    } else {
      customPuritySection.classList.add("hidden");
      customPurity.required = false;
      customPurity.value = "";
    }
  });

  // Form submission handler
  document.getElementById("customerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    // Clear previous messages
    hideMessages();
    clearErrors();
    
    let isValid = true;
    
    // Validate Full Name
    const fullName = document.getElementById("fullName").value.trim();
    if (!fullName) {
      showError("fullName", "fullNameError");
      isValid = false;
    }

    // Validate WhatsApp Number
    const whatsapp = document.getElementById("whatsapp").value.trim();
    if (!/^\d{10}$/.test(whatsapp)) {
      showError("whatsapp", "whatsappError");
      isValid = false;
    }

    // Validate Email if provided
    const email = document.getElementById("email").value.trim();
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("email", "emailError");
      isValid = false;
    }

    // Validate Material Selection
    const material = document.getElementById("material").value;
    if (!material) {
      showError("material", "materialError");
      isValid = false;
    }

    // Validate Gold Purity if Gold is selected
    if (material === "Gold") {
      const goldPurity = document.getElementById("goldPurity").value;
      if (!goldPurity) {
        showError("goldPurity", "goldPurityError");
        isValid = false;
      }
      
      // Validate custom purity if "Other" is selected
      if (goldPurity === "Other") {
        const customPurity = document.getElementById("customPurity").value.trim();
        if (!customPurity) {
          showError("customPurity", "customPurityError");
          isValid = false;
        }
      }
    }

    // Validate Contact Method
    const contactMethod = document.getElementById("contactMethod").value;
    if (!contactMethod) {
      showError("contactMethod", "contactMethodError");
      isValid = false;
    }

    // Validate Consent Checkbox
    if (!document.getElementById("consent").checked) {
      showError("consent", "consentError");
      isValid = false;
    }

    if (!isValid) {
      return;
    }

    // Show loading state
    showLoading();

    // Collect form data
    const formData = new FormData();
    formData.append('fullName', fullName);
    formData.append('whatsapp', whatsapp);
    formData.append('email', email);
    formData.append('address', document.getElementById("address").value.trim());
    formData.append('birthday', document.getElementById("birthday").value);
    formData.append('anniversary', document.getElementById("anniversary").value);
    formData.append('material', material);
    
    if (material === "Gold") {
      const goldPurity = document.getElementById("goldPurity").value;
      formData.append('goldPurity', goldPurity);
      if (goldPurity === "Other") {
        formData.append('customPurity', document.getElementById("customPurity").value.trim());
      }
    }
    
    const interests = Array.from(document.getElementById("interests").selectedOptions).map(option => option.value);
    formData.append('interests', interests.join(', '));
    formData.append('contactMethod', contactMethod);
    formData.append('consent', document.getElementById("consent").checked);
    formData.append('timestamp', new Date().toISOString());

    // Submit to Google Apps Script
    fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      hideLoading();
      
      if (data.result === 'success') {
        showSuccess();
        document.getElementById("customerForm").reset();
        document.getElementById("goldPuritySection").classList.add("hidden");
        document.getElementById("customPuritySection").classList.add("hidden");
      } else {
        showErrorMessage(data.error || 'There was an error submitting your form. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      hideLoading();
      showErrorMessage('Network error. Please check your connection and try again.');
    });
  });
});

function showError(inputId, errorId) {
  const inputElement = document.getElementById(inputId);
  const errorElement = document.getElementById(errorId);
  
  if (inputElement) {
    inputElement.classList.add("error");
  }
  if (errorElement) {
    errorElement.classList.add("show");
  }
}

function clearErrors() {
  const errorInputs = document.querySelectorAll(".error");
  const errorMessages = document.querySelectorAll(".error-message");
  
  errorInputs.forEach(input => input.classList.remove("error"));
  errorMessages.forEach(message => message.classList.remove("show"));
}

function showLoading() {
  const submitBtn = document.getElementById("submitBtn");
  const submitText = document.getElementById("submitText");
  
  if (submitBtn && submitText) {
    submitBtn.disabled = true;
    submitText.innerHTML = '<span class="loading-spinner"></span>Submitting...';
  }
}

function hideLoading() {
  const submitBtn = document.getElementById("submitBtn");
  const submitText = document.getElementById("submitText");
  
  if (submitBtn && submitText) {
    submitBtn.disabled = false;
    submitText.innerHTML = 'Submit Form';
  }
}

function showSuccess() {
  const successMessage = document.getElementById("successMessage");
  
  if (successMessage) {
    successMessage.style.display = 'block';
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  }
}

function showErrorMessage(message) {
  const errorMessage = document.getElementById("errorMessage");
  const errorText = document.getElementById("errorText");
  
  if (errorMessage && errorText) {
    errorText.textContent = message;
    errorMessage.style.display = 'block';
    
    // Scroll to error message
    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Hide error message after 5 seconds
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 5000);
  }
}

function hideMessages() {
  const successMessage = document.getElementById("successMessage");
  const errorMessage = document.getElementById("errorMessage");
  
  if (successMessage) {
    successMessage.style.display = 'none';
  }
  if (errorMessage) {
    errorMessage.style.display = 'none';
  }
}