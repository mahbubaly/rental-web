import { useEffect, useState } from "react"
const [allData , setAllData] = useState()
useEffect = () => {
        fetch('SearchArea.json')
            .then(res => res.json())
            .then(data => setAllData(data))
   

}
export default allData