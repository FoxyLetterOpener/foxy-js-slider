# foxy-js-slider
## purpose
the foxy-js-slider provides code that does a simple thing, it makes a slider slideable. It is intended to be used to allow click and drag on desktop while allowing native touch scrolling to be used on mobile devices, and native mousewheel scrolling to be preserved on desktop. This allows the user to take their pick of their preferred scroll method.
## Deployment
- for new versions, tag and push (must do this seperate from push, since vs code doesn't push tags automatically)
```
git tag v1.0.0
git push origin v1.0.0
```
access via jsdeliver
ex: https://cdn.jsdelivr.net/gh/FoxyLetterOpener/foxy-js-slider@v1.0.0/dist/slider.min.js
just replace the version number
## Slider Functionality
This slider has the following properties
### Scroll via button
- next and previous buttons that move one item at a time left and right
    - These movements respect a padding value that makes sure they stop with the right amount of padding between the item and the edge of the screen. I have it set with a variable, and call it from inside the slider to ensure the value is up to date with the variable being used by the slider.
### Scroll via click and drag
### Scroll via wheel
### Scroll via native touch action on mobile
## Slider Appearance
## Instructions
### HTML Setup
