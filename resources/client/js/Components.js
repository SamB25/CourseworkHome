function getComponentsList() {

    console.log("Invoked getComponentsList()");     //console.log your BFF for debugging client side - also use debugger statement
    const url = "/Components/list";         // API method on web server will be in Users class, method list
    fetch(url,{
        method: "GET",          //Get method
    }).then(response => {
        return response.json();                 //return response as JSON
    }).then(response => {
        if (response.hasOwnProperty("Error")) { //checks if response from the web server has an "Error"
            alert(JSON.stringify(response));    // if it does, convert JSON object to string and alert (pop up window)
        } else {
            formatComponentsList(response);          //this function will create an HTML table of the data (as per previous lesson)
        }
    });
}
function formatComponentsList(myJSONArray){       //formats product table ready for webpage
    let dataHTML = "";
    for (let item of myJSONArray) {
        dataHTML += "<tr><td>" + item.ComponentName + "<td><td>" + item.ComponentDescription + "<tr><td>";
    }
    document.getElementById("ComponentsTable").innerHTML = dataHTML;
}
