import express from "express"
import { addCountry, deleteCountry, getCountries, updateCountry } from "../controllers/country.js"

const router = express.Router()

router.get("/", getCountries)

router.post("/",addCountry)

router.put("/:name",updateCountry)

router.delete("/:name", deleteCountry)

export default router