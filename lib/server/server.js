
/** Created by fcampas on 4/27/16. */
(function () {
    'use strict';
    const oid=require('mongoid')
    const MAP=new WeakMap()
    const StorageServer={
        get TEMP(){
            if(!this.temp){
                this.temp={id:oid()}
                MAP.set(this.temp,new Map());
            }
            return MAP.get(this.temp);
        },
        core:function( o ){
            if(MAP.has(o)!==true){
                MAP.set(o,{
                    id:oid(),
                    data:new WeakMap()
                });
            }
            return MAP.get(o)
        },
        identify:function(o){
            var c = this.core(o)
            if(c) return c.id;
            return false;
        }
    }
    module.exports = StorageServer;
})();
