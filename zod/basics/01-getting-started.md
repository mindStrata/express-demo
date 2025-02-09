### 🚀 **Zod Tutorial for Beginners**

Zod is a **TypeScript-first schema validation library** that helps validate and parse data. It’s widely used in **Express.js, APIs, and TypeScript projects**.

---

## **📌 1. Installation**

First, install **Zod** using npm or yarn:

```bash
npm install zod
# or
yarn add zod
```

---

## **📌 2. Basic Usage**

Zod allows you to define schemas for your data and validate them easily.

### **✅ Creating a Simple Schema**

```javascript
const { z } = require("zod");

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const data = { name: "John", age: 25 };

// Validate
const result = userSchema.safeParse(data);
console.log(result);
```

**Output:**

```json
{
  "success": true,
  "data": { "name": "John", "age": 25 }
}
```

✅ **`safeParse(data)`** returns `{ success: true, data: parsedData }` if valid.  
❌ If validation fails, it returns `{ success: false, error: {...} }`.

---

## **📌 3. Handling Errors**

If the data is invalid, Zod provides a **detailed error message**.

```javascript
const invalidData = { name: "John", age: "twenty-five" };

const result = userSchema.safeParse(invalidData);
console.log(result);
```

**Output (Error Example):**

```json
{
  "success": false,
  "error": {
    "issues": [
      {
        "message": "Expected number, received string",
        "path": ["age"]
      }
    ]
  }
}
```

---

## **📌 4. Adding Validation Rules**

You can add constraints like **min, max, email, regex, etc.**.

```javascript
const userSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  age: z.number().min(18, "Must be 18 or older"),
  email: z.string().email("Invalid email address"),
});

const result = userSchema.safeParse({
  name: "Jo",
  age: 16,
  email: "invalid-email",
});
console.log(result.error.format()); // Shows formatted errors
```

---

## **📌 5. Optional & Default Values**

### **🔹 Making a Field Optional**

```javascript
const userSchema = z.object({
  name: z.string(),
  age: z.number().optional(), // Age is optional
});
```

### **🔹 Providing a Default Value**

```javascript
const userSchema = z.object({
  name: z.string(),
  role: z.string().default("User"), // Default role is "User"
});

console.log(userSchema.parse({ name: "Alice" }));
// Output: { name: "Alice", role: "User" }
```

---

## **📌 6. Working with Arrays & Nested Objects**

### **🔹 Array Validation**

```javascript
const hobbiesSchema = z.array(z.string());

console.log(hobbiesSchema.parse(["Reading", "Gaming"])); // ✅ Valid
console.log(hobbiesSchema.safeParse(["Reading", 42])); // ❌ Invalid (number inside)
```

### **🔹 Nested Objects**

```javascript
const userSchema = z.object({
  name: z.string(),
  address: z.object({
    city: z.string(),
    zip: z.string().length(5, "ZIP code must be 5 characters"),
  }),
});

const result = userSchema.safeParse({
  name: "Alice",
  address: { city: "NYC", zip: "1234" },
});

console.log(result.error.format()); // ❌ ZIP code must be 5 characters
```

---

## **📌 7. Using Zod in Express.js**

If you're using **Zod with Express.js**, you can validate `req.body` easily.

```javascript
const express = require("express");
const { z } = require("zod");

const app = express();
app.use(express.json());

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().min(18),
});

app.post("/register", (req, res) => {
  const result = userSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json(result.error.format());
  }
  res.send("User registered successfully!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## **📌 8. TypeScript Support (Bonus)**

Zod is **TypeScript-first**, meaning you can infer types automatically.

```typescript
import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

type User = z.infer<typeof userSchema>; // Auto-generates TypeScript type

const user: User = { name: "Alice", age: 25 }; // ✅ Valid
```

---

## **🎯 Summary**

| Feature             | Example                                  |
| ------------------- | ---------------------------------------- |
| Basic Validation    | `z.string()`, `z.number()`               |
| Constraints         | `.min(5)`, `.max(10)`, `.email()`        |
| Error Handling      | `safeParse(data)`                        |
| Optional Fields     | `.optional()`, `.default(value)`         |
| Arrays & Objects    | `z.array(z.string())`, `z.object({...})` |
| Express Integration | `req.body` validation                    |
| TypeScript Support  | `z.infer<typeof schema>`                 |

---
