class custom
{

    
//  name:"name$string",parent:"scene@Object3d@Mesh",material:"MeshPhongMaterial^moptions@options.material",
// moptions={color: "0xCC8866$pallet"},geometry:"PlaneGeometry^goption@options.material",
// goption:["50=x$number", "50=y$number"]  
// "tellme ground","tellme"
    create(type="Mesh",data={name:"tellme ground",parent:"tellme",material:"MeshPhongMaterial",moptions:{color: 0xCC8866},geometry:"PlaneGeometry",goption:["50", "50"]})
    {
   
        if(Object.keys(data).length == 0)
        {
            return 401
        }
       let a= this.type_method_attri_controler[type]["@custom"].create
        // console.log(Object.keys(a))
        
        if(this.checkifallarepresent(Object.keys(a),Object.keys(data)))
       {
           let b=[]
            b.push(["name",this.check_clean_data(a.name,data.name)])
            b.push(["parent",this.check_clean_data(a.parent,data.parent)])
            b.push(["material",this.check_clean_data(a.material,data.material)])
            b.push(["geometry",this.check_clean_data(a.geometry,data.geometry)])


            try {
            
                try {
                    let c=this.type_method_attri_controler[data.material]["@custom"].create.moptions
                    let k=[]
                    Object.keys(c).forEach(e=>{
                        // k[`${e}`]
                        // console.log(`${e}`,this.check_clean_data(c[`${e}`],data.moptions[`${e}`]),c[`${e}`],data.moptions[`${e}`])
                        k.push([`${e}`,this.check_clean_data(c[`${e}`],data.moptions[`${e}`])])


                    })
                    b.push(["moptions",k.some((element) => element[1] == false)  !=true,k])

                } catch (error) {
                    
                }
                
                try {
                
                    let d=this.type_method_attri_controler[data.geometry]["@custom"].create.goption
                
                    k=[]
                    d.forEach(e=>{
                        // k[`${e}`]
                        // console.log(`${e}`,this.check_clean_data(c[`${e}`],data.moptions[`${e}`]),c[`${e}`],data.moptions[`${e}`])
                        k.push([`${e}`,this.check_clean_data(c[`${e}`],data.goption[`${e}`])])


                    })
                    b.push(["goption",k.some((element) => element[1] == false)  !=true,k])

                
                } catch (error) {
                    
                }
                

                    // console.log(b,this.check_clean_data(a.name,data.name),a.name,data.name)
                    // console.log(b,this.check_clean_data(a.parent,data.parent),a.parent,data.parent)
                    // console.log(b,this.check_clean_data(a.material,data.material),a.material,data.material)
                    // console.log(b,this.check_clean_data(a.geometry,data.geometry),a.geometry,data.geometry)
                    // console.log(c,d)
                    // console.log(k)
                    // console.log(b)
                    
                } catch (error) {
                 console.log(error)       
                }

                if(b.some((element) => element[1] == false)  !=true)
                {
                    this.$.Mesh(data.name,data.parent,data.material,data.moptions,data.geometry,data.goption)
                     this.$$.Mesh["tellme ground"].rotation.x = Math.PI * -.5;
      
                    return 200
                }
                else
                {
                    return [400,b]
                }
                
            // return  
                    //true (thre is error)              !=  true    (false)
                    //false                                 !=ture  (true)
        } 
       else
       {
        // console.log(false)
            return 402
        } 

    }

    checkifallarepresent(a,b)
    {

        return  a.filter((ev,i)=>{   //return true if element N0000t present
            // console.log("in", b.find(e=>e==ev), b.find(e=>e==ev) == undefined )    
            return b.find(e=>e==ev) == undefined    //u should find element for lenght >0 and thus if u dont find it is true  
        }).length == 0    //ie 0 if all elemnt is present
    }

    check_clean_data(e="scene@Object3D@Mesh",v='scene')
        // e="name$string",v="name")
    {
        // console.log(e.match("\$") != null,e.match("\@") != null)
        
        
        if(e.match("\@") != null )
        {
            // console.log("#")
            return this.lookin_at_for_option(e,v)           
        }
        else
        if(e.match("\$") != null )
        {
            // console.log(typeof(v) == e.split("$")[1],typeof(v) ,v, e.split("$")[1])
            return typeof(v) == e.split("$")[1]
        }
        
    }

    
    lookin_at_for_option(e="scene@Object3D@Mesh",v='scene')
    {
        let a=e.split("@")
        let b=false
        for(let i=1;i<a.length;i++)
        {
            // console.log(this[a[i]]
            //     .find(element =>  
            //     element == v
            //  )
            //  )
            if (this[a[i]].find(element =>    element == v) != undefined)
            {
                b=true
            }


            // b.push(v)
                   }

        return b

    }
/////////////////////////////////creation

    delete(obj)
    {
        obj.in.forEach(ev=>delete this.$$[ev][obj.name])
        
        obj.parent.remove(obj)

        
    }
}
export default custom;



    
// lookin_at_for_option(e="scene@Object3D@Mesh")
// {
//     let a=e.split("@")
//     let b=[]
//     for(let i=1;i<a.length;i++)
//     {
//         let v={};
//         v[`${a[i]}`]=this[a[i]]
//         b.push(v)
//         // console.log(a[i],this[a[i]],v)
//     }

//     return b

// }

    // return_options_or_new_form(For="parent",type="Mesh",data={})
    // {
    //     let a= this.type_method_attri_controler[type]["@custom"].create
    //     // console.log(a,For,type,data)
    //     if(For =="parent")
    //     {
    //         //  console.log("parent true")
    //         return this.lookin_at_for_option(a["parent"])
    //     }
