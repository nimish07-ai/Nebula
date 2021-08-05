
export default function proxy_creator_map_struct_key_value()
{

    // apply?(target: T, thisArg: any, argArray: any[]): any;
    // construct?(target: T, argArray: any[], newTarget: Function): object;
    // defineProperty?(target: T, p: string | symbol, attributes: PropertyDescriptor): boolean;
    // deleteProperty?(target: T, p: string | symbol): boolean;
    // get?(target: T, p: string | symbol, receiver: any): any;
    // getOwnPropertyDescriptor?(target: T, p: string | symbol): PropertyDescriptor | undefined;
    // getPrototypeOf?(target: T): object | null;
    // has?(target: T, p: string | symbol): boolean;
    // isExtensible?(target: T): boolean;
    // ownKeys?(target: T): ArrayLike<string | symbol>;
    // preventExtensions?(target: T): boolean;
    // set?(target: T, p: string | symbol, value: any, receiver: any): boolean;
    // setPrototypeOf?(target: T, v: object | null): boolean;
    
    // Reflect.set(duck, 'eyes', 'black');
    // Reflect.ownKeys(duck);
    // {
    //     self:this.scene,
    //     name:"scene",
    //     parent:null,
    //     cstate:{},
    //     children:[],
    // }

    return {
        get:(obj,key)=>{
            console.log(key)
            if(["name","parent","children","self","cstate"].indexOf(key) > -1)
            {
                console.log("1") 
                return Reflect.get(obj,key)
            }  
            // // else
            // console.log(Reflect.has(obj.self,key))
            if(Reflect.has(obj.self,key))
            {
                // console.log(!Reflect.has(obj.cstate,key))
                if(!Reflect.has(obj.cstate,key))
                {
                    Reflect.set(obj.cstate,key,Reflect.get(obj.self,key))
                }
                return Reflect.get(obj.self,key)
            }
            return false

        },
        set:(obj,key,val)=>{

            console.log(obj,key,val)
            if( key in ["name","parent","children","self","cstate"])
            {
                return Reflect.set(obj,key,val)
            }
            
            console.log(Reflect.has(obj.self,key))
            if(Reflect.has(obj.self,key))
            {
                Reflect.set(obj.cstate,key,val)
                return Reflect.set(obj.self,key,val)
            }

            
        },
        has: function (oTarget, sKey) {
            return Reflect.has(oTarget, sKey);
          },
        deleteProperty: function (oTarget, sKey) {
            
            if (Reflect.has(oTarget,sKey)) 
                { return Reflect.deleteProperty(oTarget,sKey) }
            else{
                return false
            }
          },
    };
    
}