import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (!res.ok) {
            setError(data.error || "Login failed");
        } else {
            localStorage.setItem("token", data.token);
            const user = JSON.parse(atob(data.token.split(".")[1])); // Decode JWT payload

            // Redirect user based on role
            if (user.role === "customer") {
                router.push("/dashboard/customer");
            } else if (user.role === "localGuid") {
                router.push("/dashboard/localGuid");
            }
            else if (user.role === "planner") {
                router.push("/dashboard/planner");
            }
            else{
                router.push("/dashboard/vender");
            }
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md flex flex-col">
                <h2 className="text-2xl font-bold text-center mb-4 text-green-700">Login</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <label className="text-gray-600">Email</label>
                    <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    className="input border border-black p-2 rounded-lg text-gray-600" />

                    <label className="text-gray-600">Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required className="input border border-black p-2 rounded-lg text-gray-600" />

                    <button type="submit" className="btn-primary bg-red-500 w-32 p-2 rounded-xl self-center">Login</button>
                </form>
                <p className="text-center text-gray-600 mt-4">Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a></p>
            </div>
        </div>
    );
};

export default Login;
