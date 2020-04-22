import axios from 'axios';
const BASE_URL ='http://localhost:3000';

export{getRessources, getRessource, updateRessource, createRessource, deleteRessource};

function getRessources(name){
    const url = `${BASE_URL}/${name}`;
    return axios.get(url).then((response)=> response.data);
}

function getRessource(name,id){
    const urlId = `${BASE_URL}/${name}/${id}`;
    return axios.get(urlId).then((response)=>response.data);
}

function updateRessource(name,id,data){
    const urlId = `${BASE_URL}/${name}/${id}`;
    return axios.put(urlId,data).then((response)=>response.data);
}

function createRessource(name,data){
    const url = `${BASE_URL}/${name}`;
    return axios.post(url,data).then((response)=>response.data);
}

function deleteRessource(name,id){
    const urlId = `${BASE_URL}/${name}/${id}`;
    return axios.delete(urlId).then((response)=>response.data);
}