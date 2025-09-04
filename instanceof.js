function myInstanceof (obj, constructor){
    if(obj ===null || typeof obj !== 'object')
        return false
    let proto = Object.getPrototypeOf(obj)
    while(proto){
        if(proto === constructor.prototype)
            {
                return true
            }
        else proto = proto.getPrototypeOf(proto)
    }
    return false
}