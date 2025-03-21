import Image from "next/image";

export default function FileUpload({
  name,
  label = "Upload File",
  previewKey,
  errors,
  touched,
}: any) {

  const handleFileChange = (event: any) => {
    const file = event.currentTarget.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        // Store the file for Formik and the result for preview
        try {
          const formdata = new FormData();
          formdata.append("image", file);
          // const response = await UploadImage(formdata).unwrap();
          // setFieldValue(`feature_image.url`, response?.data?.image[0]); // Store the file itself
          // setFieldValue(`feature_image.iconPreview`, reader.result); // Store the preview URL
          // setFieldValue(name, response?.data?.image[0]); // Store the file itself
          // setFieldValue(previewKey, reader.result); // Store the preview URL
        } catch (error) {
          console.log("error upload error", error);
        }
        // Store the file and its preview URL in Formik values
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="my-5">
      <label className="form-label">{label}</label>
      <div className="dark:bg-black bg-gray-50 p-4">
            <div>
              <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
             
                
            
            </div>
      </div>
    </div>
  );
}
