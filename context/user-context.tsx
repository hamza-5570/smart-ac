import { getProfile } from "@/services/profile-api";
import { useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

type ProfileData = Awaited<ReturnType<typeof getProfile>>;

const UserContext = createContext<ReturnType<
  typeof useQuery<ProfileData>
> | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const profileState = useQuery<ProfileData>({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  return (
    <UserContext.Provider value={profileState}>{children}</UserContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(UserContext);
  if (context === null) {
    throw new Error("useProfile must be used within a UserProvider");
  }
  return context;
}
