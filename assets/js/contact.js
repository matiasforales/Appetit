//import { response } from "./general.js";

// validación de datos que se ingresan en los input
let element = document.querySelectorAll('input');

element.forEach(i => {
    i.addEventListener('blur', (e) => {
        let spanId = document.getElementById(e.target.name + '-error');
        let message = '';
        let error = false;
        if (e.target.name == 'name'){
            if (e.target.value == ""){
                message = 'Decinos tu nombre por favor.';
                error = true;
            }
            else {
                let regex = new RegExp('^[A-Za-z]{3,20}$');
                if (!regex.test(e.target.value)){
                    message = 'Por favor ingresa solo letras.';
                    error = true;
                }
            }
        }
        if (e.target.name == 'surname'){
            if (e.target.value == ""){
                message = 'Decinos tu nombre por favor.';
                error = true;
            }
            else {
                let regex = new RegExp('^[A-Za-z]{3,20}$');
                if (!regex.test(e.target.value)){
                    message = 'Por favor ingresa solo letras.';
                    error = true;
                }
            }
        }
        if (e.target.name == 'email'){
            if (e.target.value == ""){
                message = 'Necesitamos tu email para contactarte.';
                error = true;
            }
            else {
                let regex = new RegExp('^[A-Za-z]{3,20}$');
                if (!regex.test(e.target.value)){
                    message = 'Por favor ingresa solo letras.';
                    error = true;
                }
            }
        }
        if (error){
            spanId.innerHTML = '&#xe000';
            e.target.classList.add('error');
            // e.target.setCustomValidity(message);
            // i.reportValidity();
        }
        else {
            spanId.innerHTML = '';
            e.target.classList.remove('error');
            // e.target.setCustomValidity(message);
            // i.reportValidity();
        }
    })
})

// element.forEach(i => {
//     i.addEventListener('blur', (e) => {
//         console.log('target: ' + e.target.name);
//         console.log('valor: ' + e.target.value);
//         i.reportValidity()
//         if (e.target.validity.valueMissing) {
//             e.target.setCustomValidity('Por favor complete el campo');
//         }
//         if (e.target.validity.patternMismatch) {
//             if (e.target.name == "name"){
//                 e.target.setCustomValidity('Por favor ingrese un nombre válido sin caracteres especiales');
//             }
//             if (e.target.name == "surname"){
//                 e.target.setCustomValidity('Por favor ingrese un apellido válido sin caracteres especiales');
//             }
//             if (e.target.name == "email"){
//                 e.target.setCustomValidity('Por favor ingrese un e-mail válido');
//             }
//         }
//     })
//     i.addEventListener('change', (e) => {
//         e.target.setCustomValidity('');
//     })
// });

// pattern="[A-Za-z]+"  minlength="3" maxlength="50" => ^[A-Za-z]{3,20}$
// pattern="[A-Za-z]+"  minlength="5" maxlength="50" => ^[A-Za-z]{3,20}$
// pattern='^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'