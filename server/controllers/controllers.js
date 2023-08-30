const Data = require('../models/model')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, no } = require('../errors')
const mongoose = require('mongoose')

const getAllData = async (req, res) => {

    try {
        const { topic, source, sector, region, pestle, end_year, country } =
          req.query;

        const queryObject = {};

        if (topic) {
          queryObject.topic = topic;
        }
        if (source) {
          queryObject.source = source;
        }
        if (region) {
          queryObject.region = region;
        }
        if (pestle) {
          queryObject.pestle = pestle;
        }
        if (sector) {
          queryObject.sector = sector;
        }
        if (end_year) {
          queryObject.end_year = end_year;
        }
        if (country) {
          queryObject.country = country;
        }

        let result = Data.find(queryObject);

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 0;
        const skip = (page - 1) * limit;

        result = result.skip(skip)
        if(limit){
          result = result.limit(limit)
        }

        const data = await result;

        const totalData = await Data.countDocuments(result);
        const numOfPages = Math.ceil(totalData / limit);

        res.status(StatusCodes.OK).json({ data, totalData, numOfPages });
    } catch (error) {
        console.log(error);
        res
          .status(BadRequestError.statusCode)
          .json({ msg: BadRequestError.message });
    }

    
}

getCardCharts = async (req, res) => {
    try {
        const { id } = req.params;
        const result = Data.find({ _id: id });
        const data = await result;
        res.status(StatusCodes.OK).json({ data });
    } catch (error) {
        console.log(error);
        res.status(StatusCodes.NOT_FOUND).json({ msg: 'Route does not exist' })
    }
    
}

module.exports = {
  getAllData,
  getCardCharts,
};
