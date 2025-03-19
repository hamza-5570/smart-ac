import ProfileForm from "@/components/profile/profile-form";
import { useProfile } from "@/context/user-context";
import { Spinner } from "@heroui/spinner";

export default function ProfilePage() {
  const { data: user, isLoading } = useProfile();
  if (isLoading)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );

  const { name, city, phone, state, postalCode } = user || {};
  return (
    <ProfileForm defaultValues={{ name, city, phone, state, postalCode }} />
  );
}
