// const gridHelper = new THREE.GridHelper( size, divisions );
// scene.add( gridHelper );
class make
{


    Object3d(name,addin="scene")
    {
        if (this.props.Object3D.hasOwnProperty(name) ==false)
        {
        

            let a=addin
            const addin2=this.convert_string_obj_to_Obj3d_or_undefined(addin)
            const obj3d=new this.THREE.Object3D();
            obj3d.name=name
    
            // addin2.add(obj3d)
            // console.log(this.make_state_obj(obj3d,name,a))
            //////////////////////////////
            this.addin_obj(addin2,obj3d,a)

            this.props.Object3D[name]=obj3d

            // if this.production == false
            let gridHelper = new this.THREE.GridHelper( 10, 100 );
            gridHelper.visible=false
            obj3d.add( gridHelper );

        }
        else
        {
            console.log(name,"present in","cam")
        }
    }


    Mesh(name,parent="scene",material="MeshPhongMaterial",moptions={color: 0xCC8866},geometry="PlaneGeometry",goption=[50, 50])
    {
    
        if (this.props.Mesh.hasOwnProperty(name) ==false)
        {
            const groundGeometry = new this.THREE[`${geometry}`](...goption);
            groundGeometry.name=name
            const groundMaterial = new this.THREE[`${material}`](moptions);
            groundMaterial.name=name
            const groundMesh = new this.THREE.Mesh(groundGeometry, groundMaterial);
            groundMesh.name=name
            this.props.Mesh[name]=groundMesh;
            this.props[geometry][name]=groundGeometry;
            groundMesh.in=["Mesh",geometry]
            
            /////////////////////////////////////
            this.addin_obj(this.convert_string_obj_to_Obj3d_or_undefined(parent),groundMesh,parent)

            // if this.production == false
            // let gridHelper = new this.THREE.GridHelper( 10, 100 );
            // gridHelper.visible=false
            // .add( gridHelper );
        }
        else
        {
            console.log(name,"present in","mesh")
        }
    
    }

    replacematerial()
    {

    }
    replacegeometry()
    {
        
    }


    Pcamera(name,lookat=[0,0,0],setat=[8, 4, 10],fov = 40,orbitor=false,addin="scene") {
        if (this.props.cam.hasOwnProperty(name) ==false)
        {
            const aspect = window.innerWidth/window.innerHeight; 
            const zNear = 0.1;
            const zFar = 1000;
            const camera=new this.THREE.PerspectiveCamera(fov, aspect, zNear, zFar);
            camera.lookAt(...lookat);
            camera.position.set(...setat).multiplyScalar(3);
            camera.name=name


            this.props.cam[name]={cam:camera}
            this.props.PerspectiveCamera[name]={cam:camera}
            this.props.cam[name].cam.in=["cam","PerspectiveCamera"]
            
            //////////////
            if(addin != null)
            {
                this.addin_obj(this.convert_string_obj_to_Obj3d_or_undefined(addin),camera,)
        
            }


            if(orbitor)
            {                
                this.props.cam[name].orbitor = new this.OrbitControls( this.props.cam[name].cam, this.canvas);
                let a= new this.OrbitControls( this.props.cam[name].cam, this.canvas);
                // this.props.cam[name].cam.add(a)
                // console.log(a)
            }
        }
        else
        {
            console.log(name,"present in","cam")
        }
    }

    Dlight(name,position=[0, 1, 0],castShadow=false,addin="scene")
    {    
        if (this.props.light.hasOwnProperty(name) == false )
        {
            let baselight = new this.THREE.DirectionalLight(0xffffff, 1);
            baselight.position.set(...position);
            baselight.name=name
            ////////////////////////////////////
            // console.log("li")
            this.props.light[name]=baselight
            this.props.DirectionalLight[name]=baselight
            this.addin_obj(this.convert_string_obj_to_Obj3d_or_undefined(addin),baselight,)
            baselight.castShadow = castShadow;
  
        }
        else
        {
            console.log(name,"present in","light")
        }
    }


    
    addin_obj(addin,obj3d,pname,struct,name)
    {
        addin.add(obj3d)
        // this.map_struct_key_value[pname].children[struct.name]=struct
        //         this.map_struct_key_value[name]=struct
    }

    convert_string_obj_to_Obj3d_or_undefined(Object3D,ina="Object3D")
    {
        if(typeof(Object3D) == "string")
        
        {
                if (this.props[ina].hasOwnProperty(Object3D) == false) 
                {
                    throw `${Object3D} does notexists in Object3d`
                }   
                else
                {
                    Object3D=this.props[ina][Object3D]
                }
        }
        return Object3D
    }

}
export default make;