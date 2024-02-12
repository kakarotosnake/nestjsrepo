import {Prop, Schema , SchemaFactory} from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CourseDocument= Course & Document;

@Schema()
export class Course{

    @Prop({required:true})
    title: string;

    @Prop()
    price:number;

    @Prop()
    description: string;

    @Prop()
    cover: string;


   
}

export const CourseSchema=SchemaFactory.createForClass(Course);