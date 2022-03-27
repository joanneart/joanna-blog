import React, { useEffect } from "react";

export default function Timeout(){
    useEffect(() => {
        window.scrollTo({top: 0});
    },[])
    return(
        <div className="error"><h4>Strona niedostępna, przepraszamy za niedogodności</h4></div>
    )
}