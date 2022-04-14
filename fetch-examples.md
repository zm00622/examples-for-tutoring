
```

fetch('http://example.com/songs')
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
  
  
 ```
 
 ```
 fetch('http://example.com/movies.json')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
 
 ```
 
 
 ```
 var formData = new FormData();
var fileField = document.querySelector("input[type='file']");

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
 
 ```
 
 
 ```
 // Making get requests

const url = "http://dummy.restapiexample.com/api/v1/employees"; 
fetchurl()
     .then(res => {
            console.log(res);
})
      .catch(err => {
             console.log('Error: ${err}' ); 
});
 
 ```
 
  ```
 
 
 ```
 
 
 ```
 
 
 ```
 
  ```
 
 
 ```
 
 
 ```
 
 
 ```
