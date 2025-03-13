import { useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
            return;
        }

        const user = JSON.parse(atob(token.split(".")[1])); // Decode JWT
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
    }, []);

    return <div>Redirecting...</div>;
};

export default Dashboard;
