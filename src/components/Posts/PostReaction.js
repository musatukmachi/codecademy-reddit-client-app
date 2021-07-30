import React from 'react'
import '../../styles/Posts/PostReaction.css'

function PostReaction(props) {

    let ups = props.postData.upVotes;
    let upsThousRepresentation;

    const testThous = () => {
        if (ups > 1000) {
            let upsThous = Math.round((ups/1000) * 10) / 10;
            upsThousRepresentation = `${upsThous}K`;
            return true;
        }
        return false;
    }

    return (
        <div className="postreaction-container">
            <div>
            <i className="fas fa-arrow-up"></i>
            </div>
            {testThous() ? upsThousRepresentation : ups}
            <div>
            <i className="fas fa-arrow-down"></i>
            </div>
        </div>
    )
}

export default PostReaction
