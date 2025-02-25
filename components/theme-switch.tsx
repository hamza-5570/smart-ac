import { FC, useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import { useTheme } from "next-themes";
import clsx from "clsx";
import { HiSun } from "react-icons/hi";
import { TbMoon } from "react-icons/tb";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const onChange = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light",
    onChange,
  });

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <Component
      aria-label={isSelected ? "Switch to dark mode" : "Switch to light mode"}
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper
          ),
        })}
      >
        <div className="flex items-center h-8 md:h-10 w-[70px] md:w-[80px] rounded-lg bg-[#FCFCFD] p-1 justify-between dark:bg-[#161221]">
          <div
            className={`${theme === "light" ? "bg-white dark:bg-[#0A0613]" : ""} rounded-xl p-1.5 md:p-2`}
          >
            <HiSun
              className={`${theme === "light" ? "text-[#4F46E5]" : "text-[#98A2B3]"} w-4 h-4 md:w-5 md:h-5`}
            />
          </div>
          <div
            className={`${theme === "dark" ? "bg-white dark:bg-[#0A0613]" : ""} rounded-xl p-1.5 md:p-2`}
          >
            <TbMoon
              className={`${theme === "dark" ? "text-[#4F46E5]" : "text-[#98A2B3]"} w-4 h-4 md:w-5 md:h-5`}
            />
          </div>
        </div>
      </div>
    </Component>
  );
};
