import { Router } from 'express'
import Placement from '../models/Placement.js'
import { crud } from '../controllers/crudFactory.js'
import { requireAuth } from '../middleware/auth.js'
const r=Router(), c=crud(Placement)
r.get('/', c.list); r.get('/:id', c.get); r.post('/', requireAuth, c.create); r.put('/:id', requireAuth, c.update); r.delete('/:id', requireAuth, c.remove)
export default r
