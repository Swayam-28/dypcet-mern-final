import mongoose from "mongoose";
import Department from "./src/models/Department.js"; // ensure model path is correct

// Connect to MongoDB
await mongoose.connect("mongodb://127.0.0.1:27017/dypcet_clone");
console.log("✅ Connected to MongoDB");

const departments = [
  { name: "Chemical Engineering", slug: "chemical-engineering", description: "B.Tech — Chemical Engineering" },
  { name: "Civil Engineering", slug: "civil-engineering", description: "B.Tech — Civil Engineering" },
  { name: "Computer Science & Engineering", slug: "cse", description: "B.Tech — Computer Science & Engineering" },
  { name: "CSE (Artificial Intelligence & Machine Learning)", slug: "cse-aiml", description: "B.Tech — CSE (AI & ML)" },
  { name: "CSE (Data Science)", slug: "cse-data-science", description: "B.Tech — CSE (Data Science)" },
  { name: "Electronics & Telecommunication Engineering", slug: "entc", description: "B.Tech — E&TC" },
  { name: "Mechanical Engineering", slug: "mechanical-engineering", description: "B.Tech — Mechanical Engineering" }
];

try {
  await Department.deleteMany({});
  console.log("🗑️ Cleared existing departments");

  await Department.insertMany(departments);
  console.log("✅ Departments added successfully!");
} catch (err) {
  console.log("❌ Error:", err);
}

await mongoose.connection.close();
console.log("🔒 Database Connection Closed.");
