function solve(commands){
    //scope object for result
    let resultObj = {};

    // function libraty for requiered operations/manipulations for the task:
    // name parameter (argument) - name of the object that have to be manipulated or created
    // parentName parameter (argument) - name of the object that has to be set as prototype pf another object
    let funcLibrary = {
        inherit(name, parentName){
            //console.log(this);
            resultObj[name] = Object.setPrototypeOf(resultObj[name], resultObj[parentName]);
        },
        create(name){
            if(!resultObj[name]) // It has a not clause in the logical expression
            {
                resultObj[name] = {};
            }
        },
        set(name, key, value){
            if(resultObj[name]){
                
                //both cases - if key already exist assign new value, otherwise create new prop in the object from the key and set value.
                resultObj[name][key] = value;
            }
        },
        print(name){
            let propArr = [];
            for (const key in resultObj[name]) {
                propArr.push(`${key}:${resultObj[name][key]}`);
            }
            console.log(propArr.join(','));
        }
    };

    //splitting the array of string representing commands into subarray of single word based values - matrix, a.k.a. nested arrays:
    let commandTokens = commands.map(e => e.split(' '));

    for (let i = 0; i < commandTokens.length; i++) {
        
        // the command that actually identifire the operation
        //request additional checking in the case of 'create' and/or 'set', because of differences in pattern behaviour
        let mainCommand = commandTokens[i][0];

        //sorry for magic values :D
        if(mainCommand === 'create' && commandTokens[i].length > 2){ // checking for create function with additional request for inheritance

            let objName = commandTokens[i][1]; // object for creating and then inherits another one;
            let prototypeNameObj = commandTokens[i][3]; // prototype object

            funcLibrary[mainCommand](objName); // creating new object
            funcLibrary.inherit(objName, prototypeNameObj); // set prototype from existing object to newly created one

        } else if(mainCommand === 'set'){

            // set function with parameters (name, key, value)
            funcLibrary[mainCommand](commandTokens[i][1], commandTokens[i][2], commandTokens[i][3]); 
        } else{
            funcLibrary[mainCommand](commandTokens[i][1]); //print or create function with parameter (name)
        }
    }
}

solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);