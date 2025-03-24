import { Form } from "@heroui/form";
import { useForm } from "react-hook-form";
import { DateRangePicker } from "@heroui/date-picker";

type WarrentyFormProps = {
  defaultValues?: any;
  onSubmit?: (data: any) => void;
  setStartDate?: any;
  setEndDate?: any;
};

export default function DeviceWarrentyForm({
  defaultValues,
  onSubmit = () => {},
  setStartDate,
  setEndDate,
}: WarrentyFormProps) {
  const { handleSubmit, control } = useForm({
    defaultValues,
  });

  return (
    <Form
      id="device-form-warrenty"
      className="space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid grid-cols-1 gap-3 w-full">
        <DateRangePicker
          onChange={(data: any) => {
            setStartDate(new Date(data.start));
            setEndDate(new Date(data.end));
          }}
  
          startName="startDate"
          aria-label="Date (Controlled)"
          endName="endDate"
          className="w-full"
          label="Enter Start and End Date"
        />
      </div>
    </Form>
  );
}
