"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./Account.module.css";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  const username = session?.user?.name || "Guest";

  const handleLogout = async () => {
    
    await signOut({ redirect: false });

    
    localStorage.clear();
    sessionStorage.clear();

    
    if ("caches" in window) {
      const names = await caches.keys();
      await Promise.all(names.map(name => caches.delete(name)));
    }

  
    router.push("/login");
  };

  return (
    <div className={styles.accountPage}>
      <h2>My Account</h2>
      <div className={styles.profileInfo}>
        <span role="img" aria-label="profile" className={styles.profilePic}>
          👤
        </span>
        <h3>Welcome, {username}!</h3>
      </div>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
