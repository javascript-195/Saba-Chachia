
function registerUser() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;
    let countryCode = document.getElementById("countrycode").value;

    let res = document.getElementById("res");

    let usernameRegex = /^[A-Za-z][A-Za-z0-9]*[0-9]$/;
    let emailRegex = /^[A-Za-z][A-Za-z0-9_.+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,5}$/;
    let passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@!#$%?&*])[A-Za-z\d@!#$%?&*]{8,}$/;
    let addressRegex = /^[A-Za-z0-9\s.,-]+$/;
    let phoneRegex = /^\+(\d{1,9})(\d{9})$/;
    let countryCodeRegex = /^\d{4}$/; 

    res.innerHTML = ""; 

    if (!usernameRegex.test(username)) {
        res.innerHTML = `<p style="color:red;">Username is incorrect!</p>`;
    } 
    else if (!emailRegex.test(email)) {
        res.innerHTML = `<p style="color:red;">Email is incorrect!</p>`;
    } 
    else if (!passwordRegex.test(password)) {
        res.innerHTML = `<p style="color:red;">Password is incorrect!</p>`;
    }
    else if (!addressRegex.test(address)) {
        res.innerHTML = `<p style="color:red;">Address is incorrect!</p>`;
    }
    else if (!phoneRegex.test(phone)) {
        res.innerHTML = `<p style="color:red;">Phone format must be +995599123456</p>`;
    }
    else if (!countryCodeRegex.test(countryCode)) {
        res.innerHTML = `<p style="color:red;">Country Code must be exactly 4 digits!</p>`;
    }
    else {
        res.innerHTML = `<p style="color:green;">Registration successful!</p>`;
    }
}
