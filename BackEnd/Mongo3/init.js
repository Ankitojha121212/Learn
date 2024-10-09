const mongoose = require('mongoose');
const Chat = require("./model/chat");
const {Schema} = mongoose;

async function main(){
    mongoose.connect('mongodb://127.0.0.1/whatsapp');
}

main()
    .then((res)=>{
        console.log("MongoDB Server started");
    })
    .catch((err)=>{
        console.log("Server is unSuccessful to Start");
    });


    // Inserting Multiple data at a time

let allChats = [
    { from: "Neha", to: "Ankit", message: "Can you review the report before the meeting?", created_at: "2024-10-09T12:00:00Z" },
    { from: "Raj", to: "Priya", message: "The client presentation is ready, please check it.", created_at: "2024-10-09T12:01:00Z" },
    { from: "Amit", to: "Sana", message: "We need the updated figures for the sales team.", created_at: "2024-10-09T12:02:00Z" },
    { from: "Ravi", to: "Deepak", message: "Please approve the leave request for next week.", created_at: "2024-10-09T12:03:00Z" },
    { from: "Isha", to: "Rohit", message: "Let's discuss the project details in tomorrow's call.", created_at: "2024-10-09T12:04:00Z" },
    { from: "Arjun", to: "Meera", message: "The deadline for the report is approaching, need any help?", created_at: "2024-10-09T12:05:00Z" },
    { from: "Karan", to: "Maya", message: "Can you share the final design documents with the team?", created_at: "2024-10-09T12:06:00Z" },
    { from: "Sara", to: "Nikhil", message: "We need to reschedule the client meeting to next Tuesday.", created_at: "2024-10-09T12:07:00Z" },
    { from: "Vikram", to: "Pooja", message: "Please update the task status in the project management tool.", created_at: "2024-10-09T12:08:00Z" },
    { from: "Manish", to: "Anjali", message: "Can you assist with the financial audit this afternoon?", created_at: "2024-10-09T12:09:00Z" },
    { from: "Shreya", to: "Gaurav", message: "The product launch date has been finalized, let's inform the team.", created_at: "2024-10-09T12:10:00Z" },
    { from: "Ritika", to: "Sahil", message: "Don't forget to submit the monthly report by EOD.", created_at: "2024-10-09T12:11:00Z" },
    { from: "Rohan", to: "Simran", message: "Could you prepare the slides for the upcoming board meeting?", created_at: "2024-10-09T12:12:00Z" },
    { from: "Ananya", to: "Aditya", message: "Please provide feedback on the marketing plan by tomorrow.", created_at: "2024-10-09T12:13:00Z" },
    { from: "Sameer", to: "Nisha", message: "The budget proposal needs revisions, let's discuss it.", created_at: "2024-10-09T12:14:00Z" },
    { from: "Priyanka", to: "Vivek", message: "Can you coordinate with the HR team for the new hire orientation?", created_at: "2024-10-09T12:15:00Z" },
    { from: "Harsh", to: "Ayesha", message: "The server is down, please check with IT for a quick resolution.", created_at: "2024-10-09T12:16:00Z" },
    { from: "Alok", to: "Divya", message: "We need to finalize the vendor agreement by end of this week.", created_at: "2024-10-09T12:17:00Z" },
    { from: "Parul", to: "Kunal", message: "Let me know if you need any assistance with the code review.", created_at: "2024-10-09T12:18:00Z" },
    { from: "Pankaj", to: "Swati", message: "The new policy documents are ready, please review them.", created_at: "2024-10-09T12:19:00Z" },
    { from: "Siddharth", to: "Tina", message: "Can you organize the team lunch for next Friday?", created_at: "2024-10-09T12:20:00Z" },
    { from: "Navin", to: "Rekha", message: "The website redesign needs final approval before launch.", created_at: "2024-10-09T12:21:00Z" },
    { from: "Mehul", to: "Anu", message: "Let's prepare the client feedback report for the review meeting.", created_at: "2024-10-09T12:22:00Z" },
    { from: "Rehan", to: "Akriti", message: "Please coordinate with the team to finalize the product features.", created_at: "2024-10-09T12:23:00Z" },
    { from: "Kavita", to: "Yash", message: "The marketing strategy needs to be finalized by tomorrow.", created_at: "2024-10-09T12:24:00Z" },
    { from: "Mohit", to: "Saloni", message: "We need the data from the last quarter to prepare the report.", created_at: "2024-10-09T12:25:00Z" },
    { from: "Pooja", to: "Shivam", message: "Can you present the project update in today's meeting?", created_at: "2024-10-09T12:26:00Z" },
    { from: "Ajay", to: "Sneha", message: "The design mockups are ready, please review them.", created_at: "2024-10-09T12:27:00Z" },
    { from: "Rashmi", to: "Abhinav", message: "Can you follow up with the client about the contract renewal?", created_at: "2024-10-09T12:28:00Z" },
    { from: "Gaurav", to: "Sheetal", message: "We need to organize the team outing next month.", created_at: "2024-10-09T12:29:00Z" },
    { from: "Ritika", to: "Vikas", message: "Please update the project timeline with the new milestones.", created_at: "2024-10-09T12:30:00Z" }
];

Chat.insertMany(allChats);