# Event bubbling

When an event occurs in an element, it then bubbles/spreads to its parent element and then to its parent element and so on, untill it reaches the root of the DOM tree.

```html
<body>
  <div class='myDiv'>
    <span>
      <button class='myBtn'>Click Me!</button>
    </span>
  </div>
</body>
```

In the above example, an event occurs on the button element.  
According to event bubbling it will then spread out to the **span**  -> **div** -> **body**.

## How to leverage this?

We can handle an event in the parent element rather than the actual element.  

eg. 
```javascript
const div = document.querySelector('.myDiv');

div.addEventListener('click', (e)=>{
    console.log(e.target.className);
});
```

`O/P: myBtn`

Hence we can manipulate the btn element by using the parent element.

## Where it is useful

Let's say there are many btns under the same div in the above example.  
It would be a tedious process to add an eventListener to each and every button.

Here's where we can use **Event Bubbling** to set up an eventListener at the parent Div element and manipulate the button that is being clicked on ;)

## Resources Used

[FreeCodeCamp Article Link](https://www.freecodecamp.org/news/event-bubbling-in-javascript/)