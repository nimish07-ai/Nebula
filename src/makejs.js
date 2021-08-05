import * as THREE from 'http://127.0.0.1:5500/three/build/three.module.js';
// import AxisGridHelper from "http://127.0.0.1:5500/v2/axishelper.js"
import ex from "http://127.0.0.1:5500/src/extrafunctions.js"

export default class makejs  extends ex
{
   
    makematerial(name,material,moptions,geometry,goption,Object3D=this.scene,parent="scene")
    {
        const groundGeometry = new THREE[`${geometry}`](...goption);
        const groundMaterial = new THREE[`${material}`](moptions);
        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
        this.kvo[name]=groundMesh;
        this.addin_obj(Object3D,groundMesh,parent,this.make_state_obj(groundMesh,name,parent))
    }
    makeobject3d(name,addin="scene")
    {
        let a=addin
        const addin2=this.convert_string_obj_to_Obj3d_or_undefined(addin)
        const obj3d=new THREE.Object3D();
  
        // addin2.add(obj3d)
        // console.log(this.make_state_obj(obj3d,name,a))
        this.addin_obj(addin2,obj3d,a,this.make_state_obj(obj3d,name,a))

        this.obj3d[name]=obj3d
        return obj3d
    }
    make_state_obj(Self,name,parent)
    {
        const obj={
            self:Self,
            name:name,
            parent:parent,
            cstate:{},
            children:{},
        }
        return obj
    }

// ignore
    makeCamera(name,lookat=[0,0,0],setat=[8, 4, 10],fov = 40) {
        if (this.cam.hasOwnProperty(name) ==false)
        {
            const aspect = 2;  // the canvas default
            const zNear = 0.1;
            const zFar = 1000;
            
            const camera=new THREE.PerspectiveCamera(fov, aspect, zNear, zFar);
            camera.lookAt(...lookat);
            camera.position.set(...setat).multiplyScalar(3);
            this.cam[name]=camera
            return camera
        }
    }
    makeAxisGrid(node, label, units) {
        const helper = new AxisGridHelper(node, units);
        this.gui.add(helper, 'visible').name(label);
      }
};