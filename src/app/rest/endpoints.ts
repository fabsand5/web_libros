import { HttpHeaders } from "@angular/common/http";

export class Endpoints{

    /* NUEVO DNS PRODUCCIÓN*/

    //  public static readonly ENDPOINT_API_DOCUMENTOS:string = "https://rsapi.chilefabian.cl/rs_documentos";
    //  public static readonly ENDPOINT_API_ZONAS:string = "https://rsapi.chilefabian.cl/rs_zonas";
    //  public static readonly ENDPOINT_API_VALES_CARGA:string = "https://rsapi.chilefabian.cl/rs_vales_carga";
    //  public static readonly ENDPOINT_API_libro:string = "https://rsapi.chilefabian.cl/rs_libro";
    //  public static readonly ENDPOINT_API_USUARIOS:string = "https://rsapi.chilefabian.cl/rs_usuarios";
    //  public static readonly ENDPOINT_API_TIPO_OBJECCION:string = "https://rsapi.chilefabian.cl/rs_tipo_objeccion";
    //  public static readonly ENDPOINT_API_RUTA: string = "https://rsapi.chilefabian.cl/rs_rutas";
    //  public static readonly ENDPOINT_API_RENDICION: string = "https://rsapi.chilefabian.cl/rs_rendicion";


/*=========================================================================================================================== */
/*=========================================================================================================================== */

    /* DESA */ 
    // public static readonly ENDPOINT_API_DOCUMENTOS:string = "http://13.178.64.101:10000";
    // public static readonly ENDPOINT_API_ZONAS:string = "http://13.178.64.101:10001";
    // public static readonly ENDPOINT_API_VALES_CARGA:string = "http://13.178.64.101:10002";
    // public static readonly ENDPOINT_API_libro:string = "http://13.178.64.101:10003";
    // public static readonly ENDPOINT_API_USUARIOS:string = "http://13.178.64.101:10004";
    // public static readonly ENDPOINT_API_TIPO_OBJECCION:string = "http://13.178.64.101:10005";
    // public static readonly ENDPOINT_API_RUTA: string = "http://13.178.64.101:10006";
    // public static readonly ENDPOINT_API_RENDICION: string = "http://13.178.64.101:10007";
    
    /* QA */
     public static readonly ENDPOINT_API_DOCUMENTOS:string = "http://13.178.64.102:10000";
     public static readonly ENDPOINT_API_ZONAS:string = "http://13.178.64.102:10001";
     public static readonly ENDPOINT_API_VALES_CARGA:string = "http://13.178.64.102:10002";
     public static readonly ENDPOINT_API_libro:string = "http://13.178.64.102:10003";
     public static readonly ENDPOINT_API_USUARIOS:string = "http://13.178.64.102:10004";
     public static readonly ENDPOINT_API_TIPO_OBJECCION:string = "http://13.178.64.102:10005";
     public static readonly ENDPOINT_API_RUTA: string = "http://13.178.64.102:10006";
     public static readonly ENDPOINT_API_RENDICION: string = "http://13.178.64.102:10007";

     /* PROD */
    //  public static readonly ENDPOINT_API_DOCUMENTOS:string = "http://192.168.10.35:71";
    //  public static readonly ENDPOINT_API_ZONAS:string = "http://192.168.10.35:76";
    //  public static readonly ENDPOINT_API_VALES_CARGA:string = "http://192.168.10.35:75";
    //  public static readonly ENDPOINT_API_libro:string = "http://192.168.10.35:70";
    //  public static readonly ENDPOINT_API_USUARIOS:string = "http://192.168.10.35:74";
    //  public static readonly ENDPOINT_API_TIPO_OBJECCION:string = "http://192.168.10.35:73";
    //  public static readonly ENDPOINT_API_RUTA: string = "http://192.168.10.35:72";
    
