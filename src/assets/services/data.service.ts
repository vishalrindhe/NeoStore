import { Injectable } from '@angular/core';
import ProductOnDashboard from '../data/productOnDashboard.json';
import Cart from '../data/cart.json';
import userProfile from '../data/userProfile.json';
import productDetail from '../data/productDetail.json';
import productList from '../data/productList.json';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public productOnDashboard: {
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
  } = ProductOnDashboard;

  public userProfile: {
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
      updatedAt: string;
    };
  } = userProfile;
  myFirstPromise: string;

  constructor() {}

  public cart: {
    success: boolean;
    status_code: number;
    message: string;
    product_details: {
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
          __v: number;
        };
        Color_id: {
          _id: string;
          color_name: string;
          color_code: string;
          color_id: string;
          __v: number;
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
        __v: number;
      };
      quantity: number;
      product_cost: number;
      total_productCost: number;
      createdAt: string;
      __v: number;
    }[];
  } = Cart;

  public productDetail: {
    success: boolean;
    status_code: number;
    message: string;
    product_details: {
      _id: string;
      subImages_id: {
        product_subImages: string[];
        _id: string;
        subImages_id: string;
        __v: number;
      };
      category_id: {
        _id: string;
        category_name: string;
        category_id: string;
        product_image: string;
        created_at: string;
        __v: number;
      };
      Color_id: {
        _id: string;
        color_name: string;
        color_code: string;
        color_id: string;
        __v: number;
      };
      product_id: string;
      product_name: string;
      product_image: string;
      product_desc: string;
      product_rating: number;
      product_producer: string;
      product_cost: number;
      product_stock: number;
      product_dimension: string;
      product_material: string;
      createdAt: string;
      __v: number;
    }[];
  } = productDetail;

  public productList: {
    success: boolean;
    status_code: number;
    message: string;
    product_details: {
      _id: string;
      subImages_id: {
        product_subImages: string[];
        _id: string;
        subImages_id: string;
        __v: number;
      };
      category_id: {
        _id: string;
        category_name: string;
        category_id: string;
        product_image: string;
        created_at: string;
        __v: number;
      };
      Color_id: {
        _id: string;
        color_name: string;
        color_code: string;
        color_id: string;
        __v: number;
      };
      product_id: string;
      product_name: string;
      product_image: string;
      product_desc: string;
      product_rating: any;
      product_producer: string;
      product_cost: number;
      product_stock: number;
      product_dimension: string;
      product_material: string;
      createdAt: string;
      __v: number;
    }[];
    total_count: number;
  } = productList;

  /**
   * this return products which are seen in cards on DashBoard front page
   * @return {*}
   * @memberof DataService
   */
  get() {
    return this.productOnDashboard;
  }
  /**
   *this return user profile json data
   * @return {*}
   * @memberof DataService
   */
  getUserProfile() {
    return this.userProfile;
  }
  /**
   * this returns cart json data
   * @return {*}
   * @memberof DataService
   */
  getCartData() {
    return this.cart;
  }

  public cartCount: number;
  /**
   * getting count of itms in cart
   * @param {number} count
   * @memberof DataService
   */
  setCartCount(count: number) {
    console.log(this.cartCount);
    this.cartCount = count;
  }

  getCartCount() {
    return this.cartCount;
  }

  /**
   *getting single product detail from json
   * @return {*}
   * @memberof DataService
   */
  getProductDetail() {
    console.log(this.productDetail);
    return this.productDetail;
  }

/**
 * getting all product list from json 
 * @return {*} 
 * @memberof DataService
 */
getProductList(){
    return this.productList;
  }

  public r:any
  public remove:any

// setRemoveCart(remove:string){
//   let r:string
//   let myFirstPromise = new Promise((resolve, reject) => {
//   this.remove = remove
//   resolve(remove)
//   })
  
//   myFirstPromise.then((successMessage) => {
//     console.log("Yay! from service :" + successMessage)
//     this.remove = successMessage
//     console.log("this.remove from promise service", this.remove);
//     this.r  = successMessage
//   });
// }

}
