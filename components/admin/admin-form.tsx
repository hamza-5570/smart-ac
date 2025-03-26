import { AdminPayload } from "@/services/user-api";
import { Form } from "@heroui/form";
import { useForm } from "react-hook-form";
import RHFInput from "../common/hook-form-inputs/rhf-input";
import { Select, SelectItem } from "@heroui/select";

const initialValues: AdminPayload = {
  name: "My Name",
  email: "email@annexbyte.in",
  password: "123456789",
  phone: "989998989",
};
export const updateStatus = [
  { key: "No", label: "No" },
  { key: "Admin_Block", label: "Admin Block" },
  { key: "User_Block", label: "User Block" },
  { key: "All_Block", label: "All Block" },
];

type DeviceFormProps = {
  defaultValues?: AdminPayload;
  onSubmit: (data: any) => void;
  isShowSelect?: boolean;
};

export default function AdminForm({
  defaultValues = initialValues,
  onSubmit,
  isShowSelect = false,
}: DeviceFormProps) {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  return (
    <Form
      id="device-form"
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-2 gap-3 w-full">
        <RHFInput
          control={control}
          inputProps={{ fullWidth: true, isRequired: true }}
          name="name"
          label="Name"
          placeholder="Enter Name"
        />

        <RHFInput
          control={control}
          inputProps={{
            fullWidth: true,
            isRequired: true,
            classNames: { input: "font-mono" },
          }}
          name="email"
          type="email"
          label="Email"
          placeholder="Enter email"
        />

        <RHFInput
          control={control}
          inputProps={{ isRequired: true }}
          name="phone"
          label="Phone"
          placeholder="Enter Phone"
        />
        <RHFInput
          control={control}
          inputProps={{ isRequired: true }}
          name="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
        />
        {isShowSelect &&
        <Select
          labelPlacement="outside"
          className="max-w-xs"
          label="Blocked"
          name="blocked"
          items={updateStatus}
        >
          {updateStatus.map((status) => (
            <SelectItem key={status.key}>{status.label}</SelectItem>
          ))}
        </Select>}
      </div>
    </Form>
  );
}