    /* LOCAL */
    // public static readonly ENDPOINT_API_DOCUMENTOS:string = "https://localhost:44380";
    // public static readonly ENDPOINT_API_ZONAS:string = "https://localhost:44319";
    // public static readonly ENDPOINT_API_VALES_CARGA:string = "https://localhost:44359";
    // public static readonly ENDPOINT_API_libro:string = "http://localhost:44384";
    // public static readonly ENDPOINT_API_USUARIOS:string = "https://localhost:44305";
    // public static readonly ENDPOINT_API_RUTA: string = "https://localhost:44313";
    // public static readonly ENDPOINT_API_RENDICION: string = "https://localhost:44392";
    // public static readonly ENDPOINT_API_TIPO_OBJECCION:string = "https://localhost:44329";


/*=========================================================================================================================== */
/*=========================================================================================================================== */


    public static readonly API_DOCUMENTOS_OBTENER_DETALLE_DOCTO:string = "/api/documentos/obtenerDetalleDocumento";
    public static readonly API_DOCUMENTOS_OBJETAR_DOCTO:string = "/api/documentos/objetarDocumento";
    public static readonly API_DOCUMENTOS_PREASIG_ZONA_DOCTO:string = "/api/documentos/preasignarZonaDocumento";
    
    public static readonly API_VALES_CARGA_OBTENER_LISTA_VALES_ASIGNACION:string = "/api/vales_carga/obtenerValeCargaAsignacion";
    public static readonly API_VALES_CARGA_OBTENER_LISTA_VALES:string = "/api/vales_carga/obtenerListaValeCarga";
    public static readonly API_VALES_CARGA_OBTENER_VALE_X_ZONA:string = "/api/vales_carga/obtenerResumenValeCargaXZona";
    public static readonly API_VALES_CARGA_AGREGAR_DOCUMENTO:string = "/api/vales_carga/agregarDocumentoValeCarga";
    public static readonly API_VALES_CARGA_ELIMINAR_DOCUMENTO:string = "/api/vales_carga/eliminarDocumentoValeCarga";
    public static readonly API_VALES_CARGA_CREAR:string = "/api/vales_carga/crearValeCarga";
    public static readonly API_VALES_CARGA_CERRAR:string = "/api/vales_carga/cerrarValeCarga";
    public static readonly API_VALES_CARGA_ANULAR:string = "/api/vales_carga/anularValeCarga";
    public static readonly API_VALES_CARGA_PREASIGNAR:string = "/api/vales_carga/preasignarValeCarga";
    public static readonly API_VALES_CARGA_OBTENER_DETALLE:string = "/api/vales_carga/obtenerDetalleValeCarga";
    public static readonly API_VALES_CARGA_OBTENER_LISTA_ESTADO:string = "/api/vales_carga/obtenerListaValeCargaEstado";
    public static readonly API_VALES_CARGA_PREASIGNADO:string = "/api/vales_carga/obtenerValeCargaPreasignado";
    public static readonly API_VALES_CARGA_REABRIR:string = "/api/vales_carga/reabrirValeCarga";

    public static readonly API_libro_OBTENER_libro:string = "/api/libro/obtenerlibro";
    public static readonly API_libro_EDITAR_libro:string = "/api/libro/editarlibro";
    public static readonly API_libro_OBTENER_LISTA_libroS:string = "/api/libro/obtenerListalibros";
    public static readonly API_libro_ACTIVAR_libro:string = "/api/libro/activarlibro";
    public static readonly API_libro_OBTENER_LISTA_AGENTES:string = "/api/libro/obtenerListaAgentes";

    public static readonly API_USUARIOS_OBTENER_USUARIO:string = "/api/usuarios/obtenerUsuario";
    public static readonly API_USUARIOS_OBTENER_BASES:string = "/api/usuarios/obtenerListaBases";
    public static readonly API_USUARIOS_VALIDAR_MAIL_USUARIO:string = "/api/usuarios/validarMailUsuario";

    public static readonly API_TIPO_OBJECCION_OBTENER_TIPO_OBJECCION:string = "/api/tipo_objeccion/obtenerTipoObjeccion";
    public static readonly API_TIPO_OBJECCION_OBTENER_DATOS_OBJECCION:string = "/api/tipo_objeccion/obtenerDatosObjeccion";
    public static readonly API_TIPO_OBJECCION_OBTENER_HISTORIAL_OBJECCION:string = "/api/tipo_objeccion/obtenerHistorialObjeccion";

