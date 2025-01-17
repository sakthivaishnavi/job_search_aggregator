import axios from 'axios';
const URL = "https://www.arbeitnow.com/api/job-board-api";

export const fetch = async () => {
    try{
        const response = await axios.get(URL);
        return response.data.data;
    }
    catch(error){
        console.log("Error fetching jobs: "+error);
        throw error;
    }
}
