# **📌 3. Async Validation (e.g., Checking Emails in DB)**

Sometimes, you need **async validation**, such as checking if an email already exists in the database.

### **✅ Example: Async Validation in Express.js**

```javascript
const { z } = require("zod");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const userSchema = z.object({
  email: z
    .string()
    .email()
    .refine(async (email) => {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      return !existingUser;
    }, "Email already exists"),
});

app.post("/register", async (req, res) => {
  const result = await userSchema.safeParseAsync(req.body);
  if (!result.success) return res.status(400).json(result.error.format());

  res.send("User registered successfully!");
});
```

🔹 **Why Use Async Validation?**  
✅ Prevents duplicate emails  
✅ Ensures database integrity

---

# **🎯 Summary**

| Feature                         | Example                                  |
| ------------------------------- | ---------------------------------------- |
| **Parsing Env Variables**       | `z.object({...}).safeParse(process.env)` |
| **Zod with React Forms**        | `react-hook-form` + `zodResolver`        |
| **Zod with Next.js API Routes** | `safeParse(req.body)`                    |
| **Zod with Prisma**             | Validate data before inserting into DB   |
| **Async Validation**            | Check if email exists before saving      |

---
