const posts = [
    { title:'This is the title for Post 1', body: 'This is the body for Post 1'},
    { title:'This is the title for Post 2', body:'This is the body for Post 2' }
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((posts, index) => {
            output += `<li>${posts.title}</li>`
        });
        document.body.innerHTML = output
    }, 1000)
}



function createPosts(post, callback){
    setTimeout(()=>{
        posts.push(post)
        callback();
    }, 2000)
}





createPosts({title: 'Post 3', body: 'Body is pushed'}, getPosts)