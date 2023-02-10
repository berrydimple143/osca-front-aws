import React, { useRef, useEffect, useState } from 'react';
import { getCanvasData } from '../../services/memberService';
const baseImgURL = `${process.env.NEXT_PUBLIC_API}/images`;
const host = `${process.env.NEXT_PUBLIC_URL}`;

const Canvas = props => {
  const canvasRef = useRef(null);
  const base_image = new Image();
  const base_image_back = new Image();

  const wrapText = (ctx, text, x, y, maxWidth, lineHeight) => {
    const words = text.split(' ');
    let line = '';
    for (const [index, w] of words.entries()) {
      const testLine = line + w + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && index > 0) {
        ctx.fillText(line, x, y);
        line = w + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, x, y);
  }

  const draw = (ctx, name, address, bday, gender, issued, id, img, img2, photo, signature, position) => {
    if(position == 'front') {
      base_image.onload = () => {
        ctx.drawImage(base_image, -8, 1);
        ctx.font = "17px serif";
        ctx.fillStyle = "black";
        ctx.fillText(`${name}`, 155, 117);
        ctx.font = "13px serif";
        wrapText(ctx, `${address}`, 155, 158, 215, 18);
        ctx.font = "12px serif";
        ctx.fillText(`${bday}`, 155, 212);
        ctx.fillText(`${gender}`, 241, 212);
        ctx.fillText(`${issued}`, 300, 212);
        ctx.font = "9px serif";
        ctx.fillText(`${id}`, 47, 210);
        const qr_image = new Image();
        qr_image.onload = () => {
            ctx.drawImage(qr_image, 377, 173);
        }
        qr_image.src = `${img}`;

        if(photo != "") {
            const profile_image = new Image();
            profile_image.onload = () => {
                ctx.drawImage(profile_image, 20, 87);
            }
            profile_image.src = photo;
        }
        if(signature != "") {
            const signature_image = new Image();
            signature_image.onload = () => {
                ctx.drawImage(signature_image, 80, 217);
            }
            signature_image.src = signature;
        }
      }
      base_image.src = `${baseImgURL}/id_bg.jpg`;
    } else if(position == 'back') {
      base_image_back.onload = () => {
          ctx.drawImage(base_image_back, -8, 1);
          const qr_image_back = new Image();
          qr_image_back.onload = () => {
              ctx.drawImage(qr_image_back, 162, 87);
          }
          qr_image_back.src = `${img2}`;
      }
      base_image_back.src = `${baseImgURL}/id_bg_back.jpg`;
    }
  }

  const getData = async (id, position, context) =>
  {
      try {
          const { data } = await getCanvasData(id, host);
          draw(context, data.name, data.address, data.bday, data.gender, data.issued, data.id, data.img, data.img2, data.photo, data.signature, position);
      } catch (error) {
          message.error("Something went wrong.");
      }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    getData(props.selectedItemForPrint, props.position, context);
  }, []);

  return (
      <canvas ref={canvasRef} {...props} width={500} height={288} />
  );
}

export default Canvas;
