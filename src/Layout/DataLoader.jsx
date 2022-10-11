export const dataLoader = async()=>{
const loadedData = await fetch('https://openapi.programming-hero.com/api/quiz')
const data = await loadedData.json()
const currentData = data.data
const itemsData = selectedData(currentData)
const optionData = optionsData(itemsData)
return {itemsData,optionData}
}

const selectedData = (data) =>{
   const datas = data.map(datum => datum)
    return datas
}
const optionsData =(id)=>{
    const data = id.options
    const selected = data.map(sd => sd)
    return selected
}