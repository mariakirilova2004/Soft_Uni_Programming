function solve(object){
        let methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
        let uriPattern = /^([a-zA-Z\.0-9]+|\*)$/;
        let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0' ];
        let msgPattern = /^[^<>&'"\\]*$/;
    
        if(!object.hasOwnProperty('method') || !methods.includes(object.method)){
            throw new Error('Invalid request header: Invalid Method');
        } else if(!http.hasOwnProperty('uri') || !uriPattern.test(object.uri)){
            throw new Error('Invalid request header: Invalid URI');
        } else if(!http.hasOwnProperty('version') || !versions.includes(object.version)){
            throw new Error('Invalid request header: Invalid Version');
        } else if(!http.hasOwnProperty('message') || !msgPattern.test(object.message)){
            throw new Error('Invalid request header: Invalid Message');
        } else {
            return http;
        }
}

console.log(solve({
    method: 'POST',
    uri: 'home.bash',
    version: 'HTTP/2.0'
}));