### **🔹 2.2 Zod with Next.js (API Validation)**

Next.js API routes can **validate incoming requests** using Zod.

#### **✅ Example: Validating API Requests**

Create an API route `pages/api/register.js`:

```javascript
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const result = schema.safeParse(req.body);
  if (!result.success) return res.status(400).json(result.error.format());

  res.json({ message: "User registered successfully!" });
}
```

---
