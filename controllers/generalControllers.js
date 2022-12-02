
module.exports.home = (req,res) =>{
    return res.render('general/home')
}

module.exports.create_join = async(req,res)=>{
    return res.render('general/create-join')
}

module.exports.arena = async (req,res) =>{
    return res.render('general/arena')
}