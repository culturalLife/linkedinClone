
"use server";
import { Post } from "@/models/post.model";
import { IUser } from "@/models/user.model";
import { currentUser } from "@clerk/nextjs/server";

import { v2 as cloudinary } from "cloudinary";
import connectDB from "./db";
import { revalidatePath } from "next/cache";
import { Comment } from "@/models/comment.model";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, // "derofwyf3",
  api_key: process.env.API_KEY, //"741193491222667",
  api_secret: process.env.API_SECRET, // "Af7NKoxcOnMtII2E1vZNohcTlrU" // Click 'View Credentials' below to copy your API secret
});

export const createPostAction = async (inputText: string,selectedFile: string) => {
  await connectDB();
  const user = await currentUser(); //making sure the current user is logged in
  if (!user) throw new Error("User not authenticated");
  if (!user) throw new Error("Input field is required");

  const image = selectedFile; //keeping the data URL into this constant. the image is being received after the image is processed into a string file by the FileReader function that has its function written in utils.ts and the function being used in postDialog.tsx as fileChangeHandler

  const userDatabase: IUser = {
    firstName: user.firstName || "Himanshu",
    lastName: user.lastName || "Shaw",
    userId: user.id,
    profilePhoto: user.imageUrl,
  };
let uploadResponse
  try {
    // the user might only create a post 1. only with image 2. only with text
    if (image) {
      //1. only with image
      // Upload an image
      uploadResponse = await cloudinary.uploader.upload(image)
      console.log(uploadResponse);
      await Post.create({  
        description: inputText,
        user: userDatabase,
        imageUrl: uploadResponse?.secure_url //we will upload the given image by the user(intended to be uploaded) in cloudinary
      });
    } else {
      await Post.create({
        description: inputText,
        user: userDatabase,
      });
    }
    revalidatePath("/"); //caching
  } catch (error: any) {
    console.error("Error occurred while creating post:", error.message);
    throw new Error(`Error creating post: ${error.message}`);
  }
};

// get all post using server actions
export const getAllPosts = async () => {
  try {
      await connectDB();
      const posts = await Post.find().sort({ createdAt: -1 }).populate({ path: 'comments', options: { sort: { createdAt: -1 } } });
      // console.log(posts);
      if(!posts) return [];  
      return JSON.parse(JSON.stringify(posts)); 
  } catch (error) {
      console.log(error);
  }
}


//delete post by id
export const deletePostAction = async (postId: string) => {
  await connectDB();
  const user = await currentUser();
  if (!user) throw new Error('User not authenticated.');
  const post = await Post.findById(postId);
  if (!post) throw new Error('Post not found.');

  // only delete posts created by us.
  if (post.user.userId !== user.id) {
      throw new Error('You are not the owner of this Post.');
  }
  try {
      await Post.deleteOne({ _id: postId });
      revalidatePath("/");
  } catch (error: any) {
      throw new Error('An error occurred', error);
  }
}

export const createCommentAction = async (postId: string, formData: FormData) => {
  try {
      const user = await currentUser();//currentUser is used in server side to get the user details. useUser in client side. provided by clerkJs
      if (!user) throw new Error("User not authenticated");
      const inputText = formData.get('inputText') as string;
      if (!inputText) throw new Error("Field is required");
      if (!postId) throw new Error("Post id required");

      const userDatabase: IUser = {
          firstName: user.firstName || "Himanshu",
          lastName: user.lastName || "Shaw",
          userId: user.id,
          profilePhoto: user.imageUrl
      }
      const post = await Post.findById({ _id: postId });
      if (!post) throw new Error('Post not found');

      const comment= await Comment.create({
        textMessage: inputText,
        user:userDatabase,
      });

      // post.comments?.push(comment._id);
      
      post.comments?.push(comment._id as any);
      await post.save();

      revalidatePath("/");
  } catch (error) {
      throw new Error('An error occurred')
  }
}