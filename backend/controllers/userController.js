import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
export const Register= async (req,res)=>{
    try{
        const {name , username, email, password} =req.body;
        //basic validation 
        if(!name||!username||!email||!password){
            return res.status(401).json({
                message:"All fields are required.",
                success: false
            })
        }
        const user=await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"email already exist.",
                success:false
            })
        }
        const usname=await User.findOne({username});
        if(usname){
            return res.status(401).json({
                message:"Username already exist.",
                success:false
            })
        }
        
        const hashedPassword = await bcryptjs.hash(password, 16);
        await User.create({
            name,
            username,
            email,
            password:hashedPassword
        });
        return res.status(201).json({
            message:"Account created Successfully,",
            success:true
        })
    }catch(error){
        console.log(error)
    }
}


export const Login = async (req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email||!password){
            return res.status(401).json({
                message:"All fields are required.",
                success: false
            })
        };

        const user=await User.findOne({email});
        if(!user){
            return res.status(401).json({
                message:"username or password is incorrect",
                succes: false
            })
        }

        const isMatch = await bcryptjs.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"username or password is incorrect",
                succes: false
            })
        }
        const tokenData={
            userId:user._id,
        }
        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET,{expiresIn:"1d"});
        return res.status(201).cookie("token",token,{expiresIn:"1d",httpOnly:true}).json({
            message:`Welcome Back ${user.name}`,
            success: true
        });

    } catch (error) {
        
    }
}

export const logout= async (req,res)=>{
    return res.cookie("token", "", { expiresIn: new Date(Date.now()) }).json({
        message: "user logged out successfully.",
        success: true
    })
}