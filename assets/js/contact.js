//import { response } from "./general.js";

// validación de datos que se ingresan en los input
let element = document.querySelectorAll('input')

element.forEach(i => {
    i.addEventListener('blur', (e) => {
        console.log('target: ' + e.target.name);
        console.log('valor: ' + e.target.value);
        i.reportValidity()
        if (e.target.validity.valueMissing) {
            e.target.setCustomValidity('Por favor complete el campo');
        }
        if (e.target.validity.patternMismatch) {
            if (e.target.name == "name"){
                e.target.setCustomValidity('Por favor ingrese un nombre válido sin caracteres especiales');
            }
            if (e.target.name == "surname"){
                e.target.setCustomValidity('Por favor ingrese un apellido válido sin caracteres especiales');
            }
            if (e.target.name == "email"){
                e.target.setCustomValidity('Por favor ingrese un e-mail válido');
            }
        }
    })
    i.addEventListener('change', (e) => {
        e.target.setCustomValidity('');
    })
});
