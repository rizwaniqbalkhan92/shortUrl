import express from 'express';

const router = express.Router();

router.get('/getShortUrl');
router.post('/postShortUrl');
router.get('/shortUrl/:id');
router.delete('/deleteShortUrl/:id');

export default router