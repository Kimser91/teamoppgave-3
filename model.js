let html = document.getElementById('app');

const model = {              
    data: {                  
        panels: 
        [
            {
                Id: 1,
                name: 'bonnet',
                color: 'red',
                side: 'front'
            },
            {
                Id: 2,
                name: 'frontdoor',
                color: 'white',
                side: 'right'
            },
            {
                Id: 3,
                name: 'reardoor',
                color: 'white',
                side: 'right'
            },
            {
                Id: 4,
                name: 'frontdoor',
                color: 'white',
                side: 'left'
            },
            {
                Id: 5,
                name: 'reardoor',
                color: 'white',
                side: 'left'
            },
            {
                Id: 6,
                name: 'rearhatch',
                color: 'white',
                side: 'back'
            },
        ],

        objectsInRoad: [
            
            {
                name: 'spraycan',
                value: 1,
                color: 'red'
            },
            {
                name: 'dice',
                value: 1,
                color: 'pink'
            },
            {
                name: 'exhaust',
                value: 1,
                color: 'chrome'
            },
            {
                name: 'wunderbaum',
                value: 10,
                color: 'green'
            }

        ],

        hasDone: false,
    },

}