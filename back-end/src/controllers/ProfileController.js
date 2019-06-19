const Profile = require("../models/Profile");

module.exports = {

  async store(req, res) {
    
    console.log("req.body: ", req.body);
    console.log("req.files array: ", req.files);
    console.log("quantidade de imagens: " , req.files.length);

    if(req.files.length > 3){
      console.log("ola")
      return res.json({message: "The maximum number of files is 3."})
    }else{
      const { name, name_user, publication, followers, following } = req.body;
  
      const profile = await Profile.create({
        name,
        name_user,
        publication,
        followers,
        following,
        images: req.files
      });
  
      return res.json(profile);
    }
  }
};