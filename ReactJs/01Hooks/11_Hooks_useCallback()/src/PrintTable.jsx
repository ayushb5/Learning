import { useState, useEffect } from 'react'
function PrintTable({ calculateTable }) {

    const [rows, setRows] = useState([]);

    useEffect(() => {
        setRows(calculateTable())
    }, [calculateTable])

    return rows.map((row, index) => {
        return <p key={index}>{row}</p>
    })

}

export default PrintTable;