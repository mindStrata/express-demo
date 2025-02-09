# **📌 2. Using Zod with React, Next.js, and Prisma**

### **🔹 2.1 Zod with React (Form Validation)**

If you're using React with a form library like **react-hook-form**, Zod can **validate form data** easily.

#### **✅ Install Dependencies**

```bash
npm install react-hook-form @hookform/resolvers zod
```

#### **✅ Example: React Form Validation**

```jsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email"),
});

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => console.log("Form submitted:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" />
      <p>{errors.name?.message}</p>

      <input {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
}
```

---
