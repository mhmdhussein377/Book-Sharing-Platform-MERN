const User = require("../Models/User")

const FollowUser = async(req, res) => {
    if(req.body.userId !== req.params.id) {
        const currentUser = await User.findById(req.body.userId)

        if(!currentUser.following.includes(req.params.id)) {
            await currentUser.updateOne({
                $push: {
                    following: req.params.id
                }
            })
            res.status(200).json("User has been followed")
        }else {
            res.status(403).json("You alrady following the user")
        }
    }else {
        res.status(403).json("You can't follow yourself")
    }
}

module.exports = {FollowUser}