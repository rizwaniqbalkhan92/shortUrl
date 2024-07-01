import express from 'express';
import { createUrl,getAllUrl,getUrl,deleteUrl} from '../Controller/shortUrl';

const router = express.Router();

router.get('/allShortUrl',getAllUrl);
router.post('/createShortUrl',createUrl);
router.get('/shortUrl/:id',getUrl);
router.delete('/deleteShortUrl/:id',deleteUrl);

export default router