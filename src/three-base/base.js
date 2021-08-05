import * as THREE from 'http://127.0.0.1:5500/three/build/three.module.js';
import {OrbitControls} from 'http://127.0.0.1:5500/three/examples/jsm/controls/OrbitControls.js';
import {FBXLoader} from 'http://127.0.0.1:5500/three/examples/jsm/loaders/FBXLoader.js';
import {GLTFLoader} from 'http://127.0.0.1:5500/three/examples/jsm/loaders/GLTFLoader.js';


// import base from '../base';
// import {GUI} from 'http://127.0.0.1:5500/three/examples/jsm/libs/dat.gui.module.js';
import make from "/src/three-base/make.js"

class Base extends make
{
    first_steps()
    {
        this.THREE= THREE
        this.OrbitControls=OrbitControls

            // console.log("null")
            let canvas=document.createElement("canvas");
            this.canvas=canvas
            canvas.className="App-canvas-2"


            if(window.React ==  undefined)
            {
                // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                document.body.append(this.canvas)
            }
                canvas.width=window.innerWidth
                // console.log("recat not here")
                canvas.height=window.innerHeight
            // }
            
            this.renderer = new THREE.WebGLRenderer({canvas});
        this.renderer.setClearColor(0xAAAAAA);
        this.renderer.shadowMap.enabled = true;
        this.scene = new THREE.Scene();        
        this.props.Object3D['scene']=this.scene

        this.Pcamera("basecamera",[0,0,0],[8, 4, 10],40,true,"scene");
        this.Dlight("baselight")
        this.Gcam=this.props.cam["basecamera"]
        // this.Dlight("baselight")
        let gridHelper = new this.THREE.GridHelper( 1000, 1000 );
        gridHelper.visible=false

        this.scene.add( gridHelper );


 
 
        this.Object3d("tellme")
        this.Mesh("tellme ground","tellme")
        this.props.Mesh["tellme ground"].rotation.x = Math.PI * -.5;
        


        this.render=this.render.bind(this)
    }
    props_setup()
    {
        this.props={
            cam:{},
            Object3D:{},
            light:{},
            Mesh:{},
            load:{},
            PlaneGeometry:{},
            PerspectiveCamera:{},
            DirectionalLight:{},
        }
    }

    add_in_cavas_item()
    {
       let  a=  document.querySelector("#canvas_item")
       a.appendChild(this.canvas)
    }
    constructor()
    {
        // console.log(canvas,null)
        super();
        this.props_setup()
        this.first_steps()
        // this.experiment()
        this.render()
    }

    experiment()
    {
                this.Dlight("baselight")
                this.Pcamera("basecamera",[0,0,0],[8, 4, 10],40,true,"scene");
        window.gltf=new FBXLoader()
        gltf.load( '/resources/zombie/mremireh_o_desbiens.fbx',(ev)=>{
            // console.log(this.scene.add(ev.scene))
            ev.scale.set(0.05,0.05,0.05)
            this.scene.add(ev)
            window.zombie=ev            
            console.log(ev)
            
        gltf.load( '/resources/zombie/dance.fbx',(ev)=>{
            // console.log(this.scene.add(ev.scene))
            // ev.scale.set(0.05,0.05,0.05)
            // this.scene.add(ev)
            window.dance=ev            
            console.log(ev)
            window.mixer=new this.THREE.AnimationMixer(window.zombie);
            window.idle=window.mixer.clipAction(zombie.animations[0])

    
        })
        
        })
                    
    }


    render(t)
    {
        this.renderer.render(this.scene,this.Gcam.cam)
        requestAnimationFrame(this.render)
    }
}



// window.a= new Base()
export default Base;