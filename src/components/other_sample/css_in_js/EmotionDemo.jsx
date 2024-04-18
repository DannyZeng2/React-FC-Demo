import React from 'react';
import {
    yellowBackground,
    BlueColor, blueFont,
    CustomizeColor,
    GreenColorCard, orangeColor, yellowBgWithRedLink
} from '../../../css/EmotionDemoCss';

const EmotionDemo = () => {

    return (<>
        {/*1. CSS props*/}
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
        <div css={[yellowBackground, blueFont]}>
                222
        </div>

        <div css={yellowBgWithRedLink}>
            <a>111</a>
        </div>
    </>
    );
}

export default EmotionDemo
