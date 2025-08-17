import { Router } from 'express';
const router = Router();

router.get('/', async (req, res) => {
  const { term } = req.query;
  // in real life you would query Mongo here
  res.json({ message: `You searched for “${term}”` });
});

export default router;
