import { create } from "apisauce";
import { PER_PAGE } from "../constants";


const API = create({
    baseURL: 'https://moviesdatabase.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '124701e034mshf8064fc05a4309ap12064djsne2c4efe20f02',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }

});


// const getPosts = (startYear: number, endYear: number) => {
//     return API.get("/titles", { startYear: Number, endYear: Number });
// };
const getPosts = (limit: number,) => {
    console.log(limit);
    return API.get("/titles/", {list: 'top_boxoffice_200', limit, info: `base_info`});
};


// const getRating = (id: string) => {
//     return API.get(`/titles/${id}/ratings`);
// };
const getSinglePost = (id: string) => {
    return API.get(`/titles/${id}`, { info: 'base_info' });
};





export default {
    getPosts,
    getSinglePost,
}