import { Button } from "@heroui/button";
import { LuPencilLine } from "react-icons/lu";
import DeviceWarrentyForm from "./device-update-warrenty-form";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateWarrenty } from "@/services/device-api";
import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { addToast } from "@heroui/toast";

export default function UpdateWarrenty({device}:any) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => updateWarrenty(data),
  });
  const handleSubmit = (data: any) => {
    const finalData = {
      id: device._id,
      payload: {
        warrantyStartsOn: new Date(startDate),
        warrantyEndsOn: new Date(endDate),
      },
    };

    mutate(finalData, {
      onSuccess: (res) => {
        addToast({
          title: "Success",
          description: res.message,
          color: "success",
        });
        queryClient.invalidateQueries({ queryKey: ["devices-list"] });
      },
      onError: (err) => {
        addToast({
          title: "Error",
          description: err.message,
          color: "danger",
        });
      },
    });
  };
  return (
    <>
      <Popover placement="right">
        <PopoverTrigger>
          <Button isIconOnly variant={"flat"}>
            <LuPencilLine size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="h-24 w-96">
          
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-8">
              <DeviceWarrentyForm
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                onSubmit={handleSubmit}
              />
            </div>
            <div className="col-span-4">
              <Button
                isLoading={isPending}
                form="device-form-warrenty"
                type="submit"
                color="secondary"
                className="mt-2 "
              >
                Update
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
