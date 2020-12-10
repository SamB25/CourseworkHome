function postUserLogin() {
    console.log("Invoked postUserLogin() ");

    let url = "/user/login";
    let formData = new FormData(document.getElementById('loginForm'));

    fetch(url, {
        method: "POST",
        body: formData,
    }).then(response => {
        return response.json();                 //now return that promise to JSON
}).then(response => {
        if (response.hasOwnProperty("Error")) {
        alert(JSON.stringify(response));        // if it does, convert JSON object to string and alert
    } else {
        Cookies.set("token", response.token);
        Cookies.set("username", response.username);
        window.open("home.html", "_self");       //open index.html in same tab
    }
});
}
