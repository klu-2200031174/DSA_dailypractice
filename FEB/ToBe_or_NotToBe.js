var expect=function(val){
    const obj={
        toBe:function(expected){
            if(val===expected){
                return true;
            }
            else{
                throw new Error("Not Equal");

            }
        },
            notToBe:function(expected){
                if(val!==expected){
                    return true;
                }
                else{
                    throw new Error("Equal")
                }

            }

        };
        return obj;

    };
