import { Button } from "@heroui/button";
// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Image from "next/image";
import { useForm } from "react-hook-form";
import RHFInput from "../common/hook-form-inputs/rhf-input";
import { Form } from "@heroui/form";
import ChangePasswordForm from "./change-password-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UpdatePayload, updateProfile } from "@/services/profile-api";
import { addToast } from "@heroui/toast";

export default function ProfileForm({ defaultValues }: { defaultValues: any }) {
  // const { theme } = useTheme();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: (data: UpdatePayload) => updateProfile(data),
  });
  // const [uploadedImage, setUploadedImage] = useState("");
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm({
    defaultValues,
  });

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: (res) => {
        addToast({
          title: "Success",
          description: res.message,
          color: "success",
        });
        queryClient.invalidateQueries({ queryKey: ["profile"] });
      },
      onError: (err) => {
        addToast({ title: "Error", description: err.message, color: "danger" });
      },
    });
  };

  // useEffect(() => {
  //   if (theme === "dark") {
  //     setUploadedImage("/assets/png/profile-dark.png");
  //   } else {
  //     setUploadedImage("/assets/png/profile.png");
  //   }
  // }, [theme]);

  // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   if (event.target.files && event.target.files[0]) {
  //     const file = event.target.files[0];
  //     const imageUrl = URL.createObjectURL(file);
  //     setUploadedImage(imageUrl);
  //   }
  // };

  // const triggerFileUpload = () => {
  //   document.getElementById("fileInput")?.click();
  // };

  return (
    <div className="max-w-3xl mx-auto">
      <p className="text-2xl font-semibold font-mono text-[#101828] dark:text-white">
        Profile
      </p>
      <p className="md:w-[650px] text-sm text-[#667085] dark:text-[#98A2B3] font-medium pt-1.5">
        Manage your personal information, update your contact details, and
        customize your account preferences to keep your profile up to date.
      </p>

      {/* <div className="flex flex-col md:flex-row items-center gap-5">
        <Image
          src={uploadedImage}
          alt="Profile"
          width={540}
          height={540}
          className="w-[110px] h-[110px] md:w-[135px] md:h-[135px] rounded-full"
        />

        <div className="flex flex-col items-center md:items-start">
          <Button
            className="w-[200px] h-[45px] text-base font-semibold dark:bg-[#161221] border-[#D0D5DD] dark:border-[#2D263D] !rounded-lg"
            onPress={triggerFileUpload}
          >
            Upload New Image
          </Button>
          <input
            id="fileInput"
            type="file"
            accept="image/png, image/jpeg, image/jpg, image/gif"
            className="hidden"
            onChange={handleImageUpload}
          />
          <p className="md:w-[200px] text-xs text-[#6B7280] dark:text-[#98A2B3] uppercase pt-3">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
      </div> */}

      <Form
        className="max-w-2xl space-y-3 mt-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full grid grid-cols-2 gap-5">
          <RHFInput
            control={control}
            placeholder="Full Name"
            label="Full Name"
            name="name"
            type="text"
            inputProps={{ fullWidth: true }}
          />
          <RHFInput
            control={control}
            placeholder="Phone Number"
            label="Phone Number"
            name="phone"
            type="text"
            inputProps={{ fullWidth: true }}
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-5">
          <RHFInput
            control={control}
            placeholder="Enter City"
            label="City"
            name="city"
            type="text"
            inputProps={{ fullWidth: true }}
          />
          <RHFInput
            control={control}
            placeholder="Enter State"
            label="State"
            name="state"
            type="text"
            inputProps={{ fullWidth: true }}
          />
          <RHFInput
            control={control}
            placeholder="Postal Code"
            label="Postal Code"
            name="postalCode"
            type="text"
            inputProps={{ fullWidth: true }}
          />
        </div>
        <div className="self-end">
          <Button
            disabled={!isDirty}
            color={!isDirty ? "default" : "secondary"}
            disableAnimation={!isDirty}
            isLoading={isPending}
            type="submit"
          >
            Save Changes
          </Button>
        </div>
      </Form>
      <ChangePasswordForm />
    </div>
  );
}
