import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import { Product } from './product.model';


@Injectable()
export class ProductsService {

private product:Product[] = [];

constructor(@InjectModel('Product') private readonly productModel:Model<Product>){}

    async createProduct(title: string, desc: string, price: number){
        const newproduct = new this.productModel({
            title: title, 
            description: desc,
            price: price
        })
        const result = await newproduct.save();
        return result.id;
    }

    async getAllProduct(){
        const result = await this.productModel.find().exec();
        return result.map((pro)=>({id:pro.id, title:pro.title, desc: pro.description, price: pro.price}));
    }

    
}