    public static readonly API_RUTA_OBTENER_LISTA_RUTA:string = "/api/rutas/obtenerListaRuta";
    public static readonly API_RUTA_CREAR_RUTA: string = "/api/rutas/crearRuta";
    public static readonly API_RUTA_OBTENER_MANIFIESTO = "/api/rutas/obtenerManifiesto";
    public static readonly API_RUTA_OBTENER_RESUMEN_MANIFIESTO = "/api/rutas/obtenerResumenManifiesto";
    public static readonly API_RUTA_AGREGAR_VALE_CARGA_RUTA = "/api/rutas/agregarValeCargaRuta";
    public static readonly API_RUTA_OBTENER_DETALLE_RUTA = "/api/rutas/obtenerDetalleRuta";
    public static readonly API_RUTA_OBTENER_LISTA_RUTA_AGENTE = "/api/rutas/obtenerListaRutasAgente";
    public static readonly API_RUTA_AGREGAR_DOCUMENTO_RUTA = "/api/rutas/agregarDocumentoRuta";
    public static readonly API_RUTA_ELIMINAR_DOCUMENTO_RUTA = "/api/rutas/eliminarDocumentoRuta";
    public static readonly API_RUTA_REASIGNAR_RUTA = "/api/rutas/reasignarRuta";
    public static readonly API_RUTA_ANULAR_RUTA = "/api/rutas/anularRuta";
    public static readonly API_RUTA_GUARDAR_CAMBIOS_HOJA_RUTA = "/api/rutas/guardarDocumentoRedistribucion";

    public static readonly API_RUTA_SINCRONIZAR_RUTA_LEGACY = "/api/rutas/sincronizarRutaLegacy";
    public static readonly API_RUTA_ADD_DOC_SINCRONIZAR_LEGACY = "/api/rutas/syncAddRutaDocLegacy";
    public static readonly API_RUTA_DEL_DOC_SINCRONIZAR_LEGACY = "/api/rutas/syncDeleteRutaDocLegacy";
    public static readonly API_RUTA_ADD_VALE_CARGA_SINCRONIZAR_LEGACY = "/api/rutas/syncAgregarValeCargaRutaLegacy";
    public static readonly API_RUTA_ANULAR_SINCRONIZAR_LEGACY = "/api/rutas/syncAnularRutaLegacy";

    public static readonly API_RENDICION_OBTENER_LISTA_SOLUCIONES = "/api/rendicion/obtenerListaSoluciones";
    public static readonly API_RENDICION_APLICAR_REGLA = "/api/rendicion/aplicarRegla";
    public static readonly API_RENDICION_APLICAR_CAMBIOS = "/api/rendicion/aplicarCambiosSolucion";
    public static readonly API_RENDICION_OBTENER_HISTORIAL_SOLUCIONES = "/api/rendicion/obtenerHistorialSoluciones";

    public static readonly API_ZONAS_OBTENER_ZONAS:string = "/api/zonas/obtenerZonas";
    public static readonly API_ZONAS_OBTENER_ZONA_X_LOCALIDAD:string = "/api/zonas/obtenerZonaXLocalidad";
    public static readonly API_ZONAS_OBTENER_LISTA_ZONAS:string = "/api/zonas/obtenerListaZonas";
    public static readonly API_ZONAS_OBTENER_LISTA_ZONAS_CON_LOCALIDADES:string = "/api/zonas/obtenerListaZonasConLocalidades";
    public static readonly API_ZONAS_OBTENER_LISTA_LOCALIDADES_ASOCIADAS:string = "/api/zonas/obtenerListaLocalidadesAsociadas";
    public static readonly API_ZONAS_OBTENER_LISTA_LOCALIDADES_ASOCIADAS_NO:string = "/api/zonas/obtenerListaLocalidadesAsociadasNo";
    public static readonly API_ZONAS_EDITAR_ZONA:string = "/api/zonas/editarZona";
    public static readonly API_ZONAS_ACTIVAR_ZONA:string = "/api/zonas/activarZona";
    public static readonly API_ZONAS_ASOCIAR_LOCALIDAD_ZONA:string = "/api/zonas/asociarLocalidadesZona";



    public static readonly HEADERS:HttpHeaders = new HttpHeaders({'Content-Type':'application/json' , 'Access-Control-Allow-Origin':'*'});

}