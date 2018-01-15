"use strict";

const CpfsModel = require('../models/cpfs-model');
const CPF = require('node-cpf');
let config = require('../../config/global-setting');

/**
 * CRUD registers
 */
class CpfsController {
    
    /**
     * Get all registers.
     * Read in cRud.
     */
    getAll(req, res) {
        // Count the hits
        config.TOTAL_HITS++;

        // Try returns all the registers
        CpfsModel.findAll().then(registers => {
            // If it does not return records, it returns error 500
            if (!registers)
                res.status(500).send('Error on find!');
            else if (registers.length == 0)
                // If it does found nothing records, returns 404
                return res.status(404).send('No registers found!');
            
            // Returns the registers and insert the mask in CPF
            for(let i = 0; i < registers.length; i++)
                registers[i].cpf = CPF.mask(registers[i].cpf);
            return res.status(200).json(registers);
        });
    }
    
    /**
     * Get register by Id.
     * Read in cRud.
     */
    get(req, res) {
        // Count the hits
        config.TOTAL_HITS++;

        // Validate if cpfId have been transmitted and
        // return 'Bad request' if not has been passed
        if (!req.body || !req.params.cpfId)
            return res.status(400).send('Bad request: the params "cpfId" is required!');

        // Find register by cpfId
        CpfsModel.findById(req.params.cpfId).then(registers => {
            if (!registers)
                // Return 404 in case not found
                return res.status(404).send('No registers found!');
            
            // Insert the mask
            registers.cpf = CPF.mask(registers.cpf);
            // Returns the registers
            return res.status(200).json(registers);
        });
    }

    /**
     * Post register in register.
     * Create in Crud.
     */
    post(req, res) {
        // Count the hits
        config.TOTAL_HITS++;

        // Validate if all required fields have been transmitted and
        // returns 'Bad Request' if not all required data has been passed
        if (!req.body || !req.body.cpf || !req.body.name || !req.body.cpf || !req.body.blackList)
            return res.status(400).send('Bad request: cpf and others data are required!');
        
        // Validate CPF
        if (CPF.validate(req.body.cpf)) {
            // If CPF is masked, remove the mask
            if (CPF.isMasked(req.body.cpf))
                req.body.cpf = CPF.unMask(req.body.cpf);
            
            // Returns 'Bad Request' if data already exists
            CpfsModel.findOne({where: {cpf: req.body.cpf}}).then(registers => {
                if (registers != null || registers.dataValues) {
                    // Returns location of the resource and
                    // 'Bad Request' if data already exists
                    res.location('/cpfs/'+ registers.id);
                    return res.status(409).send('Bad request: only one cpf registry is permitted!');
                }
            });

            // Try to create the record
            CpfsModel.create(req.body).then(registers => {
                if (!registers)
                    // In case of error, return error 500
                    return res.status(500).send('Error on created register!');

                // Creates the record, returns your location and the data saved
                res.location('/cpfs/' + registers.id);
                // Insert the mask
                registers.cpf = CPF.mask(registers.cpf);
                return res.status(201).json(registers.get());
            });
        }
        else
            // Return to Invalid CPF
            return res.status(400).send('Bad Request: CPF is not valid!');
    }

    /**
     * Put register by Id.
     * Update in crUd.
     */
    put(req, res) {
        // Count the hits
        config.TOTAL_HITS++;

        CpfsModel.update(
                    { blackList: req.body.blackList },
                    { where: {id : req.params.cpfId} }
        ).then(registers => {
            res.location('/cpfs/' + req.params.cpfId);
            return res.status(204).json('Successfully updated registration!');
        });
        
        /*success(function() {
            res.location('/cpfs/' + id);
            return res.status(204).send('Successfully updated registration!');
        }).error(function(err) {
            return res.status(500).send('Error on updated register!');
        });*/
    }

    /**
     * Delete register by Id. Just logical deletion.
     * Delete in cruD.
     */
    delete(req, res) {
        // Count the hits
        config.TOTAL_HITS++;

        return res.status(204).send('Successfully deleted registration!');
    }
};

module.exports = new CpfsController();