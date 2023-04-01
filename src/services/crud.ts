import { apiClient } from "./api";

const findAll = async (urlWithTable:string) => {
   //urlWithTable="/route"
  const response = await apiClient.get<{}>(urlWithTable);
  return response.data;
}

const findById = async (urlWithId: string) => {
//urlWithId=`/route?id=${id}`
  const response = await apiClient.get<{}>(urlWithId);
  return response.data;

}

const post = async (url:string,postData:{}) => {
    
//url:'/route'
//postData:{model}
console.log('doc',postData);
  const response = await apiClient.post<{}>(url, postData);
  return response.data;
}


const create = async (url:string,postData:{}) => {
    //url='/route' postData='{ title, description,status}'
    console.log('doc',{postData});

  const response = await apiClient.post<any>(url,postData);
  return response.data;
 }
 const get = async (url: string) => {
  // urlWithID =`/route/${id}`
//format eg data={ title, description, published }
const response = await apiClient.get<any>(url);
return response.data;
}

const update = async (urlWithId: string, data:{}) => {
    // urlWithID =`/route/${id}`
  //format eg data={ title, description, published }
  const response = await apiClient.put<any>(urlWithId, data);
  return response.data;
}

const deleteById = async (urlWithId: string) => {

  // urlWithID =`/route?id=${id}`
  const response = await apiClient.get<any>(urlWithId);
  console.log(response.data)
  return response.data;
}

const deleteAll = async (urlWithTable:string) => {
  // urlWithTable="/route"
  const response = await apiClient.delete<any>(urlWithTable);
  return response.data;
}


const CRUDServices = {
  findAll,
  findById,
  post,
  create,
  update,
  deleteById,
  deleteAll,
  get
}
export default CRUDServices;