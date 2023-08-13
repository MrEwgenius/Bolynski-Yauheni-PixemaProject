import { create } from "apisauce";
import { PER_PAGE } from "../constants";


const API = create({
    baseURL: 'https://moviesdatabase.p.rapidapi.com',
    params: { info: 'base_info' },
    headers: {
        'X-RapidAPI-Key': '124701e034mshf8064fc05a4309ap12064djsne2c4efe20f02',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }

});


// const getPosts = (startYear: number, endYear: number) => {
//     return API.get("/titles", { startYear: Number, endYear: Number });
// };
const getPosts = (limit: number,) => {
    return API.get("/titles/", { limit });
};
const getPostsTrend = (limit: number,) => {
    return API.get("/titles/", { list: 'top_boxoffice_200', limit });
};


// const getRating = (id: string) => {
//     return API.get(`/titles/${id}/ratings`);
// };
const getSinglePost = (id: string) => {
    return API.get(`/titles/${id}`,);
};

// const getMyPosts = (id: string) => {
//     return API.get(`/titles/x/titles-by-ids${id}`,

//     )
// }
const getMyPosts = () => {
    return API.get(`/titles/x/titles-by-ids`,

    )
}





export default {
    getPosts,
    getSinglePost,
    getMyPosts,
    getPostsTrend,
}