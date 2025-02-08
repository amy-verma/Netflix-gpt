import { GoogleGenerativeAI } from "@google/generative-ai";

import { useSelector } from "react-redux";
import lang from "../util/languageConstants";
import { useRef } from "react";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config.lang);

    const searchText = useRef(null);
    // const genAI = new GoogleGenerativeAI(
    //     "AIzaSyDT01hAsCxCV0T_AsSkKjM4qmw1X_p-y0s"
    // );


    // const handleGptSearchClick = async () => {
    //     console.log(searchText.current.value);
    //     //Make an API call to GPT API get Movie Results

    //     const gptQuery =
    //         "Act as a Movir Reccomemndation system and suggest some movies for the query : " +
    //         searchText.current.value +
    //         ".only give me names of 5 movies,comma seperated like the example results given ahead.Example Results: Gadar,Sholay,Golmal,Hera Pheri,Koi Mil Gaya";

    //     const gptResults = await openai.chat.completions.create({
    //         messages: [{ role: "user", content: gptQuery }],
    //         model: "gpt-4",
    //     });
    //     console.log(gptResults.choices)
    // };
     const genAI = new GoogleGenerativeAI("AIzaSyDT01hAsCxCV0T_AsSkKjM4qmw1X_p-y0s");

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        //Make an API call to GPT API get Movie Results

        const gptQuery =
            "Act as a Movir Reccomemndation system and suggest some movies for the query : " +
            searchText.current.value +
            ".only give me names of 5 movies,comma seperated like the example results given ahead.Example Results: Gadar,Sholay,Golmal,Hera Pheri,Koi Mil Gaya";

            try{
                const model=genAI.getGenerativeModel({model:"gemini-pro"});
                const result=await model.generateContent(gptQuery);
                const response=await result.response.text();
                console.log("Gemini AI Response",response.split(","))

            }catch(error){
                console.log("Error1",error)

            }
       
        // console.log(gptResults.choices)
    };
    return (
        <div className="pt-[10%] flex justify-center">
            <form
                className="bg-black w-1/2 grid grid-cols-12"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    className="p-4 m-4 col-span-9"
                    type="text"
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button
                    className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3 rounded-lg"
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
