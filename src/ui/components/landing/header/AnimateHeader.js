import React, { useRef } from 'react'
import { useSpring } from 'react-spring'

import { WrapImageAnimateWrap, BoxImageAnimate } from '../../../components/Layout';

import bgAnimate1 from "../../../../assets/img/animate/1.svg";
import bgAnimate2 from "../../../../assets/img/animate/2.svg";
import bgAnimate3 from "../../../../assets/img/animate/3.svg";
import bgAnimate4 from "../../../../assets/img/animate/4.svg";
import bgAnimate5 from "../../../../assets/img/animate/5.svg";

const calc = (x, y, r) => [x - r.left - r.width / 2, y - r.top - r.height / 2];
const trans1 = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 10 + 15}px,${y / 10 - 10}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 8 - 100}px,${y / 8 - 10}px,0)`;
const trans4 = (x, y) => `translate3d(0px,${y / 3.5 - 20}px,0)`;
const trans5 = (x, y) => `translate3d(0px,${y / 3.8 - 20}px,0)`;

export function AnimateImg() {
    const ref = useRef(null);
    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 5, tension: 550, friction: 100 },
    }));
    return (
        <WrapImageAnimateWrap
            ref={ref}
            className="container"
            onMouseMove={e => {
                const rect = ref.current.getBoundingClientRect()
                set({ xy: calc(e.clientX, e.clientY, rect) })
            }}>
            <BoxImageAnimate image={bgAnimate3} variant='var3' style={{ transform: props.xy.interpolate(trans1) }} />
            <BoxImageAnimate image={bgAnimate2} variant='var2' style={{ transform: props.xy.interpolate(trans2) }} />
            <BoxImageAnimate image={bgAnimate1} variant='var1' style={{ transform: props.xy.interpolate(trans3) }} />
            <BoxImageAnimate image={bgAnimate4} variant='var4' style={{ transform: props.xy.interpolate(trans4) }} />
            <BoxImageAnimate image={bgAnimate5} variant='var5' style={{ transform: props.xy.interpolate(trans5) }} />
        </WrapImageAnimateWrap>
    )
}
