import { changePassword } from "@/services/profile-api";
import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Form } from "@heroui/form";
import { addToast } from "@heroui/toast";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import RHFInput from "../common/hook-form-inputs/rhf-input";

const validationSchema = Yup.object({
  password: Yup.string().required("Current Password is required"),
  newPassword: Yup.string()
    .min(8, "New Password must be at least 8 characters")
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), ""], "Passwords must match")
    .required("Confirm Password is required"),
});

const initialValues = { newPassword: "", password: "", confirmPassword: "" };
export default function ChangePasswordForm() {
  const { mutate, isPending } = useMutation({
    mutationKey: ["update-password"],
    mutationFn: (data: typeof initialValues) => changePassword(data),
  });
  const {
    control,
    formState: { isDirty },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });
  const onSubmit = (data: typeof initialValues) => {
    mutate(data, {
      onSuccess: (res) => {
        addToast({
          title: res.status === "failed" ? "Failed" : "Success",
          color: res.status === "failed" ? "danger" : "success",
          description: res.message,
        });
        reset();
      },
      onError: (err) => {
        addToast({ title: "Error", description: err.message, color: "danger" });
      },
    });
  };

  return (
    <Card className="max-w-2xl shadow-none bg-transparent rounded-xl ">
      <p className="text-xl md:text-2xl text-[#101828] dark:text-white font-semibold font-mono">
        Change Password
      </p>
      <p className="text-xs md:text-sm text-[#667085] dark:text-[#98A2B3] pt-1">
        Keep your account secure by regularly updating your password.
      </p>

      <Form
        className=" flex flex-col gap-4 mt-4 px-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <RHFInput
          control={control}
          label="Old Password"
          name="password"
          type="password"
          id="password"
          inputProps={{ fullWidth: true }}
          placeholder="Enter Old Password"
        />
        <div className="w-full grid grid-cols-2 gap-5">
          <RHFInput
            control={control}
            label="New Password"
            name="newPassword"
            type="password"
            id="newPassword"
            inputProps={{ fullWidth: true }}
            placeholder="Enter New Password"
          />
          <RHFInput
            control={control}
            label="Confirm New Password"
            name="confirmPassword"
            type="password"
            id="confirmPassword"
            inputProps={{ fullWidth: true }}
            placeholder="Retype New Password"
          />
        </div>

        <Button
          className="self-end"
          disabled={!isDirty}
          isLoading={isPending}
          disableAnimation={!isDirty}
          color={!isDirty ? "default" : "secondary"}
          type="submit"
        >
          Update Password
        </Button>
      </Form>
    </Card>
  );
}
