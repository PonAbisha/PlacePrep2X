# 🎉 MongoDB Migration Complete!

Your PlacePrep project has been successfully migrated from PostgreSQL to MongoDB! Here's how to get started:

---

## **📋 Installation & Setup**

### **Step 1: Install MongoDB Community Edition**

#### **On Windows:**
1. Download from: https://www.mongodb.com/try/download/community
2. Run the installer and follow the setup wizard
3. MongoDB will be installed as a Windows service (auto-start by default)
4. Verify installation:
   ```powershell
   mongod --version
   ```

#### **OR Use MongoDB Atlas (Cloud - No Installation Needed):**
1. Go to: https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster (free tier available)
4. Get connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/placement_coach`)
5. Update `.env` with your connection string:
   ```
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/placement_coach
   ```

---

### **Step 2: Install Node Dependencies**

```powershell
cd d:\PlacePrep\apc_backend
npm install
```

This will install:
- `mongoose` (MongoDB driver for Node.js)
- And all other dependencies

---

### **Step 3: Start MongoDB (If Using Local Installation)**

**Option A: MongoDB Service (Already Running)**
```powershell
# Check if MongoDB service is running
Get-Service MongoDB
```

**Option B: Manual Start**
```powershell
# Start MongoDB server (default: localhost:27017)
mongod
```

---

### **Step 4: Start Your Server**

```powershell
cd d:\PlacePrep\apc_backend

# Development mode with auto-reload
npm run dev

# Or production mode
npm start
```

You should see:
```
✅ MongoDB Connected: localhost
╔════════════════════════════════════════════╗
║       AI Placement Coach Backend          ║
╠════════════════════════════════════════════╣
║ URL: http://localhost:5000
║ ENV: development
╚════════════════════════════════════════════╝
```

---

### **Step 5: Start Your Client**

```powershell
cd d:\PlacePrep\apc_backend\client
npm run dev
```

Client will be available at: `http://localhost:3000`

---

## **🧪 Test Registration**

1. Open http://localhost:3000 in your browser
2. Click **"Register"** tab
3. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Password: password123
   - College: Your College
   - Branch: CSE
   - Year: 4
4. Click **"Register"**
5. You should be redirected to the dashboard ✅

---

## **📊 What Changed**

### **Before (PostgreSQL):**
```javascript
// SQL Queries
const { rows } = await query("SELECT * FROM users WHERE email = $1", [email]);
```

### **After (MongoDB):**
```javascript
// Mongoose Models
const user = await User.findOne({ email: normalizedEmail });
```

---

## **🗂️ Updated Files**

### **New Files Created:**
- `server/config/mongodb.js` - MongoDB connection setup
- `server/models/RefreshToken.js` - Refresh token schema

### **Updated Files:**
- `package.json` - Replaced `pg` with `mongoose`
- `server/.env` - Changed DB config to MongoDB
- `server/index.js` - Added MongoDB connection
- `server/models/User.js` - Converted to Mongoose schema
- `server/models/DSA.js` - Converted to Mongoose schema
- `server/models/Quiz.js` - Converted to Mongoose schema
- `server/models/Interview.js` - Converted to Mongoose schema
- `server/models/Resume.js` - Converted to Mongoose schema
- `server/controllers/authController.js` - Updated for MongoDB
- `server/middleware/errorHandler.js` - Updated for MongoDB errors

---

## **⚠️ Important Notes**

### **Removed Database Schema File:**
The `server/config/schema.sql` file is no longer needed. MongoDB automatically handles data structure through Mongoose schemas.

### **JWT Secret Warning:**
Update these values in `.env` before production:
```env
JWT_SECRET=generate_a_secure_random_string_here
JWT_REFRESH_SECRET=generate_another_secure_random_string_here
```

### **MongoDB Atlas Setup (If Using Cloud):**
If you migrate to MongoDB Atlas later:
1. Create a cluster
2. Create a database user
3. Get connection string from "Connect" button
4. Update `MONGODB_URL` in `.env`

---

## **🚀 Next Steps**

### **Migrate Other Controllers** (Optional)
The remaining controllers (DSA, Quiz, Interview, etc.) still reference the old PostgreSQL database functions. They need updating for production use. Here's the pattern:

```javascript
// OLD (PostgreSQL)
const { rows } = await query("SELECT * FROM dsa_progress WHERE user_id = $1", [userId]);

// NEW (MongoDB)
const progress = await DSAProgress.find({ user_id: userId });
```

---

## **🆘 Troubleshooting**

### **Error: "MongoDB is not running"**
```powershell
# Start MongoDB service
Start-Service MongoDB

# Or start mongod manually
mongod
```

### **Error: "Cannot connect to localhost:27017"**
1. Make sure MongoDB is running
2. Check MongoDB is on port 27017 (default)
3. Try MongoDB Atlas connection if local doesn't work

### **Error: "ValidationError: email is required"**
The registration request is missing required fields. Check your frontend form is sending all fields.

### **Error: "E11000 duplicate key error"**
Someone already registered with that email. Try a different email address.

---

## **📚 Useful Commands**

### **MongoDB Commands (mongosh):**
```powershell
# Connect to MongoDB
mongosh

# In mongosh shell:
use placement_coach              # Switch to database
db.users.find()                  # View all users
db.users.deleteMany({})          # Clear all users (development only!)
db.users.find({email: "..."})    # Find specific user
```

### **npm Commands:**
```powershell
npm run dev      # Start server with hot-reload
npm start        # Start server normally
npm install      # Install dependencies
```

---

## **✅ Checklist Before Production**

- [ ] MongoDB is running (local or Atlas)
- [ ] `.env` file has correct `MONGODB_URL`
- [ ] `JWT_SECRET` and `JWT_REFRESH_SECRET` are strong
- [ ] `NODE_ENV=production` in deployment
- [ ] All controllers updated (if needed)
- [ ] Tested registration and login
- [ ] Tested with actual MongoDB data

---

## **📞 Support**

If you encounter issues:
1. Check MongoDB is running: `mongod --version`
2. Check connection in browser console (F12)
3. Check server logs in terminal
4. Verify `.env` file has correct `MONGODB_URL`

---

Happy coding! 🚀
