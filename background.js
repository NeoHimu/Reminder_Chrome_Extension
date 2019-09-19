
// listener for alarm, execute when an alarm has elasped
chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("alarm", alarm);
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'notification32.png',
        title: 'Reminder',
        message: alarm.name,
        buttons: [{
            title: 'Skip'
        }],
        priority: 0,
		requireInteraction: true
    });
    const audio = new Audio('./Old-alarm-clock-sound.mp3');
    audio.play();

    // retrieve the old list and add the current into the history
                chrome.storage.sync.get({
                        list:[] //put default values if any
                    },
                    function(data) {
                       console.log(data.list);
                       update(data.list, alarm.name + " at "+new Date().toLocaleString()); //storing the storage value in a variable and passing to update function
                    }
                );  


})

 function update(array, element)
       {
            array.push(element);
            //then call the set to update with modified value
            chrome.storage.sync.set({
                list:array
            }, function() {
                console.log("added to list with new values");
            });
        }

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     console.log('tabId, changeInfo, tab', tabId, changeInfo, tab);
//     chrome.storage.sync.get('alarmData', (storage) => {
//         console.log('storage', storage);

//         if (storage.alarmData.length) {

//         } else {

//         }
//     });
// })