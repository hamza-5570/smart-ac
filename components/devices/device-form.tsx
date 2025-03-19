import { DevicePayload } from "@/services/device-api";
import { Form } from "@heroui/form";
import { useForm } from "react-hook-form";
import RHFInput from "../common/hook-form-inputs/rhf-input";

const initialValues: DevicePayload = {
  type: "",
  codeName: "",
  deviceName: "",
  provider: "",
  deviceInfo: { remoteId: "" },
  nickname: "",
  deviceSerial: "",
};

type DeviceFormProps = {
  defaultValues?: DevicePayload;
  onSubmit: (data: DevicePayload) => void;
};

export default function DeviceForm({
  defaultValues = initialValues,
  onSubmit,
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
          name="deviceName"
          label="Device Name"
          placeholder="Enter Device Name"
        />
        <RHFInput
          control={control}
          inputProps={{
            fullWidth: true,
            isRequired: true,
            classNames: { input: "font-mono" },
          }}
          name="codeName"
          label="Code Name"
          placeholder="Enter Code Name"
        />
        <RHFInput
          control={control}
          inputProps={{ isRequired: true }}
          name="provider"
          label="Provider"
          placeholder="Enter Provider"
        />
        <RHFInput
          control={control}
          inputProps={{ isRequired: true }}
          name="type"
          label="Type"
          placeholder="Enter Device Type"
        />
      </div>

      <h5 className="text-gray-500 font-medium text-sm">Device Info</h5>
      <div className="w-1/2">
        <RHFInput
          control={control}
          inputProps={{ isRequired: true }}
          name="deviceInfo.remoteId"
          label="Remote ID"
          placeholder="Enter Remote ID"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 w-full">
        <RHFInput
          control={control}
          inputProps={{ isRequired: true }}
          name="deviceSerial"
          label="Serial No."
          placeholder="Enter Serial No."
        />
        <RHFInput
          control={control}
          inputProps={{ isRequired: true }}
          name="nickname"
          label="Nickname"
          placeholder="Enter Nickname"
        />
      </div>
    </Form>
  );
}
