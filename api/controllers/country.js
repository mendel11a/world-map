import { db } from "../connect.js"

export const addCountry = (req, res, next) => {
    const q = "SELECT * FROM countries WHERE name = ?"
    db.query(q, [req.body.name], (err, data) => {
        if (err) return res.status(500).json(err)
        if (data.length) return res.status(409).json("Country already exists")
        const q = "INSERT INTO countries (`name`,`code`,`flag`) VALUE (?)"
        const values = [
            req.body.name, req.body.code, req.body.flag
        ]
        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err)
            return res.status(200).json(data)
        })
    })

}

export const deleteCountry = (req, res) => {
    const countryName = req.params.name
    const q =
        "DELETE FROM countries WHERE name = ?"

    db.query(q, [countryName], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Country has been deleted successfully")
    });
};

export const updateCountry = (req, res) => {
    const countryName = req.params.name
    const values =[]
    req.body.name && values.push(`name='${req.body.name}'`)
    req.body.code && values.push(`code='${req.body.code}'`)
    req.body.flag && values.push(`flag='${req.body.flag}'`)
    req.body.lon && values.push(`lon='${req.body.lon}'`)
    req.body.lat && values.push(`lat='${req.body.lat}'`)
    const q =
        `UPDATE countries SET ${values.join(", ")} WHERE name = '${countryName}'`

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Country has been updated successfully")
    });
};

export const getCountries = (req, res) => {
    const q = "SELECT * FROM countries"
    const c = req.query.c || ""
    const page = req.query.page || 0
    
    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        const search = (data) =>{
            return data.filter((item)=>
                item["name"].toLowerCase().includes(c)
            )
        }
        return res.json(search(data).splice(page*10,page*10+10))
    });
};