import React, {useState, useEffect} from "react";
import yelp from "../api/yelp";



const SearchResults = () => {
     const[errormessage, setError] = useState(""); 
    const[results, setResults] = useState([]);
    
    


    const searchApi = async (term) => {
        try{
        const response = await yelp.get("/search", {
            params : {
                limit : 50,
                term ,
                location : "georgia"
            }
        });
        setResults(response.data.businesses);
    }
    catch(err){
        setError("Something Went Wrong");

    }

    }

   

    return [searchApi, results, errormessage];

}


export default SearchResults;


