import axios from "axios";

/** Fetches a list of dogs from the server
 */
async function getAllDogs(){
  const response = await axios.get("http://localhost:5001/dogs");
  return response.data
}


export {getAllDogs}