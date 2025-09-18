"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError("");

  //   if (!email || !password) {
  //     setError("Veuillez remplir tous les champs.");
  //     return;
  //   }

  //   if (email === "admin@example.com" && password === "admin") {
  //     alert("Connexion réussie !");
  //         router.push('/');

  //   } else {
  //     setError("Email ou mot de passe incorrect.");
  //   }

  // };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_API_URL + `/api/login`,
        {
          email,
          password,
        }
      );
      // Stocker token dans localStorage (ou cookie selon sécurité souhaitée)
      localStorage.setItem("token", res.data.token);

      // Rediriger vers la page protégée
      router.push("/");
    } catch (err) {
      setError("Email ou mot de passe incorrect");
      console.error(err);
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center p-4"
    >
      <form
        onSubmit={handleLogin}
        className="backdrop-blur-md bg-white/5 border border-white/5 shadow-lg rounded-xl p-8 w-full max-w-md transition duration-500 hover:shadow-2xl hover:scale-105"
      >
        <h2 className="text-3xl font-semibold mb-6 text-center text-slate-900 drop-shadow">
          Connexion
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm transition duration-300 animate-pulse">
            {error}
          </div>
        )}

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-2xl text-slate-900 mb-1 font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full text-2xl px-2 py-1 border-b border-white outline-none bg-transparent text-slate-900 placeholder-white/70 transition duration-300 focus:border-blue-400"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-2xl text-slate-900 mb-1 font-semibold"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full text-2xl px-2 py-1 border-b border-white outline-none bg-transparent text-slate-900 placeholder-white/70 transition duration-300 focus:border-blue-400"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-slate-900 text-xl py-2 rounded transition duration-300 hover:bg-blue-700 hover:shadow-md"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
}
