import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcryptjs'

const Account = new mongoose.Schema({
    id: String,
    pw: String,
    email: String,
    name: String,
    profilePic: Buffer,
    profilePicThumbnail: Buffer
})