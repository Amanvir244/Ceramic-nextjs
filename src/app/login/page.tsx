"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Login.module.css"; 

interface LoginInfo {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const [info, setInfo] = useState<LoginInfo>({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!info.email || !info.password) return toast.error("All fields are required");

    const res = await signIn("credentials", {
      redirect: false,
      email: info.email,
      password: info.password,
    });

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Login successful!");
      localStorage.clear();
      setTimeout(() => router.push("/"), 1000);
    }
  };

  return (
    <div className={styles.loginPage}>
      <div className={styles.loginContainer}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={info.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </form>
        <span>
          Don't have an account? <a href="/signup">Signup</a>
        </span>
      </div>
      <ToastContainer />
    </div>
  );
}
