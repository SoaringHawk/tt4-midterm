import axios from 'axios';

const apiUrl = 'http://127.0.0.1:3000'; 

axios.delete(`${apiUrl}/c1`)  
    .then(response => {
        console.log('Test case 2 (in stock):', response.status, response.data);
    })
    .catch(error => {
        if (error.response) {
            console.log('Test case 2 (in stock):', error.response.status, error.response.data);
        } else {
            console.error('Test case 2 (in stock):', error.message);
        }
    });

axios.delete(`${apiUrl}/c2`)  
    .then(response => {
        console.log('Test case 3 (in order):', response.status, response.data);
    })
    .catch(error => {
        if (error.response) {
            console.log('Test case 3 (in order):', error.response.status, error.response.data);
        } else {
            console.error('Test case 3 (in order):', error.message);
        }
    });


axios.delete(`${apiUrl}/c3`)  
    .then(response => {
        console.log('Test case 4 (success):', response.status, response.data);
    })
    .catch(error => {
        if (error.response) {
            console.log('Test case 4 (success):', error.response.status, error.response.data);
        } else {
            console.error('Test case 4 (success):', error.message);
        }
    });
