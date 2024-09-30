const Post = {
    username : "Ankit____Ojha",
    content : "Gym Code",
    likes : 250,
    reposts : 70,
    tags : ["@ankitOJha","enhancedtypo","honda londa"]
};

console.log(Post.content);
console.log(Post["content"]);


console.log(Post);

console.log(Post.likes);

console.log(typeof Post.likes);

let tag = Post.tags;
console.log(tag);







let prop = "likes";

console.log(Post.prop);// undefined

console.log(Post[prop]); // 250