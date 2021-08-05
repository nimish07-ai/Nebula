import * as THREE from 'http://127.0.0.1:5500/three/build/three.module.js';
import {OrbitControls} from 'http://127.0.0.1:5500/three/examples/jsm/controls/OrbitControls.js';
import {GUI} from 'http://127.0.0.1:5500/three/examples/jsm/libs/dat.gui.module.js';
import makejs from "http://127.0.0.1:5500/src/makejs.js"
window.tr=THREE

class base extends makejs
{
    constructor()
    {
        super();
        window.canvas=document.createElement("canvas");
        canvas.width=window.innerWidth
        canvas.height=window.innerHeight
        document.body.append(canvas)
        this.gui = new GUI();
        this.renderer = new THREE.WebGLRenderer({canvas});
        this.renderer.setClearColor(0xAAAAAA);
        this.renderer.shadowMap.enabled = true;

        this.scene = new THREE.Scene();        
        
        this.props_and_variable_creator()
        this.obj3d["scene"]=this.scene;



        this.ctr=this.basecamera
        this.rend=this.rend.bind(this)
        this.schedule()
        this.ctr=this.basecamera
        this.rend=this.rend.bind(this)
        requestAnimationFrame(this.rend)
        
    }
    base_setup()
    {
        // this.obj3d["scene"]=this.scene;
        this.axesHelper_base = new THREE.AxesHelper( 50 );
        this.scene.add( this.axesHelper_base );
        this.basecamera = this.makeCamera('base');
        this.basecontrols = new OrbitControls( this.basecamera, this.canvas );
    
    
        this.baselight = new THREE.DirectionalLight(0xffffff, 1);
        this.baselight.position.set(0, 1, 0);
        this.scene.add(this.baselight);
        this.baselight.castShadow = true;
        this.baselight.shadow.mapSize.width = 2048;
        this.baselight.shadow.mapSize.height = 2048;
        
            
        const groundGeometry = new THREE.PlaneGeometry(50, 50);
        const groundMaterial = new THREE.MeshPhongMaterial({color: 0xCC8866});
        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
        groundMesh.rotation.x = Math.PI * -.5;
        this.scene.add(groundMesh);      
    }

    props_and_variable_creator()
    {
        this.objects=[]
        this.kvo={}
        this.struct={
                self:this.scene,
                name:"scene",
                parent:null,
                cstate:{},
                children:{},
            }
        this.map_struct_key_value={"scene":this.struct}
        this.obj3d={}
        this.cam={}
        this.props={
            objects_list:this.map_struct_key_value,
        }
    }

    rend(time)
    {
        time *= 0.001;

        this.renderer.render(this.scene, this.ctr);
        // requestAnimationFrame(this.rend)
    }

    resolver(pro)
    {
        // console.log(pro)
        // console.log(this[this.procedure_list[pro[0]]])
        // (...pro[1])
        this[this.procedure_list[pro[0]]](...pro[1])
        
    }
    
    material={
        0:"MeshPhongMaterial"
    }

    geometry={
        0:"PlaneGeometry",
        1:"SphereGeometry"
    }
    procedure_list={
        0:"makeCamera",
        1:"makeobject3d",
        3:"hoc"
    }
    
    schedule()
    {
        // console.log("sch")
        // const procedure=[
        // [3,[0,{color: 0xCC8866},1,[50, 50],"t"]]
        // ]
        // procedure.forEach(ev=>{this.resolver(ev)})
        // this.loader = new THREE.ObjectLoader();

    }


    feature_obj_map=
    {
        0:{
            "name":"PlaneGeometry",
            "options":""
        
        }
    }

}
export default base;