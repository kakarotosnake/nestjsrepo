import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, HttpException, HttpStatus, ParseIntPipe} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SlugPipe } from './pipes/slug/slug.pipe';

@Controller('courses')
@ApiTags('courses')
@ApiBearerAuth()
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Post()
  @HttpCode(201) //http://localhost:3000:/v1/courses
  create(@Body() createCourseDto: CreateCourseDto) {
    console.log(createCourseDto);
    console.log('___CURRENCY___',process.env.CURRENCY);

    const {price}=createCourseDto;
    if(price===99) throw new HttpException('El precio es demasio alto',401);
      //return this.coursesService.create(createCourseDto);
   
  }

  @Get()
  findAll(@Query() query: string) {
    console.log(query);
    return this.coursesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',new ParseIntPipe({errorHttpStatusCode:HttpStatus. BAD_REQUEST})) id: number) {
    return this.coursesService.findOne(id);
  }

  @Get("title/:title")
  getTitle(@Param("title", new SlugPipe()) title:string){
    console.log(title);
    return title;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesService.update(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(+id);
  }
}
