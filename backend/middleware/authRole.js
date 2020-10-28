function authRole(role){
    return (req,res,next) =>{
    if (req.user.role !== role) {
        res.status(401)
        return res.send ("Non autorisé")
}
next()
}}

module.exports = {
    authRole
}