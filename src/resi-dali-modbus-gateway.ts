import * as nodered from "node-red" ;
import * as modbus from "modbus-serial" ;
var ModbusRTU = require( "modbus-serial") ;
//import nodered = require('node-red');
//import * as dali from "./daliProtocol" ;

var client      = new ModbusRTU() ;

export interface iPayload {
    address : number ;
    value : number ;
    quantity : number ;
}

/* function ensureDependencies(deps){
    //deps is just an array of dependencies that should be NPM installable, if no version is
    //required, and array of string may be sent, if a version is needed, an array of objects:
    //{name: "module-name", version: "^3.0.0"}
    var registry = require(require.main.filename.replace('red.js', 'red/runtime/nodes/registry/index.js'));
    var modules = registry.getModuleList();
    deps.forEach((mod) => {
      var o = typeof mod == "object";
      var m = o ? mod.name : mod;
      var v = o ? mod.verison : false;
      if(typeof modules[m] == 'undefined'){
         registry.installModule(m, v).then().catch((err) => {
           console.log("ensureDependencies Failed to install "+m+" from "+module.filename);
        });
      }
    });
  } */

function abc() {

} ;

module.exports = function (RED: nodered.NodeAPI) {
/**
 * 
 * @param commandName 
 * @returns 
 */
function decodeDALICommand( commandName : string ) {
    let result = {
        command : -1
    } ;
    switch( commandName.toLowerCase() ) {
        case "off":
            result.command = 0 ;
            break ;
        case "up":
            result.command = 1 ;
            break ;   
        case "down":
            result.command = 2 ;
            break ;     
        case "step up":
            result.command = 3 ;
            break ;          
        case "step down":
            result.command = 4 ;
            break ;     
        case "recall max level":
            result.command = 5 ;
            break ;     
        case "recall min level":
            result.command = 6 ;
            break ; 
        case "step down and off":
            result.command = 7 ;
            break ; 
        case "on and step up":
            result.command = 8 ;
            break ; 
        case "enable dapc sequence":
            result.command = 9 ;
            break ; 
        case "goto last active level":
            result.command = 10 ;
            break ; 
        case "goto scene 0":
            result.command = 16 ;
            break ; 
        case "goto scene 1":
            result.command = 17 ;
            break ; 
        case "goto scene 2":
            result.command = 18 ;
            break ;       
        case "goto scene 3":
            result.command = 19 ;
            break ;    
        case "goto scene 4":
            result.command = 10 ;
            break ;        
        case "goto scene 5":
            result.command = 21 ;
            break ; 
        case "goto scene 6":
            result.command = 22 ;
            break ; 
        case "goto scene 7":
            result.command = 23 ;
            break ;       
        case "goto scene 8":
            result.command = 24 ;
            break ;    
        case "goto scene 9":
            result.command = 25 ;
            break ;   
        case "goto scene 10":
            result.command = 26 ;
            break ;    
        case "goto scene 11":
            result.command = 27 ;
            break ;        
        case "goto scene 12":
            result.command = 28 ;
            break ; 
        case "goto scene 13":
            result.command = 29 ;
            break ; 
        case "goto scene 14":
            result.command = 30 ;
            break ;       
        case "goto scene 15":
            result.command = 31 ;
            break ;    
        case "store actual level in dtr":
            result.command = 32 ;
            break ;   
        case "store the dtr as max level":
            result.command = 42 ;
            break ;  
        case "store the dtr as min level":
            result.command = 42 ;
            break ; 
        case "store the dtr as min level":
            result.command = 43 ;
            break ; 
        case "store dtr as system failure level":
            result.command = 44 ;
            break ; 
        case "store dtr as power on level":
            result.command = 45 ;
            break ; 
        case "store dtr as fade time":
            result.command = 46 ;
            break ; 
        case "store dtr as fade rate":
            result.command = 47 ;
            break ; 
        case "store the dtr as scene 0":
            result.command = 64 ;
            break ; 
        case "store the dtr as scene 1":
            result.command = 65 ;
            break ; 
        case "store the dtr as scene 2":
            result.command = 66 ;
            break ; 
        case "store the dtr as scene 3":
            result.command = 67 ;
            break ; 
        case "store the dtr as scene 4":
            result.command = 68 ;
            break ; 
        case "store the dtr as scene 5":
            result.command = 69 ;
            break ; 
        case "store the dtr as scene 6":
            result.command = 70 ;
            break ; 
        case "store the dtr as scene 7":
            result.command = 71 ;
            break ; 
        case "store the dtr as scene 8":
            result.command = 72 ;
            break ; 
        case "store the dtr as scene 9":
            result.command = 73 ;
            break ; 
        case "store the dtr as scene 10":
            result.command = 74 ;
            break ; 
        case "store the dtr as scene 11":
            result.command = 75 ;
            break ; 
        case "store the dtr as scene 12":
            result.command = 76 ;
            break ; 
        case "store the dtr as scene 13":
            result.command = 77 ;
            break ; 
        case "store the dtr as scene 14":
            result.command = 78 ;
            break ; 
        case "store the dtr as scene 15":
            result.command = 79 ;
            break ; 
        case "remove from scene 0":
            result.command = 80 ;
            break ; 
        case "remove from scene 1":
            result.command = 81 ;
            break ; 
        case "remove from scene 2":
            result.command = 82 ;
            break ; 
        case "remove from scene 3":
            result.command = 83 ;
            break ; 
        case "remove from scene 4":
            result.command = 84 ;
            break ; 
        case "remove from scene 5":
            result.command = 85 ;
            break ; 
        case "remove from scene 6":
            result.command = 86 ;
            break ; 
        case "remove from scene 7":
            result.command = 87 ;
            break ; 
        case "remove from scene 8":
            result.command = 88 ;
            break ; 
        case "remove from scene 9":
            result.command = 89 ;
            break ; 
        case "remove from scene 10":
            result.command = 90 ;
            break ; 
        case "remove from scene 11":
            result.command = 91 ;
            break ; 
        case "remove from scene 12":
            result.command = 92 ;
            break ; 
        case "remove from scene 13":
            result.command = 93 ;
            break ; 
        case "remove from scene 14":
            result.command = 94 ;
            break ;
        case "remove from scene 15":
            result.command = 95 ;
            break ;
        case "add to group 0":
            result.command = 96 ;
            break ;
        case "add to group 1":
            result.command = 97 ;
            break ;
        case "add to group 2":
            result.command = 98 ;
            break ;
        case "add to group 3":
            result.command = 99 ;
            break ;
        case "add to group 4":
            result.command = 100 ;
        break ;
        case "add to group 5":
            result.command = 101 ;
            break ;
        case "add to group 6":
            result.command = 102 ;
            break ;
        case "add to group 7":
            result.command = 103 ;
            break ;
        case "add to group 8":
            result.command = 104 ;
            break ;
        case "add to group 9":
            result.command = 105 ;
        break ;
        case "add to group 10":
            result.command = 106 ;
            break ;
        case "add to group 11":
            result.command = 107 ;
            break ;
        case "add to group 12":
            result.command = 108 ;
            break ;
        case "add to group 13":
            result.command = 109 ;
            break ;
        case "add to group 14":
            result.command = 110 ;
        break ;
        case "add to group 15":
            result.command = 111 ;
        break ;
        case "remove from group 0":
            result.command = 112 ;
        break ;
        case "remove from group 1":
            result.command = 113 ;
        break ;
        case "remove from group 2":
            result.command = 114 ;
        break ;
        case "remove from group 3":
            result.command = 115 ;
        break ;
        case "remove from group 4":
            result.command = 116 ;
        break ;
        case "remove from group 5":
            result.command = 117 ;
        break ;
        case "remove from group 6":
            result.command = 118 ;
        break ;
        case "remove from group 7":
            result.command = 119 ;
        break ;
        case "remove from group 8":
            result.command = 120 ;
        break ;
        case "remove from group 9":
            result.command = 121 ;
        break ;
        case "remove from group 10":
            result.command = 122 ;
        break ;
        case "remove from group 11":
            result.command = 123 ;
        break ;
        case "remove from group 12":
            result.command = 124 ;
        break ;
        case "remove from group 13":
            result.command = 125 ;
        break ;
        case "remove from group 14":
            result.command = 126 ;
        break ;
        case "remove from group 15":
            result.command = 127 ;
        break ;
        case "store dtr as short address":
            result.command = 128 ;
        break ;
        case "enable write memory":
            result.command = 129 ;
        break ;
        case "query status":
            result.command = 144 ;
        break ;
        case "query control gear":
            result.command = 145 ;
        break ;
        case "query lamp failure":
            result.command = 146 ;
        break ;
        case "query lamp power on":
            result.command = 147 ;
        break ;
        case "query limit error":
            result.command = 148 ;
        break ;
        case "query reset state":
            result.command = 149 ;
        break ;
        case "query missing short address":
            result.command = 150 ;
        break ;
        case "query version number":
            result.command = 151 ;
        break ;
        case "query content dtr":
            result.command = 152 ;
        break ;
        case "query device type":
            result.command = 153 ;
        break ;
        case "query physical minimum level":
            result.command = 154 ;
        break ;
        case "query power failure":
            result.command = 155 ;
        break ;
        case "query content dtr1":
            result.command = 156 ;
        break ;
        case "query content dtr2":
            result.command = 157 ;
        break ;
        case "query actual level":
            result.command = 160 ;
        break ;
        case "query max level":
            result.command = 161 ;
        break ;
        case "query min level":
            result.command = 162 ;
        break ;
        case "query power on level":
            result.command = 163 ;
        break ;
        case "query system failure level":
            result.command = 164 ;
        break ;
        case "query fade time/fade rate":
            result.command = 165 ;
        break ;
    }

    return( result.command ) ;
} ;

/**
 * 
 * @param {*} registryName String registry name 
 * @param {*} uint16h 16bit registry high byte
 * @param {*} uint16l 16bit registry low byte
 * @returns 
 */
function prepareDALIRequest( registryName : string, uint16h : number, uint16l : number ) {
    let payload = <iPayload> new Object() ;
    let result = {
        modbus_fc : -1,
        registry : -1
    } ;

    switch( registryName.toLowerCase() ) {
        case "dali bus error":
            result.registry = 0 ;
            break ;
        case "lamp level":
            payload.address = 510 ;
            payload.value = (uint16h<<8)|uint16l ; // (address<<8)|level
            payload.quantity = 2 ;
            break ;
        case "group level":
            result.registry = 520 ;
            break ;
        case "all level":
            result.registry = 530 ;
            break ;
        case "lamp command dali 1.0":
            payload.address = 511 ;

            payload.value = (uint16h<<8)|uint16l ; // (address<<8)|command
            payload.quantity = 2 ;
            break ;
        case "lamp command+repeat dali 1.0":
            result.registry = 512 ;
            break ;
        case "group command dali 1.0":
            result.registry = 521 ;
            break ;
        case "group command+repeat dali 1.0":
            result.registry = 522 ;
            break ;
        case "all command dali 1.0":
            result.registry = 531 ;
            break ;
        case "all command+repeat dali 1.0":
            result.registry = 532 ;
            break ;
        case "direct 16 bit command dali 1.0":
            result.registry = 541 ;
            break ;
        case "direct 16 bit command+repeat dali 1.0":
            result.registry = 542 ;
            break ;
        case "dali status":
            result.registry = 550 ;
            break ;

        default:
            break ;
    }

    return( payload ) ;
}

function decodeDALIresponse( modbusResponse : any) {
    let payload = new Object() ;
    let result = {
        modbus_fc : -1,
        registry : -1
    } ;

    modbusResponse.daliResponse = {} ;

    switch( modbusResponse[ "registry-name" ].toLowerCase() ) {
        case "dali bus error":
            result.registry = 0 ;
            break ;
        case "lamp level":
            break ;
        case "group level":
            result.registry = 520 ;
            break ;
        case "all level":
            result.registry = 530 ;
            break ;
        case "lamp command dali 1.0":
            switch(modbusResponse.payload.value) {
                case 0x8000: // No answer received from the DALI bus up to now
                    modbusResponse.daliResponse.error = true ;
                    modbusResponse.daliResponse.code = modbusResponse.payload.value ;
                    modbusResponse.daliResponse.description = "No answer received from the DALI bus up to now" ;
                    break ;
                case 0x20FF: // A collsiion was detected on the DALI bus
                    modbusResponse.daliResponse.error = true ;
                    modbusResponse.daliResponse.code = modbusResponse.payload.value ;
                    modbusResponse.daliResponse.description = "A collsiion was detected on the DALI bus" ;
                break ;
                default:
                    modbusResponse.daliResponse.error = false ;
                    modbusResponse.daliResponse.code = modbusResponse.payload.value ;
                    modbusResponse.daliResponse.description = "The 8 bit result of the last command." ;
                    break ;
            }
            break ;
        case "lamp command+repeat dali 1.0":
            result.registry = 512 ;
            break ;
        case "group command dali 1.0":
            result.registry = 521 ;
            break ;
        case "group command+repeat dali 1.0":
            result.registry = 522 ;
            break ;
        case "all command dali 1.0":
            result.registry = 531 ;
            break ;
        case "all command+repeat dali 1.0":
            result.registry = 532 ;
            break ;
        case "direct 16 bit command dali 1.0":
            result.registry = 541 ;
            break ;
        case "direct 16 bit command+repeat dali 1.0":
            result.registry = 542 ;
            break ;
        case "dali status":
            result.registry = 550 ;
            break ;

        default:
            break ;
    }

    return( modbusResponse ) ;
}

    RED.nodes.registerType("dali-query",
    function (this: nodered.Node, config: any): void {
        RED.nodes.createNode(this, config);

        this.on("input", async (msg: any, send, done) => {
            msg.payload = prepareDALIRequest( 
                msg["registry-name"],
                msg[ "dali-address" ],
                decodeDALICommand( msg[ "command" ])
            ) ;

            if( typeof msg.payload.fc == "undefined" ) msg.payload[ "fc" ] = config[ "modbus-function" ] ;
            if( typeof msg.payload.unitid == "undefined" ) msg.payload[ "unitid" ] = config[ "modbus-unitid" ] ;

            send(msg);
            done();
        });
    });


    RED.nodes.registerType("dali-lamp-level",
    function (this: nodered.Node, config: any): void {
        RED.nodes.createNode(this, config);

        this.on("input", async (msg: any, send, done) => {

            send(msg);
            done();
        });
    });

    RED.nodes.registerType("dali-response",
    function (this: nodered.Node, config: any): void {
        RED.nodes.createNode(this, config);
        
        this.on("input", async (msg: any, send, done) => {
            this.status({
                fill:"green",
                shape:"dot",
                text: "{"
                    + msg.payload.address
                    + ", " + msg.payload.value
                    + "}"
            });

            send(msg);
            done();
        });
    });
}