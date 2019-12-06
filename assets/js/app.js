

document.addEventListener('DOMContentLoaded',function(){
    let _CALENDAR_ELEMENT = document.getElementById('calendar');

    var _CALENDAR = new FullCalendar.Calendar(_CALENDAR_ELEMENT , {
        plugins: ['dayGrid'],


        eventSources: [
            
        //shipping
            {
                events:[
                    {
                        title: '5889',
                        start: '2019-12-13',
                        end: '2019-12-31'
                    },
                    {
                        title: '5880',
                        start: '2019-12-12',
                        end: '2019-12-31'
                    }
                ],
                color: '#1ab394'
            },
        //laycan
            {
                events:[
                    {
                        title: '5889-laycan',
                        start: '2019-12-14',
                        end: '2019-12-31'
                    },
                    {
                        title: '5880-laycan',
                        start: '2019-12-13',
                        end: '2019-12-31'
                    }
                ],
                color: '#1ab39480'

            }

        ]

    });


    _CALENDAR.render();
});