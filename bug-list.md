# Bug List

> Make a list of the things that don't work as expected. Keep a list of things that you have fixed and try to document how you solved them.

1. Responsive design for phones and tablets
2. *SOLVED* The if statement displaying the picture on session stats page isn't working properly. (Solved by using an array and using Math.max() instead of comparing to each other variable)
3. *SOLVED* I wanted a function to load only on the index page. (Fixed it by using onload="function()" within the body tag on the page that i wanted it to load on.
4. *SOLVED* ßHad a problem with the deployment site not outputting the image with the most frequent appearing artis. I solved it with adding an if statement when getting the item from local storage, that either turned it to the value of local storage, or to 0 if the value was NaN.