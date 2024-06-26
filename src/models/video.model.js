import mongoose from "mongoose";

const videoschema = new mongoose.Schema(
    {
        videoFile: {
            type: String,   //cloudinary url
            required: true
        },
        thumbnail: {
            type: String,   //cloudinary url
            required: true
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true
        },
        duration: {
            type: String,
            requierd: true
        },
        viwes: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }

    },
    {
        timestamps: true
    }
);

export const Video = mongoose.model('Video', videoschema);