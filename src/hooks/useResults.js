import React, {useState, useEffect} from "react";
import yelp from "../api/yelp";



const SearchResults = () => {
     const[errormessage, setError] = useState(""); 
    const[results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    
    
    


    const searchApi = async (term) => {
        setLoading(true);
        try{
        const response = await yelp.get("/search", {
            params : {
                limit : 50,
                term ,
                location : "georgia"
            }
        });

        

        //console.log(response.data.businesses);
        /*if(response) {
            setLoading(false);
        } */
        setLoading(false);
        setResults(response.data.businesses);

    }
    catch(err){
        setError("Something Went Wrong");

    }

    }

   

    return [searchApi, results, errormessage, loading];

}


export default SearchResults;


