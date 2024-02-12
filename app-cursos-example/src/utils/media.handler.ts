import { diskStorage } from "multer";

export const storageCustom=diskStorage(

    {
        destination:'./tmp',
        filename:(req,file,cb) =>{
            const extension=file.originalname.split('.').pop();
            const name=`${Date.now()}.${extension}`;
            cb(null,name);
        }

    }
);