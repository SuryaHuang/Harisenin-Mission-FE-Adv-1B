import { useState, useEffect, useMemo } from "react";
import { axiosInstance, axiosApi } from "../../axiosFirebaseConfig";

export const getUsers = () => {
  const [chillUsers, setChillUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = setInterval(async () => {
      try {
        const usersResponse = await axiosInstance.get("/chillUsers.json");
        const rawData = usersResponse.data || {};
        setChillUsers((prevData) => {
          const isSame = JSON.stringify(prevData) === JSON.stringify(rawData);
          if (isSame) return prevData;
          return rawData;
        });
      } catch (error) {
        console.log("Error fetching temp:", error);
      }
    }, 3000);

    return () => clearInterval(fetchUsers);
  }, []);

  const formattedUsers = useMemo(() => {
    const formatted = Object.entries(chillUsers).map(([id, user]) => ({
      id,
      ...user,
    }));
    console.log("data user dari getUsers (memo):", formatted);
    return formatted;
  }, [chillUsers]);

  return { data: formattedUsers };
};

export const getTemp = () => {
  const [loggedInUsers, setloggedInUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = setInterval(async () => {
      try {
        const usersResponse = await axiosInstance.get("/loggedInUsers.json");
        const rawData = usersResponse.data || {};
        setloggedInUsers((prevData) => {
          const isSame = JSON.stringify(prevData) === JSON.stringify(rawData);
          if (isSame) return prevData;
          return rawData;
        });
      } catch (error) {
        console.log("Error fetching temp:", error);
      }
    }, 3000);

    return () => clearInterval(fetchUsers);
  }, []);

  const formattedUsers = useMemo(() => {
    const formatted = Object.entries(loggedInUsers).map(([id, user]) => ({
      id,
      ...user,
    }));
    console.log("data temp dari getTemp (memo):", formatted);
    return formatted;
  }, [loggedInUsers]);

  return { data: formattedUsers };
};

export const postUsers = async (newUser) => {
  try {
    await axiosInstance.post("/chillUsers.json", newUser);
    alert("Registrasi berhasil!");
  } catch (error) {
    console.log("Error registering users:", error);
  }
};

export const tempUsers = async (cacheUser) => {
  try {
    await axiosInstance.post("/loggedInUsers.json", cacheUser);
  } catch (error) {
    console.log("Error registering tempUsers:", error);
  }
};

export const deleteUser = async (userId) => {
  try {
    await axiosInstance.delete(`/chillUsers/${userId}.json`);
  } catch (error) {
    console.log("Error Deleting user:", error);
  }
};

export const deleteTemp = async (tempId) => {
  try {
    await axiosInstance.delete(`/loggedInUsers/${tempId}.json`);
  } catch (error) {
    console.log("Error Deleting temp:", error);
  }
};

export const updateUser = async (userId, newUsername, newPassword) => {
  try {
    await axiosInstance.patch(`/chillUsers/${userId}.json`, {
      username: newUsername,
      password: newPassword,
    });
    console.log("User Berhasil disimpan");
  } catch (error) {
    console.log("Perubahan Gagal disimpan:", error);
  }
};

export const updateTemp = async (tempId, newUsername, newPassword) => {
  try {
    await axiosInstance.patch(`/loggedInUsers/${tempId}.json`, {
      username: newUsername,
      password: newPassword,
    });
    console.log("Temp Berhasil disimpan");
  } catch (error) {
    console.log("Temp Gagal disimpan:", error);
  }
};
