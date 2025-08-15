import multer from "multer"

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')//cb-callback
  },
  filename: function (req, file, cb) {
    // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)//original can be same for many files but it is for vey small time so will not effect
  }
})

export const upload = multer({ storage, })