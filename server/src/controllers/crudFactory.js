export const crud = (Model)=> ({
  list: async(req,res)=> res.json(await Model.find().sort({createdAt:-1})),
  get: async(req,res)=>{ const it=await Model.findById(req.params.id); if(!it) return res.status(404).json({message:'Not found'}); res.json(it) },
  create: async(req,res)=>{ try{ const it=await Model.create(req.body); res.status(201).json(it) }catch(e){ res.status(400).json({message:e.message}) } },
  update: async(req,res)=>{ try{ const it=await Model.findByIdAndUpdate(req.params.id, req.body, {new:true}); if(!it) return res.status(404).json({message:'Not found'}); res.json(it) }catch(e){ res.status(400).json({message:e.message}) } },
  remove: async(req,res)=>{ await Model.findByIdAndDelete(req.params.id); res.json({ ok:true }) }
})
