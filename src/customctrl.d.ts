/// <reference types="leaflet" />
declare namespace L {
  interface CustomOptions {
      position?: ControlPosition,
          id?: string,
          title?: string,
          classes?: string,
          content: string,
          style?: Object,
          datas?: Object,
          events?: Object,
  }
  namespace Control{
    class Custom extends L.Control{
      constructor(options?:CustomOptions)
    }
  }

  function custom(options:Object):Control.Custom;
}
