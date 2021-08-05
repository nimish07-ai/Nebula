class Delete{
    deleteobject(name)
    {
            let a=this.kvo[name]
           delete this.map_struct_key_value[a.parent].children[name] 
           delete this.map_struct_key_value[name]
    }
}