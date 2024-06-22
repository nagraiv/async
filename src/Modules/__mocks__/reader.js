let count = 0;

export default function read() {
    count += 1;
    return new Promise((resolve, reject) => {
        switch (count % 3) {
            case 1:
                // эмуляция чтения файла
                setTimeout(() => {
                    const data = '{"id":10,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","type":"killer","level":10,"points":2000}}';
                    return (input => {
                        const buffer = new ArrayBuffer(input.length * 2);
                        const bufferView = new Uint16Array(buffer);
                        for (let i = 0; i < input.length; i++) {
                            bufferView[i] = input.charCodeAt(i);
                        }
                        resolve(buffer);
                    })(data);
                }, 1000);
                break;
            case 2:
                // эмуляция чтения файла
                setTimeout(() => {
                    const data = '[{"id":10,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}},{"id":20,"created":1546300800,"userInfo":{"id":5,"name":"Verner","level":3,"points":400}}]';
                    return (input => {
                        const buffer = new ArrayBuffer(input.length * 2);
                        const bufferView = new Uint16Array(buffer);
                        for (let i = 0; i < input.length; i++) {
                            bufferView[i] = input.charCodeAt(i);
                        }
                        resolve(buffer);
                    })(data);
                }, 1000);
                break;
            case 0:
                reject(new Error('file reading failed!'));
                break;
        }
    });
}
