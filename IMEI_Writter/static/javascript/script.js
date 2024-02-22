var doneTypingInterval = 1000;  // Time in milliseconds (1 second)
        function isValidQRCodeValue(value) { // to check the entered a valid qr code
             // Define a regular expression pattern to match the expected format
            const pattern = /^\d{15}\/[A-Z0-9]{8,32}$/;
            console.log(pattern.test(value))
            return pattern.test(value);
                }
    
    
    
    document.addEventListener("DOMContentLoaded", function() {
            var inputField = document.getElementById("SOCKET1");   //IMEI FIELD 1
            var com_div = document.getElementById("Socket1");     //COMPORT
            var com=com_div.textContent;
            var typingTimer; // Timer identifier
            
            console.log(com)
            
            inputField.addEventListener("input", function() {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(function() {
            if (isValidQRCodeValue(inputField.value)) {
                var csrftoken = getCookie('csrftoken');
                callDjangoView(inputField.value, com, csrftoken);
            }
        }, doneTypingInterval);
    });
});

    
    document.addEventListener("DOMContentLoaded", function() {
                var inputField = document.getElementById("SOCKET2");   //IMEI FIELD 2
                var com_div = document.getElementById("Socket2");     //COMPORT
                var com=com_div.textContent;
                var typingTimer; // Timer identifier
                
                console.log(com)
                
                inputField.addEventListener("input", function() {
                    clearTimeout(typingTimer);
                    typingTimer = setTimeout(function() {
                if (isValidQRCodeValue(inputField.value)) {
                    var csrftoken = getCookie('csrftoken');
                    callDjangoView(inputField.value, com, csrftoken);
                }
            }, doneTypingInterval);
        });
    });
        
        
    
    document.addEventListener("DOMContentLoaded", function() {
            var inputField = document.getElementById("SOCKET3");   //IMEI FIELD 3
            var com_div = document.getElementById("Socket3");     //COMPORT
            var com=com_div.textContent;
            var typingTimer; // Timer identifier
            
            console.log(com)
            
            inputField.addEventListener("input", function() {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(function() {
            if (isValidQRCodeValue(inputField.value)) {
                var csrftoken = getCookie('csrftoken');
                callDjangoView(inputField.value, com, csrftoken);
            }
        }, doneTypingInterval);
    });
});
        
    
    
    document.addEventListener("DOMContentLoaded", function() {
            var inputField = document.getElementById("SOCKET4");   //IMEI FIELD 4
            var com_div = document.getElementById("Socket4");     //COMPORT
            var com=com_div.textContent;
            var typingTimer; // Timer identifier
            
            console.log(com)
            
            inputField.addEventListener("input", function() {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(function() {
            if (isValidQRCodeValue(inputField.value)) {
                var csrftoken = getCookie('csrftoken');
                callDjangoView(inputField.value, com, csrftoken);
            }
        }, doneTypingInterval);
    });
});
        
    
    
    document.addEventListener("DOMContentLoaded", function() {
            var inputField = document.getElementById("SOCKET5");   //IMEI FIELD 5
            var com_div = document.getElementById("Socket5");     //COMPORT
            var com=com_div.textContent;
            var typingTimer; // Timer identifier
            
            console.log(com)
            
            inputField.addEventListener("input", function() {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(function() {
            if (isValidQRCodeValue(inputField.value)) {
                var csrftoken = getCookie('csrftoken');
                callDjangoView(inputField.value, com, csrftoken);
            }
        }, doneTypingInterval);
    });
});
        
        
   
    document.addEventListener("DOMContentLoaded", function() {
            var inputField = document.getElementById("SOCKET6");   //IMEI FIELD 6
            var com_div = document.getElementById("Socket6");     //COMPORT
            var com=com_div.textContent;
            var typingTimer; // Timer identifier
            
            console.log(com)
            
            inputField.addEventListener("input", function() {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(function() {
            if (isValidQRCodeValue(inputField.value)) {
                var csrftoken = getCookie('csrftoken');
                callDjangoView(inputField.value, com, csrftoken);
            }
        }, doneTypingInterval);
    });
});
        
    
    
    document.addEventListener("DOMContentLoaded", function() {
            var inputField = document.getElementById("SOCKET7");   //IMEI FIELD 7
            var com_div = document.getElementById("Socket7");     //COMPORT
            var com=com_div.textContent;
            var typingTimer; // Timer identifier
            
            console.log(com)
            
            inputField.addEventListener("input", function() {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(function() {
            if (isValidQRCodeValue(inputField.value)) {
                var csrftoken = getCookie('csrftoken');
                callDjangoView(inputField.value, com, csrftoken);
            }
        }, doneTypingInterval);
    });
});
        
        
    
    document.addEventListener("DOMContentLoaded", function() {
            var inputField = document.getElementById("SOCKET8");   //IMEI FIELD 8
            var com_div = document.getElementById("Socket8");     //COMPORT
            var com=com_div.textContent;
            var typingTimer; // Timer identifier
            
            console.log(com)
            
            inputField.addEventListener("input", function() {
                clearTimeout(typingTimer);
                typingTimer = setTimeout(function() {
            if (isValidQRCodeValue(inputField.value)) {
                var csrftoken = getCookie('csrftoken');
                callDjangoView(inputField.value, com, csrftoken);
            }
        }, doneTypingInterval);
    });
});
        
     
        // Main function to call views function
        function callDjangoView(inputData,com,csrfToken) {        
            // Send an AJAX request to Django view with inputData
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "{% url 'start-test' %}", true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("X-CSRFToken", csrfToken);
            xhr.onreadystatechange = function() {
                
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var response = JSON.parse(xhr.responseText);
                    console.log(response.message);
                }
            };
            
            // Create a JSON object with the input data
            var data = {
                "input_data": inputData,
                "com_port":com
            };

            // Send the JSON data as the request body
            xhr.send(JSON.stringify(data));
        
            const eventSource = new EventSource('/sse/');

eventSource.onmessage = function(event) {
    const data = event.data;
    console.log('Received message from server:', data);
    
    // Handle the received message in your front-end UI
};

eventSource.onopen = function(event) {
    console.log('SSE connection established.');
};

eventSource.onerror = function(event) {
    console.error('Error occurred:', event);
};
        
        
        
        
        }
    
        
        function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    
//     const eventSource = new EventSource('/sse/');

// eventSource.onmessage = function(event) {
//     const data = event.data;
//     console.log('Received message from server:', data);
    
//     // Handle the received message in your front-end UI
// };

// eventSource.onopen = function(event) {
//     console.log('SSE connection established.');
// };

// eventSource.onerror = function(event) {
//     console.error('Error occurred:', event);
// };