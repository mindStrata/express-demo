### **🔹 2.3 Zod with Prisma (Database Validation)**

If you're using **Prisma** as an ORM, Zod can validate data **before inserting it** into the database.

#### **✅ Install Prisma**

```bash
npm install @prisma/client
```

#### **✅ Example: Validate User Data Before Saving**

```javascript
const { PrismaClient } = require("@prisma/client");
const { z } = require("zod");

const prisma = new PrismaClient();

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

async function createUser(data) {
  const result = userSchema.safeParse(data);
  if (!result.success) throw new Error("Invalid user data");

  return await prisma.user.create({ data: result.data });
}

// Example usage
createUser({ email: "invalid-email", password: "123" }).catch((err) =>
  console.error("Error:", err.message)
);
```

🔹 **Why Use Zod with Prisma?**  
✅ Ensures data is valid before inserting  
✅ Prevents database errors  
✅ Type-safe data validation

---
