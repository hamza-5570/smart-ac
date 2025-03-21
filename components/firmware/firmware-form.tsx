/* eslint-disable react/jsx-sort-props */
import { Form } from "@heroui/form";
import { useForm } from "react-hook-form";
import RHFInput from "../common/hook-form-inputs/rhf-input";
import { Input } from "@heroui/input";
import { FirmPayload } from "@/services/firmware-api";

const initialValues: FirmPayload = {
  version: "",
  firmwareFile: "",
};

type FirmFormProps = {
  defaultValues?: FirmPayload;
  onSubmit: (data: FirmPayload) => void;
  setFile: any;
};

export default function FirmWareForm({
  defaultValues = initialValues,
  setFile,
  onSubmit,
}: FirmFormProps) {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <Form
      id="device-form"
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 gap-3 w-full">
        <RHFInput
          control={control}
          inputProps={{ fullWidth: true, isRequired: true }}
          name="version"
          label="Version"
          placeholder="Enter Version"
        />

        <Input
          id="fileUpload"
          type="file"
          label="FirmwareFile"
          name="firmwareFile"
          onChange={handleFileChange}
        />
      </div>
    </Form>
  );
}
