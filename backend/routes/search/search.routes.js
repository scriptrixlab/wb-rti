const express=require('express')
const { search,casesearch,namesearch,categorysearch,datesearch,daterangesearch,querysearch} = require('../../controller/search/search.controller');

const router=express.Router()

// router.get('/search',search);
router.get('/search/case',casesearch);
router.get('/search/name',namesearch);
router.get('/search/category',categorysearch);
router.get('/search/date',datesearch);
router.get('/search/daterange',daterangesearch);
router.get('/search/querysearch',querysearch);

module.exports=router