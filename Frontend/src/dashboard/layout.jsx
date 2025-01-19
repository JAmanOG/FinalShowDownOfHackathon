import React, { useEffect } from "react";
import Competitors from "./competitors";
import Insights from "./insights";
import Painpoints from "./painpoints";
import SentimentDonutChart from "./SentimentDonutChart";
import Engagement from "./engagement";
import Reports from "./reports";
import { data } from "../../constant";


const Layout = () => {
    console.log("data",data);
    const messageText = data.dataState.dataState.outputs[0].outputs[0].results.message.data.text;
    console.log("output",messageText);
    // console.log(messageText);


    return (
        <div>
                <>
                    <Competitors messageText={messageText} />
                    {/* <SentimentDonutChart sentiment={sentiment} /> */}
                    <Reports messageText={messageText} />
                    <Insights messageText={messageText} />
                    <Painpoints messageText={messageText} />
                    <Engagement messageText={messageText} />
                </>
        </div>
    );
};

export default Layout;