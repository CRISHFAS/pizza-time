const validateForm = (form) => (value) => {
    let errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /\d/;
    if (form === "newsletter") {
        if (!value.email) {
            errors.email = "Por favor ingrese un correo electrónico"
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "Por favor ingrese un correo electrónico válido"
        }
    }
    else if (form === "registration") {
        if (!value.fullname) {
            errors.fullname = "Por favor ingrese el nombre completo"
        }
        else if (value.fullname.length < 3) {
            errors.fullname = "El nombre es demasiado corto"
        }
        else if (value.fullname === "test" || value.fullname === "testtest" || value.fullname === "Test" || value.fullname === "admin" || value.fullname === "name" || value.fullname === "Name" || value.fullname === "Fullname") {
            errors.fullname = "Nombre no válido!"
        }
        if (!value.email) {
            errors.email = "Por favor ingrese el correo electrónico"
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "Por favor ingrese un correo electrónico válido"
        }
        else if (value.email === "test@gmail.com" || value.email === "test@mail.com" || value.email === "test@hotmail.com" || value.email === "admin@gmail.com") {
            errors.email = "Correo electrónico no válido!"
        }
        if (!value.password) {
            errors.password = "Por favor, introduzca una contraseña válida"
        }
        else if (value.password.length < 8 || value.repeatPassword.length < 8) {
            errors.password = "La contraseña debe tener al menos 8 caracteres"
        }
        else if (value.password === "12345678" || value.password === "qwerty1" || value.password === "test1234" || value.password === "abcd1234" || value.password === "123456789" || value.password === "1234567890") {
            errors.password = "Contraseña insegura!"
        }
        else if (/\s/.test(value.password)) {
            errors.password = "La contraseña no debe tener espacios vacíos";
        }
        if (!value.repeatPassword) {
            errors.repeatPassword = "Por favor repita la contraseña"
        }
        if (value.password !== value.repeatPassword) {
            errors.password = "Las contraseñas no coinciden"
        }
    }
    else if (form === "profile") {
        if (value.fullname.length !== 0 && value.fullname.length < 3) {
            errors.fullname = "El nombre completo es demasiado corto"
        }
        else if (value.fullname === "test" || value.fullname === "testtest" || value.fullname === "Test" || value.fullname === "admin" || value.fullname === "name" || value.fullname === "Name" || value.fullname === "Fullname") {
            errors.fullname = "Nombre no válido!"
        }
        if (value.address.length !== 0 && value.address.length < 5) {
            errors.address = "La dirección es demasiado corta"
        }
        if (value.email.length !== 0 && !emailRegex.test(value.email)) {
            errors.email = "Por favor ingrese un correo electrónico válido"
        }
        else if (value.email === "test@gmail.com" || value.email === "test@mail.com" || value.email === "test@hotmail.com" || value.email === "admin@gmail.com") {
            errors.email = "Correo electrónico no válido!"
        }
        if (value.password.length !== 0 && value.password.length < 8) {
            errors.password = "La contraseña debe tener al menos 8 caracteres"
        }
        else if (value.password === "12345678" || value.password === "qwerty1" || value.password === "test1234" || value.password === "abcd1234" || value.password === "123456789" || value.password === "1234567890") {
            errors.password = "Contraseña insegura!"
        }
        if (value.number.length !== 0 && value.number.length < 5) {
            errors.number = "El número de teléfono no es válido"
        }
        else if (value.number.length !== 0 && !numberRegex.test(value.number)) {
            errors.number = "El número de teléfono no es válido"
        }
    }
    else if (form === "login") {
        if (!value.email) {
            errors.email = 'Por favor ingrese el correo electrónico';
        } else if (!emailRegex.test(value.email)) {
            errors.email = 'Por favor ingrese un correo electrónico válido';
        }

        if (!value.password) {
            errors.password = 'Por favor, introduzca una contraseña válida';
        }
        else if (value.password.length < 8) {
            errors.password = 'La contraseña debe tener al menos 8 caracteres';
        }
    }
    else if (form === "contact") {
        if (!value.fullname) {
            errors.fullname = "Por favor, introduzca su nombre completo"
        }
        else if (numberRegex.test(value.fullname)) {
            errors.fullname = "Por favor, introduzca un nombre completo válido"
        }
        else if (value.fullname && value.fullname.length < 3) {
            errors.fullname = "Por favor, introduzca un nombre completo válido"
        }
        if (!value.email) {
            errors.email = "Por favor ingrese un correo electrónico"
        }
        else if (!emailRegex.test(value.email)) {
            errors.email = "Por favor ingrese un correo electrónico válido"
        }
        else if (value.email === "test@gmail.com" || value.email === "test@mail.com" || value.email === "test@hotmail.com" || value.email === "admin@gmail.com") {
            errors.email = "Correo electrónico no válido!"
        }
        if (!value.message) {
            errors.message = "Por favor escribe un mensaje"
        }
        else if (value.message && value.message.length < 10) {
            errors.message = "El mensaje debe tener al menos 10 caracteres"
        }
    }
    else if (form === "payment") {
        if (!value.firstname) {
            errors.firstname = "Por favor ingrese el nombre"
        }
        if (!value.lastname) {
            errors.lastname = "Por favor ingresa el apellido"
        }
        if (!value.cardNumber || value.cardNumber.length < 16) {
            errors.cardNumber = "Por favor, introduzca un número de tarjeta válido"
        }
        if (!value.cvv || value.cvv.length < 3) {
            errors.cvv = "Por favor ingrese un CVV válido"
        }
        if (!value.month || value.month > 12 || value.month < 1) {
            errors.year = "Por favor ingrese un mes válido"
        }
        if (!value.year || value.year > 28 || value.year < 17) {
            errors.year = "Por favor ingrese un año válido"
        }
    }

    return errors;
}

export default validateForm;