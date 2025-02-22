import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Res() response) {
        // return [
        //     "Coffee 1",
        //     "Coffee 2"
        // ];
        response.status(200).send("This action will return all coffees");
    }

    @Get(":id")
    findOne(@Param("id") id: string) {
        return `This action will return coffee with ID #${id}`
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body() body) {
        return body;
        // This action will create a coffee
    }
}
