function postComment(idNameForm)
{
    var comment_form = document.querySelector('#comment-form');
    var name = comment_form['comment-name'].value;
    var email = comment_form['comment-email'].value;
    var msg = comment_form['comment-message'].value;
    var dateStr = getDate();
    makeComment(name, msg, dateStr, idNameForm);
    pushToDb(name, email, dateStr, msg, idNameForm);
    comment_form.reset();
}

function makeComment(name, msg, dateStr)
{
    var para = document.createElement("P");
    para.appendChild(document.createTextNode(msg));
    var date = document.createElement("DIV");
    date.className = "comment-date";
    date.appendChild(document.createTextNode(dateStr));
    var h = document.createElement("H6");
    h.appendChild(document.createTextNode(name));
    var comment_text = document.createElement("DIV");
    comment_text.className = "comment-text";

    comment_text.appendChild(h);
    comment_text.appendChild(date);
    comment_text.appendChild(para);

    var image = document.createElement("IMG");
    image.src = "img/author-thumbs/default.png"
    var node = document.createElement("LI");
    node.appendChild(image);
    node.appendChild(comment_text);
    document.getElementById("blog-comments").appendChild(node);

    // var list_len = $('.comments-list li').length;
    // console.log(list_len);

    document.querySelector('.comments h5').innerHTML = "Comments (" + $('.comments-list li').length + ")";

}

function pushToDb(name, email, date, comment, id)
{
    db.ref('comments').push({
        name: name,
        email: email,
        date: date,
        comment: comment,
        id: id,
    })
}

function fetchFromDb(idNameForm)
{
    db.ref('comments').once('value',   function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          //var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            //console.log(childKey);
            //console.log(childData);
            var name = childData['name'];
            var date = childData['date'];
            var comment = childData['comment'];
            var id = childData['id'];
            if(id==idNameForm) makeComment(name, comment, date);
        });
    });
}

function getDate(){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    var today = new Date();
    var dd    = String(today.getDate()).padStart(2, '0');
    var mm    = months[today.getMonth()];
    var yyyy  = today.getFullYear();

    today = dd + " " + mm + ", " + yyyy;
    return today;
}
