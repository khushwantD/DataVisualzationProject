import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ContextPage = createContext('')

export const DataProvider = ({ children }) => {

     const [ chartData, setChartData ] = useState([])
     const [ showChartFilters, setShowChartFilters ] = useState(false)
     const [page, setPage] = useState(1);

     if (page < 1) {
       setPage(1);
     }

     const getAllChartsData = async () => {
       try {
         const res = await axios.get(`http://localhost:3000/api/v1/data`);
         setChartData(res.data.data);
       } catch (error) {
         console.log(error);
       }
     };

     const getChartData = async () => {
       try {
         const res = await axios.get(
           `http://localhost:3000/api/v1/data?limit=10`
         );
         setChartData(res.data.data);
       } catch (error) {
         console.log(error);
       }
     };

     const getFilteredChartData = async (filter, option) => {
        try {
            const res = await axios.get(`http://localhost:3000/api/v1/data?${filter}=${option}`);
            const filteredData = res.data.data
            console.log(filteredData);
            setChartData(filteredData)
            console.log(chartData);
        } catch (error) {
            console.log(error);
        }
     }

     const getNextPageChartData = async () => {
        try {
            const res = await axios.get(
              `http://localhost:3000/api/v1/data?page=${page}`
            );
            const nextPageData = res.data.data;
            setChartData(nextPageData);
        } catch (error) {
            console.log(error);
        }
     }

     return (
        <ContextPage.Provider value={{
            chartData,
            setChartData,
            getChartData,
            page,
            setPage,
            getFilteredChartData,
            getNextPageChartData,
            showChartFilters,
            setShowChartFilters,
            getAllChartsData,
        }}>
            {children}
        </ContextPage.Provider>
     )
}

export default ContextPage;