import React from 'react';

export default function Comment({deliver}){
    const {idx, imgUrl, title, comments, rate, nickName, comment} = deliver;
    const percent = rate*20;

    return(
        <div>
            <div className='Product'>
                <img src= {imgUrl} alt="상품 사진"/>
                <span> {title} </span>
            </div>
            
            <div className="Review">
                <span className="nick">{nickName}</span>

                <div className="star-ratings">
                    <div className="star">
                        <div className="fill-star space-x-2"
                             style={ {width: `${percent}%`} }>
                            <img src="fullStar.png"/>
                            <img src="fullStar.png"/>
                            <img src="fullStar.png"/>
                            <img src="fullStar.png"/>
                            <img src="fullStar.png"/>
                        </div>
                        <div className="empty-star space-x-2">
                            <img src="emptyStar.png"/>
                            <img src="emptyStar.png"/>
                            <img src="emptyStar.png"/>
                            <img src="emptyStar.png"/>
                            <img src="emptyStar.png"/>
                        </div>
                     </div>
                    <span>{rate}점</span>
                </div>

                <span>{comment}</span>
            </div>

        </div>
    )
}
