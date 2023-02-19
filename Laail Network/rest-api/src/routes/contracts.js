const { Router } = require("express");
const ContractModel = require("../models/Notes.model");
const contractsRouter = Router();

  
  contractsRouter.get('/contracts/:id', async (req, res) => {
    try {
      const contract = await ContractModel.findById(req.params.id);
      if (!contract) {
        return res.status(404).json({ message: 'Contract not found' });
      }
      res.status(200).json(contract);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  contractsRouter.post('/contracts', async (req, res) => {
    const contract = new ContractModel(req.body);
    try {
      const newContract = await contract.save();
      res.status(200).json(newContract);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

  contractsRouter.patch('/contracts/:id', async (req, res) => {
    try {
      const contract = await ContractModel.findById(req.params.id);
      if (!contract) {
        return res.status(404).json({ message: 'Contract not found' });
      }
      Object.assign(contract, req.body);
      const updatedContract = await contract.save();
      res.status(200).json(updatedContract);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

module.exports = contractsRouter;

