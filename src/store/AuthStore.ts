import axios from 'axios';

import { configure, makeAutoObservable, runInAction } from 'mobx';


configure({ enforceActions: 'always' });
const BASE_API_URL='https://fakestoreapi.com'
export class AuthStore {

  loading = false;
  token: string | undefined;
  success = ""
  userName = ""
  productSuccess=""
  products=[]
 catList:[]=[]
  constructor() {
    makeAutoObservable(this);
  }

  async Login(details: any) {
   console.log("starting")
    this.setLoading(true);
    axios
      .post(`${BASE_API_URL}/auth/login`, details, )
      .then(async (res) => {
        console.log("startinhfhfg",)
   console.log(res.data)
this.setSuccess("Success")
        runInAction(() => {
          this.loading = false;
        });
      })
      .catch((_err) => {
        console.log("error",_err)
        runInAction(() => {
          this.loading = false;
        });
      });
  }

  async getProducts() {
 console.log("fasing")
    try {
      console.log("fas try")
      const result = await axios.get(`${BASE_API_URL}/products`);
        this.setProduct(result.data);
      this.setProductSuccess("product get")
      runInAction(() => {
        this.loading = false;
      });
      const catList=[]
      result.data.forEach((product) => {
        const existingCategory = catList.find((category) => category.category === product.category);
        if (!existingCategory) {
         catList.push({ category: product.category, image: product.image });
        }
      });
      this.updateCatList(catList);
      return result.data;
    } catch (err) {
      console.log(err)
      runInAction(() => {
        this.loading = false;
      });
      return null;
    }
  }






 
  setUserName = (val: string) => {
    this.userName=val
  }

  setLoading = (val: boolean) => {
    this.loading = val;
  };
  SetAccessToken = (accessToken: string | undefined) => {
    this.token = accessToken;
  };
  setSuccess = (val: string)=>{
    this.success=val
  }
  setProduct = (val: any) => {
    this.products=val
  }
  updateCatList(catList) {
    this.catList = catList.slice(); // Update the observable array
  }
  setProductSuccess(val) {
    this.productSuccess=val
  }
  
}
