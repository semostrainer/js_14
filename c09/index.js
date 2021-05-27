// AJAX 
// XMLHttpRequest
let httpRequest;

let makeRequest = () => {
    httpRequest = new XMLHttpRequest();
    // IE 6 and older  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    if (!httpRequest) {
        console.error('Cannot create an XMLHttpRequestn instace');
        return false;
    }

    // POST method
    /* let user = {
        "id": 11,
        "name": "Clementina DuBuque post",
        "username": "Moriah.Stanton post",
        "email": "Rey.Padberg@karina.biz post",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Lebsackbury",
            "zipcode": "31428-2261",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    }; */

    // PUT method
    let user = {
        "id": 10,
        "name": "Ivana DuBuque",
        "username": "Moriah.Stanton",
        "email": "Rey.Padberg@karina.biz",
        "address": {
            "street": "Kattie Turnpike",
            "suite": "Suite 198",
            "city": "Skopje",
            "zipcode": "1000",
            "geo": {
                "lat": "-38.2386",
                "lng": "57.2232"
            }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
            "name": "Hoeger LLC",
            "catchPhrase": "Centralized empowering task-force",
            "bs": "target end-to-end models"
        }
    };

    // code to be executed
    httpRequest.onreadystatechange = showResult;
    // GET method
    // httpRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
    // httpRequest.send();
    // POST method
    // httpRequest.open('POST', 'https://jsonplaceholder.typicode.com/users');
    // httpRequest.setRequestHeader('Content-Type', 'application/json');
    // PUT & PATCH methods
    // httpRequest.open('PUT', 'https://jsonplaceholder.typicode.com/users/10'); // PUT & PATCH
    // httpRequest.setRequestHeader('Content-Type', 'application/json');
    // httpRequest.send(JSON.stringify(user));
    // DELETE method
    httpRequest.open('DELETE', 'https://jsonplaceholder.typicode.com/users/10');
    httpRequest.send();
}

let showResult = () => {
    try {
        if (httpRequest.readyState === XMLHttpRequest.DONE) { // status 4
            if (httpRequest.status === 200) { // 200 OK
            // if (httpRequest.status === 201) { // create -> post
                console.log(httpRequest.responseText);
            } else {
                console.log(httpRequest.status);
                console.error('There was a problem with the request');
            }
        }

    } catch (error) {
        console.error('error', error);
    }
}

makeRequest();