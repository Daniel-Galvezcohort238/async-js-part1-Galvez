class EventHandlers {
    constructor() {
        const output = document.getElementById('output1')

        document.querySelector("#xhr").addEventListener('click', () => {
            output.textContent = '';

            const xhr = new XMLHttpRequest();

            xhr.addEventListener('loadend', () => {
                output.textContent = `${output.textContent}Finished with status: ${xhr.status}. Response: ${xhr.response}`;
            });

            console.log(xhr.open);
            console.log(xhr.send);

            xhr.open(
                'GET',
                'https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json',
            );
            xhr.send();
            output.textContent = `${output.textContent}Started XHR request.\n`;
        });

        document.querySelector('#reload').addEventListener('click', () => {
            output.textContent = '';
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