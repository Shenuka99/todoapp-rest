import  {Document, Model, Schema, model} from 'mongoose'
import bcrypt from 'bcrypt'
import config from 'config'

export interface IUser {
    firstName: string,
    lastName: string,
    email: string,
    password: string
    createdAt: Date,
    updatedAt: Date,
   
}

interface IUserMethods {
    comparesPassword(enteredPassword: string): Promise<Boolean>
  }

  export type ExtendedIUser = Model<IUser, {}, IUserMethods>;

const userSchema = new Schema<IUser, ExtendedIUser, IUserMethods>({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true}

},{
    timestamps: true
})

userSchema.pre("save", async function(next){

    if (!this.isModified('password')){
        return next()
    }

    const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

userSchema.method("comparePassword", async function (enteredPassword: string): Promise<boolean>{
    let user = this as IUser
    return await bcrypt.compare(enteredPassword, user.password).catch(e => false)
})



export const UserModel = model<IUser, ExtendedIUser>("User", userSchema)

