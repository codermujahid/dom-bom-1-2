/**
 * Alert function
 */
 const setAlert =  ( masg , type = 'danger') => {
    return ` <p class="alert alert-${type} d-flex justify-content-between">${masg} <button data-bs-dismiss="alert" class="btn-close"></button></p>`;
    }



/**
 * Alert function
 */
const emailCheck = (email) => {
   let pattern = /^[a-z0-9_\.]{1,}@[a-z0-9]{2,}\.[a-z]{2,5}$/;
   return pattern.test(email);
}


/**
 * Cell function
 */
const cellCheck = (cell) => {
   let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
   return pattern.test(cell);
}





