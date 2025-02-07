import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch data
    const fetchUserData = async () => {
      const token = localStorage.getItem("accessToken");
      const userId = localStorage.getItem("userId");

      if (!token || !userId) {
        console.error("Missing token or userId in localStorage");
        setError("Missing token or userId in localStorage");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(
          `https://ideological-ardella-emekadefirst-f109542f.koyeb.app/api/v1/users/${userId}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const userData = await response.json();
        // console.log(`User data: ${userData}`)
        setUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  // export user
  return { user, loading, error };
};

export default useUser;