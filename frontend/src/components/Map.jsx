import React from "react";
function iframe() {
    return {
        __html: '<iframe src="./Heatmap.html" width="540" height="450"></iframe>'
    }
}

// d13ae3c193ea30b892ebe60ac054a932

export default function Heatmap() {
   
    return (
        <div>
        <div dangerouslySetInnerHTML={iframe()} />
    </div>
    )
}
