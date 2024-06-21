import mongoose, { Model, Document } from "mongoose";
import { IUser } from "./user.model";
import { IComment } from "./comment.model";

export interface IPost {
    description: string;
    user: IUser;
    imageUrl?: string;
    likes?: string[];
    comments?: IComment[];
}

export interface IPostDocument extends IPost, Document {
    createdAt: Date;
    updatedAt: Date;
}

const postSchema = new mongoose.Schema<IPostDocument>({
    description: {
        type: String,
        required: true
    },
    user: {
        userId: {
            type: String,
            required: true
        },
        profilePhoto: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    imageUrl: {
        type: String,
        default: ""
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    likes: {
        type: [String]
    }
}, { timestamps: true });

// Use existing model if it exists, else create a new one
export const Post: Model<IPostDocument> = mongoose.models.Post || mongoose.model<IPostDocument>("Post", postSchema);
