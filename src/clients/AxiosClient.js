import axios from "axios";

const baseDomain = "http://127.0.0.1:8000/";
const baseURL = baseDomain; // Incase of /api/v1;

// ALL DEFUALT CONFIGURATION HERE

const client =  axios.create({
  baseURL: baseURL,
  // headers: {
  //   // "Authorization": "Bearer xxxxx"
  // }
});

client.interceptors.response.use(res => {
  if (res.data.status === "Error") {
    // Error message is retrived from the JSON body.
    const error = new Error(res.data.msg);
    // Attach the response instance, in case we would like to access it.
    error.response = res;

    throw error;
  }

  // If the status is true, simply return back the response instance.
  return res;
});

export {client as default};



