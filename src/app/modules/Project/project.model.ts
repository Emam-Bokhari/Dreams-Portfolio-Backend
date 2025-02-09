import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>({
    title: {
        type: String,
        trim: true,
        required: true,
    },
    thumbnail: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    client: {
        type: String,
        trim: true,
    },
    technologiesUsed: {
        type: [String],
        required: true,
    },
    challengesFaced: {
        type: String,
        trim: true,
    },
    solution: {
        type: String,
        trim: true,
    },
    keyFeatures: {
        type: [String],
        required: true,
    },
    liveLink: {
        type: String,
        trim: true,
        required: true,
    },
    frontendSourceCode: {
        type: String,
        trim: true,
        required: true,
    },
    backendSourceCode: {
        type: String,
        trim: true,
    },
    apiDocumentation: {
        type: String,
        trim: true,
    },
    projectGoals: {
        type: String,
        trim: true,
    },
    collaborationAndTeamWork: {
        type: String,
        trim: true,
    },
    userFeedback: {
        type: String,
        trim: true,
    },
    futureImprovements: {
        type: String,
        trim: true,
    },
    securityConsiderations: {
        type: String,
        trim: true,
    },
    versionControlAndDeployment: {
        type: String,
        trim: true,
    },
    projectTimeline: {
        type: String,
        trim: true,
    },
    caseStudy: {
        type: String,
        trim: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
},
    {
        versionKey: false,
        timestamps: true
    }
)

export const Project = model<TProject>("Project", projectSchema);