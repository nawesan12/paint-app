import React, { useRef, useEffect, useState } from 'react'

function Canvas() {

    const canvasRef = useRef(null)
    const contextRef = useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)

    useEffect(() => {
        // Config del canvas

        const canvas = canvasRef.current;
        canvas.width = window.innerWidth * 2;
        canvas.height = window.innerHeight * 2;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        canvas.style.background = '#fff';

        // Opciones del contexto, deben ser customizables

        const ctx = canvas.getContext('2d')
        ctx.scale(2, 2);
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 5;
        contextRef.current = ctx;
    }, []);

    // Comenzando a dibujar

    const startDrawing = ({nativeEvent}) => {
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    }

    // Finalizando de dibujar

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    }

    // Dibujando

    const draw = ({nativeEvent}) => {
        if(!isDrawing) return;
        const {offsetX, offsetY} = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
        
    }

    return (
        <canvas 
            id="canvas"
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseUp={finishDrawing}
            onMouseMove={draw}
        />
    );
}

export default Canvas;
