# **📌 1. Parsing Environment Variables with Zod**

Zod can **validate environment variables** in a **type-safe** way. This is useful to ensure required values are present before your app starts.

### **✅ Step 1: Install `dotenv` and `zod`**

```bash
npm install dotenv zod
```

### **✅ Step 2: Create `.env` File**

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=mysql://user:pass@localhost:3306/mydb
```

### **✅ Step 3: Create `env.js` (or `env.ts` in TypeScript)**

```javascript
require("dotenv").config();
const { z } = require("zod");

const envSchema = z.object({
  PORT: z.string().default("3000"),
  NODE_ENV: z.enum(["development", "production", "test"]),
  DATABASE_URL: z.string().url(),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:", parsedEnv.error.format());
  process.exit(1); // Stop app if env vars are invalid
}

const env = parsedEnv.data; // ✅ Safe environment variables
module.exports = env;
```

### **✅ Step 4: Use in Your App**

```javascript
const env = require("./env");
console.log(`App running on port ${env.PORT} in ${env.NODE_ENV} mode`);
```

🔹 **Why Use Zod for Env Variables?**  
✅ Ensures required values are set  
✅ Catches incorrect formats early  
✅ Provides default values

---
