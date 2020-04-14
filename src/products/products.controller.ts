import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Get()
    async getAllProduct(){
        const products = await this.productsService.getAllProduct();
        return products;
    }

    @Post()
    async createProduct(
        @Body('title') title: string,
        @Body('desc') desc: string,
        @Body('price') price: number
    ){
        const idProCreate = await this.productsService.createProduct(title,desc,price);
        return {id:idProCreate};
    }
}
