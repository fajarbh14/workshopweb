
const Data = require('../models/Data')
module.exports = {
  index : async (req,res) => {
    const dataa = await Data.findAll();
    return res.render('data/index',{
      dataa
    })
  },

  create : async (req,res) => {
    return res.render('data/create')
  },

  store : async (req,res) => {
    const {nim, nama} = req.body;
    await Data.create({
      nim,
      nama
    })
    return res.redirect('/dataa')
  },

  edit : async (req,res)  => {
    const {id} = req.params;
    const dataa = await Data.findByPk(id);
    return res.render('data/edit',{
      dataa
    })
  },

  update : async (req,res) => {
    const {id} = req.params;
    const {nim,nama} = req.body;
    await Data.update({
      nim,
      nama
    },{
      where : {id}
    })
    return res.redirect('/dataa')
  },

  delete : async (req,res) => {
    const {id} = req.params;
    await Data.destroy({
      where : {id}
    })
    return res.redirect('/dataa')
  }

}
