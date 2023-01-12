import express from "express"
import countryRoutes from "./routes/countries.js"
const app = express()

app.use(express.json()) //to allow app to take json file from outside
app.use("/api/countries",countryRoutes)

app.listen(8800, () => {
    console.log("Connected to server!");
})