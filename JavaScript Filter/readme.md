How to Create a Simple JavaScript Filter
Benjamin Flanders
Benjamin Flanders

Jul 22, 2020·8 min read




Created by Ben Flanders | July 22, 2020
NOTE: Before following along with this tutorial it is recommended that you have a basic understanding of HTML CSS and JavaScript, as well as how to use Visual Studio Code or another text editor. This tutorial is inspired by a resource from w3schools.com

If you are a visual learner like me, feel free to watch and code along with this video version of the tutorial! I go through all the same code in this video, but it is a little fast paced if this is your first time seeing the content. The text below goes more in depth with the step by step process.
Welcome!
If you are anything like me and have recently begun learning JavaScript, undoubtedly you have run into issues when watching tutorials and scouring through documentation. As someone who is self taught in coding, I myself understand this struggle all too well, and want to provide clear and concise tutorials on varying topics that I wish existed when I was still a beginner.
So what will we be building today? A JavaScript Filter! JavaScript is so powerful and enables developers to bring their web pages to life and create better interaction for the user. Filters can be used for many applications, like product, article, and event filters. The goal for any good filter should be to empower the user to find the exact information they need. There are SEVERAL different ways to get this done depending on the parameters of your project, but today we are going to look at a very simple and easy way to achieve this filtration with JavaScript and CSS class names.
Getting Started
The first thing we need to do is set up our file structure for the project. I will be using Visual Studio Code for this tutorial, but you can use any text editor that you are comfortable with.
NOTE: I have provided a boilerplate template with the necessary file structure at this GitHub repository link: https://github.com/BenFlanders/JS-Filter-Boilerplate feel free to clone this and code along!
The first thing we will need to do when we open a new project is create our three files: index.html, styles.css, and scripts.js You can name these whatever you like. Start by hitting the new file button in your project folder, and type in these file names.

Next, ensure that your CSS styling and JavaScript are both linked to your HTML page by including a <link> and <scripts> tag. With that, our project is set up and ready to go!

Setting Up Our index.html
Inside of our index.html, we are going to create two different sections. The first section will contain the actual buttons our user can interact with to select filter values and affect the page. The second section is going to hold our objects that we want the user to be able to filter. These will be simple boxes with different descriptions that we can use to showcase our filtration.
To begin, we need to create a set of buttons that the user can click on to select which filter objects will be rendered on the page. Start by creating an empty <div> tag and giving it an id of “buttons”. Inside of this tag, you then want to create a list of buttons whose values represent the different categories for your filter. For example, my categories will be fruit, colors, cars, and animals. Give these buttons a class name of “btn” so that we can style them, and we will come back to these buttons later to add some functionality to them.
NOTE: Be sure to also include a “Show all” button that will allow the user to reset the objects on the page after they have filtered them.

Next we need to create our box objects. Start by creating a <div> tag with a class name of “objects”. Inside this tag, you will create your “list” of items. I would suggest creating at least 12 objects so that the filtration in testing is more evident. Create these items by using another <div> tag, and give it a class name of “box” for now. Inside each <div> tag, write the name of an object, and be sure to include a variety of differing items according to a few categories.

After completing the previous step, your index.html should look something like the images above. Let’s add some styling to our project so we can see what our initial set of objects looks like.
Adding Some Styling
Open up your styles.css file and start by adding a basic CSS reset which sets our margin and padding to 0, and our box-sizing to border-box. Next, we are going to style the buttons as well as the filter objects. Please add the following code in the image below to your style.css, and be sure to save the project. This code will make it easier to distinguish our filter items, and add some hover effects to the filter buttons.

CSS part 1

CSS part 2
Please take note of the “show” class we have added. While this class is not currently applied to an element in our HTML, this will be used later in conjunction with our JavaScript to toggle our elements on the page. Also, by default we have made our filter objects hidden with the “display: none;” line of code. This will be fixed in the next steps.
Creating Our JavaScript Filter
Setting up our first function
You may have figured out at this point that the way this filter is going to work is by toggling visibility on the page based on object class name and button press. This will make more sense soon. First, we need to open our scripts.js file and begin making our filter function. Create a function named filterObjects with an argument “c”, and initialize variables “x” and “i” inside the function.
The first thing we need this function to do is set our value for “c”. This will be important for getting all of our objects to show up when the “show all” button is selected. Write out a conditional statement that sets the value of c. if (c == “all”) c = “”; Next, we need to loop through all of our object items and remove the “show” class from every item. This will ensure that each time we click a button, we reset our list of items and only apply the “show” class to the items that should be filtered. To do this we will make a simple for loop.
Inside the for loop, we will need to do two things, and we will be using two additional functions. The first is removing the “show” class, and the second is adding the “show” class to objects that match the current filter value. The following code will do exactly this, and we will look at these additional functions in our next step.

This code loops through our filter objects and removes the show class through the removeClass function. Then, if the object has a class name that matches the value of the selected button, it will add the “show” class back onto the objects via the addClass function.
Creating the Add and Remove functions
Now that we have our main function, we have to write the add and remove logic on our other functions. Please look at the code shown in the image below. These functions are very similar. Each function takes in the current filter object, as well as the “show” class as arguments. Then, the function will break down the objects current class names, and compare it to see if “show” is included or not in the class list.

When we draw connections back to our original function, it is easy to see where they fit in our filter. If you are having a hard time understanding this, I would suggest looking into the array methods used in the code to track each step of the function and understand how we are manipulating our CSS classes.
NOTE: the indexOf method works by checking to see if a value or string is included in an array, and will return a -1 if it is not present. This is how we can check if our “show” class is present on an object or not.
Final Steps in JavaScript
Now that we have created our functions, the final things to do are default the page to “show all”, and invoke our functions on button click. First, at the top of scripts.js, call our filterObjects function with the argument value of “all”. This will default the page to load all of our objects.

The last thing we need to do is call our function every time that the user clicks one of our filter buttons. In order to do this, head back into your index.html file, and add onclick = “filterObjects(‘classname’)” inside each of your button elements. Take special care to add in the unique name of the categories for each button. EXAMPLE: the “cars” button should have “cars” as the classname in the onclick function.

Assigning Filter Values to our Objects
We are almost there! If you have made it this far, you are one step away from getting your filter working! The very last thing we need to do is manually add our class names onto our filter objects according to what category they fit into. Please see the example image below.

NOTE: Some objects may fit into multiple categories, like the Orange object. Orange is both a fruit and a color. In this case you will add multiple class names onto the object.
Conclusion
Tada! Congratulations, you have just built out your very first JavaScript filter using CSS class names! Make sure to test out your code and open a live server to ensure it is working properly. By default, every object should show up on the page, and when you click a button, only objects that fit into your selected category should be showing. If you have trouble with this, try reviewing the tutorial video provided at the top pf this article, or ask your specific questions in the comments below. I hope that this article has helped you understand a bit more about JavaScript and where you can implement this functionality.
Benjamin Flanders
Follow
160


1


