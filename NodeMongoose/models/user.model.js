
// // const db = require('../db.js')

// // const dbSchema = new db.Schema({

// //     email: {
// //         type: String,

// //     },
// //     password: {
// //         type: String,

// //         minlength: 3,
// //         maxlength: 30,
// //     },
// //     name: {
// //         type: String,

// //         minlength: 3,
// //         maxlength: 30,
// //     },
// //     age: {
// //         type: Number,
// //         min: 18,
// //         max: 100
// //     },
// //     gender: {
// //         type: String,

// //     },
// //     isActive: {
// //         type: Boolean,
// //     },
// //     userType: {
// //         type: String,
// //     },

// // })

// // module.exports = db.model("users", dbSchema)

const db = require("../db");
const schema = new db.Schema(
  {
    email: {
      desc: "The user's email address.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true,
    },
    password: {
      desc: "user password",
      trim: true,
      type: String,
      required: true,
      select: true,
    },
    name: {
      desc: "The user's name.",
      trim: true,
      type: String,
      required: true,
    },
    age: {
      desc: "The users's age.",
      type: Number,
    },
    gender: {
      desc: "user gender.",
      trim: true,
      type: String,
      enum: ["Male", "Female", "Others"],
      default: "Others",
      required: true,
    },
    isActive: {
      desc: "is Active.",
      type: Boolean,
      default: true,
      required: true,
    },
    userType: {
      desc: "user roles.",
      trim: true,
      type: String,
      enum: ["Admin", "User"],
      default: "Admin",
      required: true,
    },
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);
module.exports = db.model("users", schema);
