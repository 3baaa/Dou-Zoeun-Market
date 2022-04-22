import React from 'react';
import Button from 'react-bootstrap/Button';

const Img = React.memo(function Img({previewImg, onRemove, alt}){
    return (
        <div style={{display:'inline-block', margin: '10px 10px 10px 10px'}}>
            <img src={previewImg.ImgData} alt={alt} style={{width:'100px', height:'100px'}}/><br/>
            <Button style={{margin:'0 auto', width:'100%'}}onClick={() => onRemove(previewImg.id)}>취소</Button>
        </div>
    );
});
function ImgList({previewImgs, onRemove}) {
    return (
        <div>
            <br/>
            {
              previewImgs.map( (previewImg) => (
                <Img previewImg={previewImg} key={previewImg.id} onRemove={onRemove} alt=''/>)
              )
            }
        </div>
    );
}

export default React.memo(ImgList);