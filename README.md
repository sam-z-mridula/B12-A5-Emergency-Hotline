## Answer to Question 1: 
The difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll is given below:

1. `getElementById`: `getElementById` is used to find an element by its unique id.
2. `getElementsByClassName`: It is used to find one or multiple elements by a common class name. It gives an array-like HTML collection.
3. `querySelector`: `querySelector` is used to get the first element that matches the given CSS selector.
4. `querySelectorAll`: This one is used to get all the elements that match the given CSS selector.


## Answer to Question 2: 
The way to create and insert a new element into the DOM is given below: To create and insert a new element into the DOM, `.createElement()` and `.appendChild()` play the main roles.

1. To create a new element, `document.createElement("tag name")` is used.
2. Then, we use `document.body.appendChild(new element)` to insert the newly created element into the DOM. 
# Here is an example: 
```JavaScript
const newElement = document.createElement("div"); /* New element is created, which is a div */ 

document.body.appendChild(newElement); /* The newly created div is inserted into the DOM as a child element of the body */
```


## Answer to Question 3: 
# Event Bubbling and the way it works: 
Event bubbling is a mechanism where, if an event (such as a click) occurs on any element, it is first triggered on that specific element and runs its event handler. Then it propagates upwards through its ancestor elements in the DOM hierarchy. 
# Here is a simple example: 
```HTML
<section>
    <div>
        <button>Click</button>
    </div>
</section>
``` 
If the button is clicked, the event bubbling will work like:
1. The event is triggered on the button, and its click handler runs.
2. Then the event bubbles up to the div, and its handler runs.
3. Finally, the event bubbles up to the sector, and its handler runs.


## Answer to Question 4: 
Event delegation is a method where, instead of adding listeners to many child elements, only a single event listener is added to a common parent element, and using event bubbling downwards, the parent catches events from its children elements. 

# Here are some reasons why event delegation is very useful:
1. Fewer listeners are used; consequently, less memory usage and better performance
2. If new elements are added to the DOM later, it still works on them without adding any more listeners.
3. Fewer codes are written, which makes the code more organized and manageable.