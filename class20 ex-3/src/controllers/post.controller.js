const postModel = require("../models/post.user")

module.exports.createPostViewController=(req,res)=>{
    res.render("create-post" )
}

module.exports.createPostController=async(req,res)=>{

    console.log(req.user.id);
    
    const {media,caption} = req.body
  const post = await postModel.create({
    media,
    caption,
    author:req.user.id
   })

   res.status(201).json({post,message:"post create succesfully"})
   
}
module.exports.feedViewController= async(req,res)=>{

  const posts = await postModel.find().populate({
      path: "author",
      strictPopulate: false // ✅ Disables the strict check
  });
  console.log(posts);
  
  res.render("feed",{posts})
}