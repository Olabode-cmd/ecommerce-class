import { useEffect } from "react";
import { useRouter } from 'react-router'

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      await localStorage.removeItem("accessToken");

      setTimeout(() => {
        router.push("/login");
      }, 1000);
    };

    logout();
  }, [router]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default Logout;
