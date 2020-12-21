function identificacion (user, password){
    switch(true){
        case user === "admin" && password === 1234:
            return "Bienvenido a nuestro sitio!";
            break;
        case user === "admin" && password !== 1234:
            return "Contraseña incorrecta";
            break;
        case user !== "admin" && password === 1234:
            return "usuario incorrecto";
            break;
        case user !== "admin" && password === 1234:
            return "usuario y contraseña incorrectos";
            break;
        default:
            return "debes ingresar los datos requeridos";
            break;
    }
}

console.log(identificacion("lean",1234));