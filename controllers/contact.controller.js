const Contact = require("../models/Contact");
module.exports = {
  index: async (req, res) => {
    const contacts = await Contact.findAll();
    return res.render("contact/index", {
      contacts,
    });
  },

  create: async (req, res) => {
    return res.render("contact/create");
  },

  store: async (req, res) => {
    const { email, nohp } = req.body;
    await Contact.create({
      email,
      nohp,
    });
    return res.redirect("/contacts");
  },

  edit: async (req, res) => {
    const { id } = req.params;
    const contacts = await Contact.findByPk(id);
    return res.render("contact/edit", {
      contacts,
    });
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { email, nohp } = req.body;
    await Contact.update(
      {
        email,
        nohp,
      },
      {
        where: { id },
      }
    );
    return res.redirect("/contacts");
  },

  delete: async (req, res) => {
    const { id } = req.params;
    await Contact.destroy({
      where: { id },
    });
    return res.redirect("/contacts");
  },
};
