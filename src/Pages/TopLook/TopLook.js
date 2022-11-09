import React from 'react';
import './TopLook.css'

const TopLook = () => {
    return (
        <div className="card my-14 w-4/5 mx-auto bg-base-100 shadow-xl">
            <figure className='w-4/5 mx-auto'><img src="https://i.etsystatic.com/6855402/r/il/d13c28/3520298628/il_300x300.3520298628_esnu.jpg" alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">This is my favourite look till now</h2>
                <p>It was her big day ,she was really corcern about her makeup.She just wanted a soft but also glam kinda look. So I created this and she was really happy.Client's happy face is enough to make the day worthy.</p><br />
                <p>Doing makeup is a art for me. I listen every single line from client so that I can create look as they wanted to do.You might not be to shy to share your preference with the makeup artist.Artist preference might not be similar with yours so you should tell everything properly.</p>
            </div>
        </div>
    );
};

export default TopLook;