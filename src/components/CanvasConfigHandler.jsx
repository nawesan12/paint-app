import React, { useState } from 'react'

function CanvasConfigHandler() {

    const [config, setConfig] = useState({ background: '#fff', color: '#000', widthLine: 5 }) 

    return (
        <section className="canvasConfig">
            Seccion de configuracion
        </section>
    )
}

export default CanvasConfigHandler;
