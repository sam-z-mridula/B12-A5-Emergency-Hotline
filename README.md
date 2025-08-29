# Questions:
1. What is the difference between **getElementById**, **getElementsByClassName**, and **querySelector** / **querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


# Answers:

## Answer to Question 1: 
The difference between **getElementById**, **getElementsByClassName**, and **querySelector** /**querySelectorAll** is given below:

1. `getElementById`: **getElementById** is used to find an element by its unique id.
2. `getElementsByClassName`: It is used to find elements by a common class name. It gives an array-like HTML collection.
3. `querySelector`: **querySelector** is used to get the first element that matches the given CSS selector.
4. `querySelectorAll`: This one is used to get all the elements that match the given CSS selector.


## Answer to Question 2: 
To create and insert a new element into the DOM, `.createElement()` and `.appendChild()` play the main roles.

1. To create a new element, `document.createElement()` is used.
2. Then, we use `document.body.appendChild()` to insert the newly created element into the DOM. 

### Here is an example: 
```JavaScript
const newElement = document.createElement("div"); /* New element is created, which is a div */ 

document.body.appendChild(newElement); /* The newly created div is inserted into the DOM as a child element of the body */
```


## Answer to Question 3: 
### Event Bubbling and the way it works: 
Event bubbling is a mechanism where, if an event (such as a click) occurs on any element, it is first triggered on that specific element and runs its event handler; then it propagates upwards through its ancestor elements in the DOM hierarchy. 
### Here is a simple example: 
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
Event delegation is a method where, instead of adding listeners to many child elements, only a single event listener is added to a common parent element, and using event bubbling downwards the parent catches events from its children elements. 

### Here are some reasons why event delegation is very useful:
1. Fewer listeners are used; hence, less memory usage and better performance are possible.
2. If new elements are added to the DOM later, it still works on them without adding any more listeners.
3. Fewer codes are needed to write, which makes the code more organized and manageable.

## Answer to Question 5:
The difference between **preventDefault() and stopPropagation()**:
1. `preventDefault()` is used to stop the default action for an event (for example, it prevents automatic reloading the page after clicking the button(submit) in a form).
2. On the other hand, `stopPropagation()` is used to stop the further propagation of the Event Bubbling (bubbling up or capturing down).