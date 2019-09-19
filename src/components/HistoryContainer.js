import React, { useState, useEffect } from 'react';

const HistoryContainer = () => {
    // let alarms = [];
    const [alarmsHistory, setAlarmsHistory] = useState(['']);
   
    chrome.storage.sync.get({
    	list:[] //put defaultvalues if any
	},
		function(data) {
		   console.log(data.list);
		   setAlarmsHistory(data.list);
		}
    )
   
	    return (
		    <div className="tasks-container">
			    <ul>
		          {alarmsHistory.reverse().map(function(listValue){
		            return <li>{listValue}</li>;
		          })}
		        </ul>
	        </div>
	  );
    
	};
export default HistoryContainer;   	