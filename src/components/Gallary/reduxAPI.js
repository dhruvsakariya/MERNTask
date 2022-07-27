import axios from "../../axios/imageUpload";

export function uploadImages(images) {
  var formData = new FormData();
  for (const key of Object.keys(images)) {
    formData.append("galleryImages", images[key]);
  }

  return axios.post("user/gallary", formData, {});
}
