
## Create / Add Element Snippet

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
