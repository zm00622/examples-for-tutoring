
## Create / Add Element - JavaScript Snippets

```

<body>
<div id="new">
<p id="p1">Tutorix</p>
<p id="p2">Tutorialspoint</p>
</div>
<script>
   var tag = document.createElement("p");
   var text = document.createTextNode("Tutorix is the best e-learning platform");
   tag.appendChild(text);
   var element = document.getElementById("new");
   element.appendChild(tag);
</script>
</body>

```

```
<html>
<head>
  <title>||Working with elements||</title>
</head>
<body>
  <div id="div1">The text above has been created dynamically.</div>
  <script>
  
document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

  </script>
</body>
</html>

```

```


<body>
<ul id="app">
    <li>JavaScript</li>
</ul>
  
  
  <script>
  
let app = document.querySelector('#app');

let langs = ['TypeScript','HTML','CSS'];

let nodes = langs.map(lang => {
    let li = document.createElement('li');
    li.textContent = lang;
    return li;
});

app.append(...nodes);
  
  
  </script>
  
  
</body>


```

```



```

## Delete / Remove Element - JavaScript Snippets

```

// Remove a property from an object

const Employee = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined


```

```

// Jquery Example

<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
</script>
</head>
<body>

<p>If you click on me, I will disappear.</p>
<p>Click me away!</p>
<p>Click me too!</p>

</body>


```

```

jQuery example

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".


```

## Edit / Modify Element - JavaScript Snippets

```

```
