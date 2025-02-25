import { Button } from "@heroui/button";
import { Card } from "@heroui/card";
import { Input } from "@heroui/input";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  currentPassword: Yup.string().required("Current Password is required"),
  newPassword: Yup.string()
    .min(6, "New Password must be at least 6 characters")
    .required("New Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), ""], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function Profile() {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isNewVisible, setIsNewVisible] = useState(false);
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [uploadedImage, setUploadedImage] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      setUploadedImage("/assets/png/profile-dark.png");
    } else {
      setUploadedImage("/assets/png/profile.png");
    }
  }, [setTheme, theme]);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const triggerFileUpload = () => {
    document.getElementById("fileInput")?.click();
  };
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleNewVisibility = () => setIsNewVisible(!isNewVisible);
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible);

  return (
    <div>
      <p className="text-2xl md:text-[32px] font-medium font-mono text-[#101828] dark:text-white">
        Profile
      </p>
      <p className="md:w-[650px] text-sm text-[#667085] dark:text-[#98A2B3] font-medium pt-1.5">
        Manage your personal information, update your contact details, and
        customize your account preferences to keep your profile up to date.
      </p>
      <Card className="shadow-none border border-[#EAECF0] dark:border-[#2D263D] bg-white dark:bg-[#0A0613] rounded-xl p-3 md:p-6 mt-8">
        <div className="flex flex-col md:flex-row items-center gap-5">
          <Image
            src={uploadedImage}
            alt="Profile"
            width={540}
            height={540}
            className="w-[110px] h-[110px] md:w-[135px] md:h-[135px] rounded-full"
          />

          <div className="flex flex-col items-center md:items-start">
            <Button
              variant="bordered"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mt-5 md:mt-8">
          <div>
            <span className="text-sm text-[#64748B] dark:text-[#667085] font-semibold">
              First Name
            </span>
            <Input
              variant="bordered"
              placeholder="First Name"
              radius="sm"
              size="lg"
              type="text"
              className="text-base text-[#1D2939] dark:text-[#98A2B3] font-semibold border-[#6938EF] dark:border-[#2D263D] dark:bg-[#161221] mt-2"
            />
          </div>
          <div>
            <span className="text-sm text-[#64748B] dark:text-[#667085] font-semibold">
              Middle Name
            </span>
            <Input
              variant="bordered"
              placeholder="Middle Name"
              radius="sm"
              size="lg"
              type="text"
              className="text-base text-[#1D2939] dark:text-[#98A2B3] font-semibold border-[#6938EF] dark:border-[#2D263D] dark:bg-[#161221] mt-2"
            />
          </div>
          <div>
            <span className="text-sm text-[#64748B] dark:text-[#667085] font-semibold">
              Last Name
            </span>
            <div className="flex items-center gap-2 mt-2">
              <Input
                variant="bordered"
                placeholder="Last Name"
                radius="sm"
                size="lg"
                type="text"
                className="text-base text-[#1D2939] dark:text-[#98A2B3] font-semibold border-[#6938EF] dark:border-[#2D263D] dark:bg-[#161221]"
              />
              <Button
                variant="solid"
                className="w-[100px] h-[45px] bg-[#6938EF] dark:bg-[#9365F4] text-base text-white font-semibold font-manrope hidden xl:block"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="solid"
          className="w-full h-[45px] bg-[#6938EF] dark:bg-[#9365F4] text-base text-white font-semibold font-manrope block xl:hidden mt-3"
        >
          Save
        </Button>

        <div className="mt-5 md:mt-8">
          <span className="flex items-center gap-2 text-sm text-[#64748B] dark:text-[#667085] font-semibold">
            Email Address
            <Image
              src={"/assets/svg/common/verifye.svg"}
              alt=""
              width={20}
              height={20}
            />
          </span>
          <div className="flex items-start gap-2 mt-2">
            <Input
              variant="bordered"
              placeholder="Enter Email Address"
              radius="sm"
              size="lg"
              type="email"
              className="text-base text-[#1D2939] dark:text-[#98A2B3] font-semibold border-[#6938EF] dark:border-[#2D263D] dark:bg-[#161221]"
            />
            <Button
              variant="bordered"
              className="w-[90px] h-[45px] border-[#E2E8F0] dark:border-[#2D263D] text-base text-[#94A3B8] font-manrope"
            >
              Save
            </Button>
          </div>
        </div>
      </Card>

      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleBlur, touched, errors }) => (
          <Form>
            <Card className="shadow-none border border-[#EAECF0] dark:border-[#2D263D] dark:bg-[#0A0613] rounded-xl p-3 md:p-6 mt-8">
              <p className="text-xl md:text-2xl text-[#101828] dark:text-white font-semibold">
                Change Your Password
              </p>
              <p className="text-xs md:text-sm text-[#667085] dark:text-[#98A2B3] pt-1">
                Keep your account secure by regularly updating your password.
              </p>

              <div className="mt-5 md:mt-8">
                <div>
                  <span className="text-sm text-[#64748B] dark:text-[#667085] font-semibold">
                    Current Password
                  </span>
                  <Input
                    variant="bordered"
                    placeholder="Enter password"
                    radius="sm"
                    size="lg"
                    type={isVisible ? "text" : "password"}
                    className="text-base text-[#1D2939] dark:text-[#98A2B3] font-semibold border-[#6938EF] dark:border-[#2D263D] dark:bg-[#161221] mt-2"
                    value={values.currentPassword}
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <BsEyeSlash
                            className={`text-xl  pointer-events-none ${touched.currentPassword && errors.currentPassword ? "text-[#f31260]" : "text-default-400 dark:text-[#98A2B3]"}`}
                          />
                        ) : (
                          <BsEye
                            className={`text-xl  pointer-events-none ${touched.currentPassword && errors.currentPassword ? "text-[#f31260]" : "text-default-400 dark:text-[#98A2B3]"}`}
                          />
                        )}
                      </button>
                    }
                    color={
                      touched.currentPassword && errors.currentPassword
                        ? "danger"
                        : "primary"
                    }
                    onChange={handleChange("currentPassword")}
                    onBlur={handleBlur("currentPassword")}
                  />
                  {touched.currentPassword && errors.currentPassword && (
                    <div className="text-xs text-[#f31260] font-bold mt-1">
                      {errors.currentPassword}
                    </div>
                  )}
                </div>

                <div className="mt-3 md:mt-5">
                  <span className="text-sm text-[#64748B] dark:text-[#667085] font-semibold">
                    New Password
                  </span>
                  <Input
                    variant="bordered"
                    placeholder="Enter password"
                    radius="sm"
                    size="lg"
                    type={isNewVisible ? "text" : "password"}
                    className="text-base text-[#1D2939] dark:text-[#98A2B3] font-semibold border-[#6938EF] dark:border-[#2D263D] dark:bg-[#161221] mt-2"
                    value={values.newPassword}
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleNewVisibility}
                      >
                        {isNewVisible ? (
                          <BsEyeSlash
                            className={`text-xl  pointer-events-none ${touched.newPassword && errors.newPassword ? "text-[#f31260]" : "text-default-400 dark:text-[#98A2B3]"}`}
                          />
                        ) : (
                          <BsEye
                            className={`text-xl  pointer-events-none ${touched.newPassword && errors.newPassword ? "text-[#f31260]" : "text-default-400 dark:text-[#98A2B3]"}`}
                          />
                        )}
                      </button>
                    }
                    color={
                      touched.newPassword && errors.newPassword
                        ? "danger"
                        : "primary"
                    }
                    onChange={handleChange("newPassword")}
                    onBlur={handleBlur("newPassword")}
                  />
                  {touched.newPassword && errors.newPassword && (
                    <div className="text-xs text-[#f31260] font-bold mt-1">
                      {errors.newPassword}
                    </div>
                  )}
                </div>

                <div className="mt-3 md:mt-5">
                  <span className="text-sm text-[#64748B] dark:text-[#667085] font-semibold">
                    Confirm Password
                  </span>
                  <div className="flex items-center gap-2 mt-2">
                    <Input
                      variant="bordered"
                      placeholder="Enter password"
                      radius="sm"
                      size="lg"
                      type={isConfirmVisible ? "text" : "password"}
                      className="text-base text-[#1D2939] dark:text-[#98A2B3] font-semibold border-[#6938EF] dark:border-[#2D263D] dark:bg-[#161221]"
                      value={values.confirmPassword}
                      endContent={
                        <button
                          aria-label="toggle password visibility"
                          className="focus:outline-none"
                          type="button"
                          onClick={toggleConfirmVisibility}
                        >
                          {isConfirmVisible ? (
                            <BsEyeSlash
                              className={`text-xl  pointer-events-none ${touched.confirmPassword && errors.confirmPassword ? "text-[#f31260]" : "text-default-400 dark:text-[#98A2B3]"}`}
                            />
                          ) : (
                            <BsEye
                              className={`text-xl  pointer-events-none ${touched.confirmPassword && errors.confirmPassword ? "text-[#f31260]" : "text-default-400 dark:text-[#98A2B3]"}`}
                            />
                          )}
                        </button>
                      }
                      color={
                        touched.confirmPassword && errors.confirmPassword
                          ? "danger"
                          : "primary"
                      }
                      onBlur={handleBlur("confirmPassword")}
                      onChange={handleChange("confirmPassword")}
                    />
                  </div>

                  {touched.confirmPassword && errors.confirmPassword && (
                    <div className="text-xs text-[#f31260] font-bold mt-1">
                      {errors.confirmPassword}
                    </div>
                  )}
                </div>

                <Button
                  variant="solid"
                  className="w-full h-[45px] bg-[#6938EF] dark:bg-[#9365F4] text-base text-white font-semibold font-manrope mt-5 md:mt-8"
                  type="submit"
                >
                  Save
                </Button>
              </div>
            </Card>
          </Form>
        )}
      </Formik>
    </div>
  );
}
