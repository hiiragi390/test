import React from 'react';
import { useEffect, useRef } from 'react';


const centerX = 150;
const centerY = 150;
const body_margin = 0;
const distanceFromCenter = -10;
let x = 0;
let y = 0;
const ballRadius = 20;

export let InitialX = 0.0;

export function QFormat(){
    const canvasRef = useRef(null);
    useEffect(() =>{
        const canvas = canvasRef.current;
        let ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0095DD";
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);        
        ctx.fill();
        ctx.closePath();
        console.log(Math.PI);

        window.addEventListener("mousemove",(e) => {
            if(e.target.id=="canvas"){
                
                let rect = e.target.getBoundingClientRect() ;
                let X = e.clientX - rect.left + ballRadius;
                let Y = e.clientY - rect.top + ballRadius;
                let radius = Math.atan2(centerX - X,centerY - Y);
                x = - distanceFromCenter* Math.cos(radius) + centerX + body_margin;
                y = - distanceFromCenter* Math.sin(radius) + centerY + body_margin;

                let ctx = canvas.getContext('2d');
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = "#0095DD";
                ctx.beginPath();
                ctx.arc(X, Y, ballRadius, 0, 360);        
                ctx.fill();
                ctx.closePath();
                console.log(x," & ",y);
                InitialX = x;
            }
        }
        );

        },[]
    );

    return(
        <div>
            <canvas className="canvas" id="canvas" ref={canvasRef}></canvas>
        </div>
    );
}

export default QFormat;