

const student_form = document.getElementById('student_form')
const emai_validation = document.getElementById('emai_validation')
const cell_validation = document.getElementById('cell_validation')
const masg = document.querySelector('.masg')
const loding_imag = document.querySelector('.loding_imag')
const mimi = document.querySelector('.mimi')
const emailField = document.querySelector('input[name="email"]'); 
const cellField = document.querySelector('input[name="cell"]'); 

//student form submit

student_form.onsubmit = (e) => {
    e.preventDefault();


//loding_imag show

    loding_imag.style.display = 'block';
    mimi.style.display = 'none';

//loding_imag hide

    let  Timeout = setTimeout(() => {
        loding_imag.style.display = 'none';
        mimi.style.display = 'block';

       //get data with from data object

        const form_data = new FormData(e.target);
    // const data = Object.fromEntries(form_data.entries());
    const {name, email, cell, username, gender, Coures} = Object.fromEntries(form_data.entries());

  
    //form validation
    if ( !name || !email || !cell || !username ) {
        masg.innerHTML = setAlert('All filds are requard');
        mimi.innerHTML = ('Not Submit')  
        
    } else {
        
        masg.innerHTML = setAlert('Data stable', 'success');
        mimi.innerHTML = ('success')

        e.target.reset();
    }

        clearTimeout(Timeout);
    }, 2000);
 
}

// validet email field

emailField.onkeyup = (e) => {
    let email = e.target.value;

    if (emailCheck(email)) {
        emai_validation.textContent = 'Email is okay now'
        emai_validation.className =  'text-success';
    } else {
        emai_validation.textContent = 'Invalid Email';
        emai_validation.className =  'text-danger';
    }


}

// validet cell_validation field

cellField.onkeyup = (c) => {
    let cell = c.target.value;

    if (cellCheck(cell)) {
        cell_validation.textContent = 'cell number is okay now'
        cell_validation.className =  'text-success';
    } else {
        cell_validation.textContent = 'Invalid Cell';
        cell_validation.className =  'text-danger';
    }


}

// validet cell_validation field

cellField.onkeyup = (c) => {
    let cell = c.target.value;

    if (cellCheck(cell)) {
        cell_validation.textContent = 'cell number is okay now'
        cell_validation.className =  'text-success';
    } else {
        cell_validation.textContent = 'Invalid Cell';
        cell_validation.className =  'text-danger';
    }


}




