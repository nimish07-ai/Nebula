import Base from "/src/three-base/base.js";
import custom from"/src/three-base/customfunction.js"
// #- dynamic @-look in 
class seven extends custom
{
 type_method_attri_controler={ //available to plugin try to show minimal
                             // typeofdata ,widige to be rendered,

        "Object3D":{
                    "castShadow":["Boolean","#switch"],
                    "position":{
                        "x":["number","#TextField"],
                        "y":["number","#TextField"],
                        "z":["number","#TextField"],
                    },
                    "rotation":{
                        "x":["number","#TextField"],
                        "y":["number","#TextField"],
                        "z":["number","#TextField"],
                    },
                    "scale":{
                        "x":["number","#TextField"],
                        "y":["number","#TextField"],
                        "z":["number","#TextField"],
                    },
                    "visible":["Boolean","#switch"],                 
                },
    "Mesh":{
        "castShadow":["Boolean","#switch"],
        "position":{
            "x":["number","#TextField"],
            "y":["number","#TextField"],
            "z":["number","#TextField"],
        },
        "rotation":{
            "x":["number","#TextField"],
            "y":["number","#TextField"],
            "z":["number","#TextField"],
        },
        "scale":{
            "x":["number","#TextField"],
            "y":["number","#TextField"],
            "z":["number","#TextField"],
        },
        "visible":["Boolean","#switch"],    
        "@custom":{
   
            "create":{
                    name:"name$string",parent:"scene@Object3D@Mesh",material:"MeshPhongMaterial^moptions@material",moptions:{color: "0xCC8866=color$number"},geometry:"PlaneGeometry^goption@geometry",goption:["50=x$nuber", "50=y$number"]
                    },
            "delete":{mesh:"@Mesh"}
        }       
    },
    "PlaneGeometry":{
        "Base":"Mesh",
        "@custom":{
            "create":{goption:["50=x$number", "50=y$number"]}
        }
    },  
    "MeshPhongMaterial":{
        "@custom":{
            "create": {moptions:{color: "0xCC8866$number"}
        
        }
    }
    },
    "Camera":{}
 }
//  cam:{},
//             Object3D:{},
//             light:{},
//             Mesh:{},
//          load:{},
mapper={
    "Object3D":"Object3D"  ,
    "Light":"light",
    "Camera":"cam",
    "PerspectiveCamera":"cam",
    "DirectionalLight":"light",

}
    constructor()
    {
        super()
        this.base= new Base()
        this.$=this.base
        this.$$=this.base.props
        this.set_getter_setter()
    }
    set_getter_setter()
    {
        // let ev="light"
        Object.keys(this.type_method_attri_controler).forEach(ev => {
            Object.defineProperty(this,ev,{
                get (a)
                {
                    return Object.keys(this.base.props[ev])
                }
            })
        });
    }

    check_name_present_in_type(name,type)
    {
        // i)
        if(Reflect.has(this.$$,type))
        {
            if(Reflect.has(this.$$[type],name))
            {

                return true
            }
            else
            {
                throw(`${name} not found in ${type} not found`)    
            }

        }
        else
        {
           console.log(`${type} type not found`)
        }
        
    }
    
    get_children_of(name,type)
    {
        if(this.check_name_present_in_type(name,type))
        {
            let a= this.$$[type][name] 
            if (type != "cam")
            {
                let b=[]
                a.children.forEach(ev=>
                        {
                        console.log(ev.name,this.mapper[`${ev.type}`])
                        
                        })
            }
            else
            {
                throw (`cont work with cam`)
            }
        }

    }
 
    preprocess()
    {
        
    }
    // // perform(name='name of obj',type='type in props',comand='eg position.x',newValue="")
    // perform(newValue=false,name='tellme ground',type='Mesh',comand='visible')
    // ,newValue="")
    perform(newValue,name,type,comand)
    {   
        console.log(newValue,name,type,comand)
        if (newValue == "true")
        {
            newValue=true

        }
        else
        if (newValue == "false")
        {
            newValue=false
        }
        
        // name,type,comand,newValue=preprocess()
        console.log(typeof(newValue))
        let a=this.$$[type][name]
        let b=comand.split(".")
        if (b.length >1)
        {
            b.forEach((ev,index)=>{
                if(index < b.length-1)
                {
                    console.log(ev)
                    a=a[ev]
                }
                else
                {
                    console.log(ev,"valueset")
                    a[ev]=newValue
                    console.log(a[ev])
                }
            })
        }
        else
        {
            console.log(comand,"valueset")
            a[comand]=newValue
            console.log(a[comand],a)
        }
    
         }
  
    request_for_data()
    {
        let response={}


        return response
    }


    material=["MeshPhongMaterial"]
    geometry=["PlaneGeometry"]

    //  cam:{},
//             Object3D:{},
//             light:{},
//             Mesh:{},
//          load:{},
    navoptions=["Object3D","Mesh","Camera","Light","Load"]
    nav_options()
    {
        return this.navoptions
    }
    specific_catogey_options(e)
    {
        // e=this.mapper[e]
        // console.log(e,this.navoptions,this.navoptions.includes(e))
        if(this.navoptions.includes(e) || e=="Mesh" )
        {
            let a=this[e]
            if(a == undefined)
            {
                a=[]
            }
            let b={}
            Object.assign(b, this.type_method_attri_controler[e])
            // clean()
            return {
                    objects:a,
                    methods:b,
                    type:e
                }
        }
        else
        {
            return 400
        }
    }

    setAttr(a,b)
    {
        a.push(b)
    }
    specific_object_options(a,b,L)
    {
        if(this.check_name_present_in_type(b,a))
        {
            let d= this.$$[a][b]
            let c={}
            Object.assign(c,this.type_method_attri_controler[a])
            c = JSON.parse(JSON.stringify(this.type_method_attri_controler[a]));
            if(Object.hasOwnProperty(c,"Base"))
            {
                // this.type_method_attri_controler                  
            }
            
            for (let x in c)
            {
                if (x != "@custom")
                {

                    if(Array.isArray(c[x]))
                    {
                        // console.log(x)
                        try {
                            this.setAttr(c[x],d[x])
                        } catch (error) {
                         
                            delete c[x]
                        }
                        
                    }
                    else
                    {
                        for (let y in c[x])
                        {
                            if(Array.isArray(c[x][y]))
                            {
                                // console.log(x,y)
                                try {
                                    this.setAttr(c[x][y],d[x][y])
                                } catch (error) {
                                 
                                    delete c[x][y]
                                }
                            }
                        }
                    }
                }
                else
                {

                }

                
                
            }
            return c
        }
        
    }


}

// export default seven
window.Seven=new seven()
window.$=Seven
// function client()
// {
//     // give me all option in nav bar
//     let a= $.nav_options()
//     console.log(a)
//     // for a specific catogey give me all aptions available
//     let b=$.specific_catogey_options(a[0])   
//     console.log(b)
//     //  for a givren obj give me all optiions on it
//     let c=$.specific_object_options(a[0],b.objects[0])
//     console.log(c)

// }
// client()


function setCanvas()
{
    
}