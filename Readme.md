 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById() is used to select one element using its id. It always returns a single element.
getElementsByClassName() is used to select elements by class name. It returns a collection of elements (HTMLCollection), not just one element.
querySelector() selects the first element that matches a CSS selector. You can use id, class, tag name, or more complex selectors.
querySelectorAll() selects all elements that match a CSS selector. It returns a NodeList.

<!-- ----------------------------------------------------------------------------------------------------------------- -->

2. How do you create and insert a new element into the DOM?

First, create a new element using document.createElement().
for Example:
const newDiv = document.createElement("div");
Then
newDiv.innerText = "Hello World";
Then
document.body.appendChild(newDiv);

<!-- ----------------------------------------------------------------------------------------------------------------- -->

3. What is Event Bubbling? And how does it work?

Event bubbling means when an event happens on a child element, it also moves up to its parent elements.
For example, if you click a button inside a div:
First the button handles the click then the div handles it then the body then the document
The event moves from the inside element to outer elements. That process is called bubbling.

<!-- ----------------------------------------------------------------------------------------------------------------- -->

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation means adding one event listener to a parent element instead of adding event listeners to many child elements.
example.. instead of adding click events to many buttons, we add one click event to their parent container and detect which button was clicked.
It is useful because it reduces the number of event listeners, It works for dynamically created elements, it makes the code cleaner and more efficient...

<!-- ----------------------------------------------------------------------------------------------------------------- -->

5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault() stops the default behavior of an element. For example, stopping a form from submitting or stopping a link from opening.
stopPropagation() stops the event from bubbling to parent elements.

<!-- ----------------------------------------------------------------------------------------------------------------- -->