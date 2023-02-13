//DOM - Document object modal
//It is used to target html elements using javascript

/*tagname
classname
id selector*/
 
// =>document.*

document.getElementsByTagName (h1)
HTMLCollection[H1]
document.getElementsByTagName (a)
HTMLCollection(a) [a,a.scroll,a#scroll]

document.getElementsByTagName (h1)[0]
<h1>im shiji</h1>
document.getElementsByTagName (h1)[0].innerText
im shiji
document.getElementsByTagName (h1)[0].innerText
Hello everyone
<h1>Hello everyone</h1>

document.getElementsByTagName (h1)[0].style.color = "red"
<a href = "# youtube" class = "scroll">Youtube</a>
document.getElementsByClassName("scroll")[]
HTMLAllCollection(5)[a.scroll,a.scroll,a.scroll,a.scroll,a.scroll]
document.getElementsByClassName(.scroll)[1].innerText="videos"
document.getElementsByClassName('scroll')[1].style.visibility = "hidden"