import { Injectable } from '@angular/core';
import  ProductOnDashboard  from '../data/productOnDashboard.json'
import  Cart from '../data/cart.json'
import userProfile from '../data/userProfile.json'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  public productOnDashboard : {
                  success: boolean;
                  status_code: number;
                  message: string;
                  category_details: {
                      _id: string;
                      category_name: string;
                      product_image: string;
                      category_id: string;
                      created_at: string;
                      __v: number;
                  }[];
              } = ProductOnDashboard


  public userProfile : {
          success: boolean; 
          status_code: number; 
          customer_proile: { 
                customer_id: number; 
                first_name: string; 
                last_name: string; 
                email: string; 
                phone_no: string; 
                gender: string; 
                dob: string; 
                profile_img: string; 
                otp: string; 
                createdAt: string; 
                updatedAt: string; }; 
       } = userProfile

  constructor() { }
  
public cart : {
  success: boolean;
  status_code: number;
  message: string;
  product_details:
    {
      _id: string;
      customer_id: number;
      product_id: {
        _id: string;
        subImages_id: string;
        Category_id: {
          _id: string;
          category_name: string;
          category_id: string;
          product_image: string;
          created_at: string;
          __v: number
        };
        Color_id: {
          _id: string;
          color_name: string;
          color_code: string;
          color_id: string;
          __v: number
        };
        product_id: string;
        product_name: string;
        product_image: string;
        product_desc: string;
        product_rating: string;
        product_producer: string;
        product_cost: number;
        product_stock: number;
        product_dimension: string;
        product_material: string;
        createdAt: string;
        __v: number
      };
      quantity: number;
      product_cost: number;
      total_productCost: number;
      createdAt: string;
      __v: number
    }[]}= Cart
  

  get(){

    console.log(this.productOnDashboard);
    console.log("cart json",this.cart);
    console.log("profile", this.userProfile);
    
    return this.productOnDashboard
  }

  getUserProfile(){
    return this.userProfile
  }

  

}
