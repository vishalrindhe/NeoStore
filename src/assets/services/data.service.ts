import { Injectable } from '@angular/core';
import ProductOnDashboard from '../data/productOnDashboard.json';
import Cart from '../data/cart.json';
import userProfile from '../data/userProfile.json';
import productDetail from '../data/productDetail.json';
import productList from '../data/productList.json';
import Address from '../data/dummy_address.json';
import Orders from '../data/dummy_order_list.json';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {

public url = "https://neostore-api.herokuapp.com"
public xyz:any
public token:any = localStorage.getItem('token')
public cartValue:number

loginPost(data: any): Observable<any>{
  return this.http.post(this.url + '/api/auth/login', data)
}

registrationPost(data: any): Observable<any>{
  return this.http.post(this.url + '/api/auth/register', data)
}

listProductsGet(): Observable<any>{
  return this.http.get(this.url + '/api/product?limit=100000&page=1..1000')
}

listAllCategoryGet(): Observable<any>{
  return this.http.get(this.url + '/api/category')
}

listCategoryGet(): Observable<any>{
  return this.http.get(this.url + '/api/product?limit=100000&page=1..1000&category=6065c425f45ada6429eb42c9')
}

listColorGet(): Observable<any>{
  return this.http.get(this.url + '/api/product?limit=100000&page=1..1000&color=6065ca24cec0196a6fe56e3d')
}

sortByPriceAscGet(): Observable<any>{
  return this.http.get(this.url + '/api/product?limit=100000&page=1..1000&sortby=price&orderby=asc')
}

sortByPriceDescGet(): Observable<any>{
  return this.http.get(this.url + '/api/product?limit=100000&page=1..1000&sortby=price&orderby=desc')
}


sortByRatingDescGet(): Observable<any>{
  return this.http.get(this.url + '/api/product?limit=100000&page=1..1000&sortby=rating&orderby=desc')
}

topFiveProductGet(): Observable<any>{
  return this.http.get(this.url + '/api/product?limit=5&page=1..1000&sortby=rating&orderby=desc')
}

// list out products inside cart by get method and passing token to it
listProductsInCartGet(): Observable<any>{
  return this.http.get(this.url + '/api/cart',{ headers: { Authorization: this.token}})
}

// adding products inside cart by post method and passing body and token to it
addProductsInCartPost(data:any): Observable<any>{
  return this.http.post(this.url + '/api/cart',data,{ headers: { Authorization: this.token}})
}

updateProductQuantityInCartPut(data:any,i:any): Observable<any>{
  return this.http.put(this.url + '/api/cart/'+i,data,{ headers: { Authorization: this.token}})
}

deleteProductInCartDelete(i:any): Observable<any>{
  return this.http.delete(this.url + '/api/cart/'+i,{ headers: { Authorization: this.token}})
}

forgotPasswordPost(data: any): Observable<any>{
  return this.http.post(this.url + '/api/auth/forgot-password', data)
}

resetPasswordPost(data: any): Observable<any>{
  return this.http.post(this.url + '/api/auth/set-password', data)
}

// changePasswordPost(data: any): Observable<any>{
//   return this.http.post(this.url + '/api/auth/set-password', data)
// }



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

  constructor(private http: HttpClient, private router: Router) {}

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
  getProductList() {
    return this.productList;
  }

  // public r:any
  // public remove:any

  public order_list: {
    success: boolean;
    status_code: number;
    message: string;
    product_details: {
      _id: string;
      product_details: {
        _id: string;
        total_cartCost: string;
        isDelivered: boolean;
        customer_id: number;
        order_id: string;
        product_id: string;
        quantity: number;
        delivery_address: string;
        total_productCost: string;
        createdAt: string;
        __v: number;
        product_details: {
          _id: string;
          subImages_id: string;
          category_id: string;
          color_id: string;
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
      }[];
    }[];
  } = Orders;

  sendOrderData() {
    return this.order_list;
  }

  // address

  public Address_List: {
    success: boolean;
    status_code: number;
    customer_address: {
      address_id: number;
      customer_id: number;
      address: string;
      pincode: number;
      city: string;
      state: string;
      country: string;
      isDeliveryAddress: boolean;
      createdAt: string;
      updatedAt: string;
    }[];
  } = Address;
  public Filterarray = this.Address_List.customer_address;
  public address_length = this.Filterarray.length;
  public userDataId: any;
  public DataId: any;

  addItem(event: any) {
    this.Filterarray.push(event);
    this.address_length = this.Filterarray.length;
    console.log('filterarray new', this.Filterarray);
  }
  public deleteItem(_id: any) {
    this.Filterarray.splice(_id - 1, 1);
    this.address_length = this.Filterarray.length;
    console.log(_id);
  }
  editItem(_id: number) {
    let address = this.Filterarray[_id - 1].address;
    let city = this.Filterarray[_id - 1].city;
    let pincode = this.Filterarray[_id - 1].pincode;
    let country = this.Filterarray[_id - 1].country;
    let result1: any = prompt('Edit Address', address);
    let result2: any = prompt('Edit City', city);
    // let result3 = prompt("Edit Task Title", pincode);
    let result4: any = prompt('Edit Country', country);
    if (
      (result1 !== null && result1 !== '') ||
      (result2 !== null && result2 !== '') ||
      (result4 !== null && result4 !== '')
    ) {
      this.Filterarray[_id - 1].address = result1;
      this.Filterarray[_id - 1].city = result2;
      this.Filterarray[_id - 1].country = result4;
    }
  }
  senddata() {
    return this.Filterarray;
  }
}
