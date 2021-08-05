
export default class ex
{

    convert_string_obj_to_Obj3d_or_undefined(Object3D,ina="obj3d")
    {
        if(typeof(Object3D) == "string")
        
        {
                if (this[ina].hasOwnProperty(Object3D) == false) 
                {
                    throw `${Object3D} does notexists in Object3d`
                }   
                else
                {
                    Object3D=this[ina][Object3D]
                }
        }
        return Object3D
    }

    hoc(M,mo,G,go,name,Object3D="scene")
    {
    console.log(this.kvo.hasOwnProperty(name),name,this.geometry.hasOwnProperty(G),"G",G,"mo",mo,this.material.hasOwnProperty(M),"M",M,"Object3D",Object3D)
    console.log(typeof(Object3D) == "string")
        let parent_name= Object3D
        if(this.kvo.hasOwnProperty(name) == true) 
            {
                throw `${name} exists in kov`
            }
        if (this.geometry.hasOwnProperty(G) == false) 
        {
            throw `${G} does notexists in geometry`
        }
        if (this.material.hasOwnProperty(M) == false) 
        {
            throw `${M} does notexists in material`
        }
        Object3D=this.convert_string_obj_to_Obj3d_or_undefined(Object3D)
        this.makematerial(name,this.material[M],mo,this.geometry[G],go,Object3D,parent_name)
        
    }
    addin_obj(addin,obj3d,pname,struct)
    {
        addin.add(obj3d)
        this.map_struct_key_value[pname].children[struct.name]=struct
                this.map_struct_key_value[struct.name]=struct
    }



};
