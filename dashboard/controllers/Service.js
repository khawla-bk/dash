const Service = require("../Models/serviceModel");

exports.getService = async (req, res) => {
  const { ID } = req.params;
  try {
    const service = await Service.findById(ID);
    res.status(200).send(service);
  } catch (error) {
    res.status(500).send({ msg: "failed to get service", error });
  }
};
exports.addService = async (req, res) => {
  const { link, title, img } = req.body;
  try {
    const service = await Service.findOne({ title });
    if (service) {
      return res.status(400).send("this service already exists");
    }
    const newService = new Service({ link, title, img });
    await newService.save();
    res.status(200).send("Service added successfully");
  } catch (error) {
    res.status(500).send("Failed to add service", error);
  }
};

exports.deleteService = async (req, res) => {
  const { ID } = req.params;
  try {
    await Service.findOneAndDelete({ _id: ID });
    res.status(200).send("Service deleted successfully");
  } catch (error) {
    res.status(500).send("Failed to delete service", error);
  }
};

exports.updateService = async (req, res) => {
  const { ID } = req.params;
  console.log({ ID, body: req.body });
  try {
    await Service.findByIdAndUpdate(ID, req.body);
    res.status(200).send("Service updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Failed to update service");
  }
};

exports.serviceList = async (req, res) => {
  const services = await Service.find({});
  res.send(services);
};
