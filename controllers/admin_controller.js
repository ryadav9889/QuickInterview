const Admin = require("../Modal/adminLoginModal")
const CandidateInterviewer = require("../Modal/CandidateInterviewerModal")
const CreateTest = require("../Modal/testModal")
const jwt = require("jsonwebtoken")

module.exports.signIn = async function(req,res){
    try {
        let admin = await Admin.findOne({email:req.body.email});
        console.log(req.body.email);
        if (!admin || admin.password != req.body.password) {
            return res.status(422).json({
              message: "Invalid username or password",
            });
          }
          return res.status(200).json({
            status: 1,
            message: "loged in successfully",
            data: {
              token: jwt.sign(admin.toJSON(), 'secret', { expiresIn: '2000000' }),
              admin:admin
            }
          })
        
    } catch (error) {
           console.log(error)
        return res.status(401).json({
            message: 'Internal Server Error'
          })
    }

}

module.exports.signUp = async function(req,res){
  try {
         console.log(req.body.email )
         let admin = await Admin.findOne({email:req.body.email});
        if (admin != undefined){
          return res.send({
            status: 0,
            message: "Admin is Already Register"
         })
        }
        if (req.body.email == undefined || req.body.email == "" || req.body.password == undefined || req.body.password == ""){
             return res.send({
                status: 0,
                message: "Email and Password is required"
             })
      } else {
        admin = await Admin.create({
          name:req.body.name,
          email: req.body.email,
          password: req.body.password
      })

      return res.status(200).json({
          status: 1,
          message: 'You are registered Successfully!!',
          data: {
            Admin: admin
          }
        });
      }
  } catch {
    console.log(error);
    return res.status(401).json({
      message: 'Internal Server Error',
    });
   }
}


module.exports.addCandidateOrInterviewer = async function(req,res){
  try {
    let candidateInterviewer = await CandidateInterviewer.findOne({email:req.body.email});
    if (candidateInterviewer != undefined){
      return res.send({
        status: 0,
        message: "candidate Or Interviewer is Already Register"
     })
    }
   if (req.body.email == "" || req.body.email == undefined){
    return res.send({
      status: 0,
      message: "Email is required"
    })
   } else if (req.body.password == "" || req.body.password == undefined) {
    return res.send({
      status: 0,
      message: "Password is required"
    })
   } else {
    candidateInterviewer = await CandidateInterviewer.create({
      name:req.body.name,
      email: req.body.email,
      password: req.body.password,
      userType: req.body.userType,
      category: req.body.category,
      shortList: 0
  })

  return res.status(200).json({
    status: 1,
    message: 'Candidate Or Interviewer are registered Successfully!!',
    data: candidateInterviewer
    
  });

   } 
 } catch(error) {
    console.log(error);
    return res.status(401).json({
      message: 'Internal Server Error',
    });
  }
}

module.exports.createTest = async function(req,res){

    try{
       test = await CreateTest.create({
        companyName: req.body.companyName,
        category: req.body.category,
        question: req.body.question
       }) 
    return res.status(200).json({
      status: 1,
      message: 'Test created Successfully!!',
      data: test
      
    });
       
    } catch(error){
      console.log(error);
     return res.status(401).json({
      message: 'Internal Server Error',
    });
    }



}