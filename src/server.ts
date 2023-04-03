import express from 'express';
import router from './controller/v1/index-router';
import { V2IndexRouter } from './controller/v2/index-router-v2';
import cors from 'cors'
import swaggerDocs from './utils/swagger';


export const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors())
app.use('/api/v1/', router);
app.use('/api/v2/', V2IndexRouter)

app.get('/', (req, res) => {
  res.send('Hello and welcome to the Pepper Inventory!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  swaggerDocs(app, PORT)
});