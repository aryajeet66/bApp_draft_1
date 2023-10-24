import { useEffect, useState } from "react";
import Form from "./Form";

const Dashboard = () => {
    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
    } else {
        return (
            <div>
                <Form />
            </div>
        );
    }
};

export default Dashboard;