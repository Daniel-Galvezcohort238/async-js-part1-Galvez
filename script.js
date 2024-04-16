class EventHandlers {
    constructor() {
        const log = document.querySelector(".event-log");

        document.querySelector("#xhr").addEventListener('click', () => {
            log.textContent = '';

            const xhr = new XMLHttpRequest();

            console.log(xhr.addEventListener('loadend', () => {console.log('y/n')}))

            xhr.addEventListener('loadend', () => {
                log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
            });

            console.log(xhr.open);
            console.log(xhr.send);

            xhr.open(
                'GET',
                'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json',
            );
            xhr.send();
            log.textContent = `${log.textContent}Started XHR request\n`;
        });

        document.querySelector('#reload').addEventListener('click', () => {
            log.textContent = '';
            document.location.reload();
        })
    }
}

const eventHandlers = new EventHandlers();

class Callbacks {
    constructor() {

        function doStep1(init, callback) {
            const result = init + 1;
            console.log(callback);
            callback(result);
        }
        function doStep2(init, callback) {
            const result = init + 2;
            callback(result);
        }
        function doStep3(init, callback) {
            const result = init + 3;
            callback(result);
        }

        function doOperation() {
            doStep1(0, (result1) => {
                doStep2(result1, (result2) => {
                    doStep3(result2, (result3) => {
                        console.log(`result: ${result3}`)
                    })
                })
            })
        }

        doOperation();
    }
}

const callbacks = new Callbacks();