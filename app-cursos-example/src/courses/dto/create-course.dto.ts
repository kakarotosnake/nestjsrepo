import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUrl, Length } from 'class-validator';

export class CreateCourseDto {

    @ApiProperty({
        description:'el titulo del curso',
        minimum:1,
        default:1
    })
    @IsNotEmpty()
    @Length(3,20)
    title:string;

    @ApiProperty()
    @IsNotEmpty()
    price:number;

    @ApiProperty()
    @IsNotEmpty()
    @Length(1,15)
    description:string;

    @ApiProperty()
    @IsNotEmpty()
    @IsUrl()
    cover:string;

 
}
