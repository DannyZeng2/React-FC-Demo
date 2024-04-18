import React from 'react';
import {
    bgYellow,
    BlueColor, blueFont, blueYellow,
    CustomizeColor,
    GreenColorCard, orangeColor
} from "../../../css/Common";

const EmotionDemo = () => {

    return (<>
            {/*1. Object Styles*/}
            <div css={orangeColor}>
                orange
            </div>

            {/*2. Styled Components*/}
            <BlueColor>
                Blue
            </BlueColor>

            <CustomizeColor color={'red'} fontSize={'30px'}>
                Red
            </CustomizeColor>

            <GreenColorCard>
                Green
            </GreenColorCard>

            {/*3. Composition*/}
            <div css={blueYellow}>
                111
            </div>
            <div css={[bgYellow, blueFont]}>
                222
            </div>
        </>
    );
}

export default EmotionDemo
