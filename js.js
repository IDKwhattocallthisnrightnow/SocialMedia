let TopHatDude15Post = document.getElementById("post");

async function refresh () {
    const posts = await getPosts();
    while (TopHatDude15Post.firstChild) {
        TopHatDude15Post.removeChild(TopHatDude15Post.firstChild);
    }
    for (let i =0; i < posts.length; i++)
    {
        let div = document.createElement("div");
        let msgP = document.createElement("p");
        let dtP = document.createElement("p");
        msgP.innerText = JSON.stringify(posts[i].msg)
        dtP.innerHTML = JSON.stringify(posts[i].dt)
        dtP.style.fontSize = "0.5em";
        div.appendChild(msgP);
        div.appendChild(dtP);
        TopHatDude15Post.appendChild(div);
        div.style.marginBottom="0.5em";
        div.style.border="2px solid";
        div.style.borderRadius="5px";
        div.classList.add("posts");
        
    }
};

function getPosts () {
    return fetch("accounts.json")
        .then(response => response.json())
        .then(json => a=json.TopHatDude15.posts);
}

function publishPost() {
    let newPost = document.getElementById("NewPost");

    if (newPost.value === ""){return;}

    var currentdate = new Date(); 
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    let div = document.createElement("div");
    let msgP = document.createElement("p");
    let dtP = document.createElement("p");
    msgP.innerText = '"' + newPost.value + '"';
    newPost.value = "";
    dtP.innerHTML = '"' + datetime + '"';
    dtP.style.fontSize = "0.5em";
    div.appendChild(msgP);
    div.appendChild(dtP);
    TopHatDude15Post.appendChild(div);
    div.style.marginBottom="0.5em";
    div.style.border="2px solid";
    div.style.borderRadius="5px";
    div.classList.add("posts"); 
}

refresh();