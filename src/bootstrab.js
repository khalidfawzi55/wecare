
import authRouter from "./modules/auth/auth.routes.js"
import categoryRouter from "./modules/category/category.routes.js"
import nurseRouter from "./modules/nurse/nurse.routes.js"
// import nurseOrderRouter from "./modules/nurseOrder/nurseOrder.routes.js"
import userRouter from "./modules/user/user.routes.js"
import subCategoryRouter from "./modules/subCategory/subCategory.routes.js"
import nurseOrderRouter from "./modules/nurseOrder/nurseOrder.routes.js"
import toolsRouter from "./modules/tools/tools.routes.js"
import toolRouter from "./modules/toolsOrder/toolsOrder.routes.js"
import donationRouter from "./modules/donations/donation.routes.js"


export function bootstrap(app){
    app.use('/api/v1/users',userRouter)
    app.use('/api/v1/auth',authRouter)
    app.use('/api/v1/categories',categoryRouter)
    app.use('/api/v1/subcategories',subCategoryRouter)
    app.use('/api/v1/nurses',nurseRouter)
    app.use('/api/v1/nursesOrder',nurseOrderRouter)
    // app.use('/api/v1/nurses/order',nurseOrderRouter)
    app.use('/api/v1/tools',toolsRouter)
     app.use('/api/v1/tools/order',toolRouter)
      app.use('/api/v1/tools/donation',donationRouter)
    app.get('/',(req,res)=>res.send('we care'))
}
