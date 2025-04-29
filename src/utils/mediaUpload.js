import { createClient } from "@supabase/supabase-js";

const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpb3B5aWhmb3V1cnl6aGlob2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MDEzNTUsImV4cCI6MjA2MDk3NzM1NX0.BFqgcLFZRJWj1I2Q945GehI1KLpSLOHMdXwpYD80GS0`;

const url = `https://biopyihfouuryzhiholm.supabase.co`;

const supabase = createClient(url, key);

export default function uploadMediaToSupabase(file) {
  return new Promise((resolve, reject) => {
    if (file == null) {
      reject("Please select a file");
    }
    let fileName = file.name;
    const fileExtention = fileName.split(".")[fileName.split(".").length - 1];
    if (fileExtention != "jpg" && fileExtention != "png") {
      alert("Please select a jpg or png file");
      return;
    }

    const timeStamp = new Date().getTime();
    fileName = file.name + timeStamp + "." + fileExtention;

    supabase.storage
      .from("images")
      .upload(fileName, file, {
        cacheControl: "3600",
        upsert: false,
      })
      .then((res) => {
        const publicUrl = supabase.storage.from("images").getPublicUrl(fileName)
          .data.publicUrl;
        console.log(publicUrl);
        resolve(publicUrl);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
}
