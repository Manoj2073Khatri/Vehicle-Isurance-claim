import { useState, useEffect } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { vehicleImages } from "../assets/commonJSON";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Upload = () => {
  const [selectedVehicleImages, setSelectedVehicleImages] = useState<any>([]);

  useEffect(() => {
    console.log('images',selectedVehicleImages)
    return () => { }
  }, [selectedVehicleImages])

  return (
    <div className=" row align-content-center ">
      {
        vehicleImages.map((data, vehicleImagesIndex) => {
          return <div key={vehicleImagesIndex} className="col-12 col-md-6 col-lg-4 position-relative">
            <h5>{data.title}</h5>
            <div className="filepond" style={{ backgroundImage: `url(${data.image})` }}>
            </div>

            <FilePond
              allowReorder={false}
              allowMultiple={false}
              maxFiles={1}
              credits={false}
              labelIdle='Drag & Drop your files or click <span class="filepond--label-action">here</span> to upload'
              onupdatefiles={fileItems => {
                setSelectedVehicleImages([...selectedVehicleImages,{name:data.title,file:fileItems[0].file}])
              }}
            />
          </div>
        })
      }
    </div>
  )
}

export default Upload