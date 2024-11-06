import React, { useEffect } from "react";
import { supabaseClient } from "../utility"; // Adjust path if necessary

const HomePage: React.FC = () => {
    useEffect(() => {
        const checkConnection = async () => {
            try {
                const { data, error } = await supabaseClient
                    .from("talents")
                    .select("*")
                    .limit(1);

                console.log("Data:", data);
                console.log("Error:", error);

                if (error) {
                    console.log("Connection to Supabase failed:", error.message);
                } else if (data && data.length > 0) {
                    console.log("Successfully connected to Supabase! Data:", data);
                } else {
                    console.log("Connected to Supabase, but no data found.");
                }
            } catch (e) {
                console.log("An error occurred while connecting to Supabase:", e);
            }
        };

        checkConnection();
    }, []);


    return (
        <div>
            <h1>Supabase Connection Test</h1>
            <p>Check the console for connection results.</p>
        </div>
    );
};

export default HomePage;
