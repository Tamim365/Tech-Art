var para = document.createElement("P");
para.appendChild(document.createTextNode("This is my comment"));
var date = document.createElement("DIV");
date.className = "comment-date";
date.appendChild(document.createTextNode("November 1, 2020"));
var h = document.createElement("H6");
h.appendChild(document.createTextNode("Tamim"));
var comment_text = document.createElement("DIV");
comment_text.className = "comment-text";

// console.log(date);
// console.log(h);
// console.log(comment_text);

comment_text.appendChild(h);
comment_text.appendChild(date);
comment_text.appendChild(para);

var image = document.createElement("IMG");
image.src = "img/author-thumbs/default.png"
var node = document.createElement("LI");
node.appendChild(image);
node.appendChild(comment_text);
document.getElementById("blog-comments").appendChild(node);

